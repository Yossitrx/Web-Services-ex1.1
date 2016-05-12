'use strict';
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var studentSchema = new Schema ({
 	name: {type:String,index:1,require:true},
 	grade:String,
 	id: {type:String,require:true,unique:true},
 	year:String
 },{collection: 'students'});

module.exports = mongoose.model('Student', studentSchema);