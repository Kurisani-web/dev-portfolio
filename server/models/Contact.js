const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  company: {
    type: String,
    default:""
  },
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  mobile:{
    type: Number,
    required:true
  },
  message:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default:Date.now()
  }
});

module.exports = mongoose.model('contact',contactSchema);