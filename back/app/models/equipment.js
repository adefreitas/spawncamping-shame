'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var fields = {
 
};

var equipmentSchema = new Schema(fields);

module.exports = mongoose.model('Equipment', equipmentSchema);