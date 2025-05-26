require('dotenv').config();
const connectToMongo = require('./database');
connectToMongo();

const express = require('express');
const errorMiddleware = require('./middleware/error-middleware');
const app = express();
const port = 3000;
const cors = require("cors");
app.use(express.json());

const allowedOrigins = [
  "https://kurisani-maluleke.vercel.app",
  "https://infinity-game-mu.vercel.app"
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use('/api/form', require('./routes/contact'));
app.use('/location', require('./routes/location'));

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
