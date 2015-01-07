'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var fields = {
 	name: 		{type: String},
	desc:		{type: String},
	cost:		{type: Number},
	award: 		{type: Number},
	firerate: 	{type: Number},
	accuracy: 	{type: Number},
	movement: 	{type: Number},
	armor: 		{type: Number},
	ammo:		{type: Number},
	magazine: 	{type: Number},
	dmg:		{type: Number},
	team:		[{type: Schema.Types.ObjectId, ref: 'Team'}]
};

var secondarySchema = new Schema(fields);

module.exports = mongoose.model('Secondary', secondarySchema);