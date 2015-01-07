'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var fields = {
	name: 		{ type: String },
	special:	{ type: String },
	desc: 		{ type: String },
	type: 		{ type: String },
	cost: 		{ type: Number },
	award: 		{ type: Number },
	firerate: 	{ type: Number },
	accuracy: 	{ type: Number },
	movement: 	{ type: Number },
	armor: 		{ type: Number },
	ammo:		{ type: Number },
	magazine: 	{ type: Number },
	range:		{ type: Number },
	dmg:		{ type: Number },
	team:		[{type: Schema.Types.ObjectId, ref: 'Team'}]
};

var primarySchema = new Schema(fields);

module.exports = mongoose.model('Primary', primarySchema);