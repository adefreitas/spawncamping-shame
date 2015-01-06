'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var fields = {
 
};

var secondarySchema = new Schema(fields);

module.exports = mongoose.model('Secondary', secondarySchema);