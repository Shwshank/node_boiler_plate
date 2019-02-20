const mongoose = require('mongoose');

// Article Schema
let userCollection1 = mongoose.Schema({
  name:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  }
});

let user = module.exports = mongoose.model('userCollection1',userCollection1);
