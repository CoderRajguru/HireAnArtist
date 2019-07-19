const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let DirectorInfo = new Schema({
  user_id: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  contact: {
    type: String
  },
  privacy_type: {
    type: Number
  },
  rating: {
    type: Number
  }
},{
    collection: 'director'
});

module.exports = mongoose.model('director', DirectorInfo);