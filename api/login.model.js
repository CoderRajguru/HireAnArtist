const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Login = new Schema({
  user_name: {
    type: String
  },
  user_password: {
    type: String
  },
  user_type: {
    type: Number
  }
},{
    collection: 'login'
});

module.exports = mongoose.model('Login', Login);
