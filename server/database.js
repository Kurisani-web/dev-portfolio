const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
const dbOptions = {
  dbName: process.env.DBNAME,
}
const connectToMongo = async () => {
    try {
      mongoose.set("strictQuery", false);
      await mongoose.connect(mongoURI,dbOptions);
      console.log("Connected to Mongo Successfully!");
    } catch (error) {
      // console.log(error);
      console.log("An Error Occured",error);
    }
  };
module.exports = connectToMongo;