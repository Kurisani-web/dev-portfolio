require('dotenv').config();
const connectToMongo = require('./database');
connectToMongo();

const express = require('express');
const errorMiddleware = require('./middleware/error-middleware');
const app = express();
const port = 3000;
const cors = require("cors");
app.use(express.json())
const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  Credentials:true,
};
app.use(cors(corsOption));

app.use('/api/form',require('./routes/contact'))

app.use(errorMiddleware);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})