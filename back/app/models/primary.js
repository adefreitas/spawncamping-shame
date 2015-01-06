'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var fields = {
 
};

var primarySchema = new Schema(fields);

module.exports = mongoose.model('Primary', primarySchema);