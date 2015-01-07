'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var fields = {
	name:		{type: String},
	desc:		{type: String},
	cost:		{type: Number},
	dmg:		{type: Number}
};

var grenadesSchema = new Schema(fields);

module.exports = mongoose.model('Grenades', grenadesSchema);