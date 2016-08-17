'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Quiz = new Schema({
  template: String,
  subject: String,
  created: Date,
  fields: Array
});

module.exports = mongoose.model('Quiz', Quiz);