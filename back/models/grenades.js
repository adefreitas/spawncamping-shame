'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var fields = {
 
};

var grenadesSchema = new Schema(fields);

module.exports = mongoose.model('Grenades', grenadesSchema);