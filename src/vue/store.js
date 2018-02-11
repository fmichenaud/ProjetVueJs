var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Item = new Schema({
  title: {
    type: String
  },
  year: {
    type: Number
  },
  language: {
    type: String
  },
  realisator_lastname: {
    type: String
  },
  realisator_firstname: {
    type: String
  },
  realisator_nationality: {
    type: String
  },
  realisator_birthday: {
    type: Number
  },
  kind: {
    type: String
  },
  image: {
    type: String
  }
},{
	collection: 'items'
});

module.exports = mongoose.model('Item', Item);
