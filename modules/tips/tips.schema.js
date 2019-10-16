/*globals require, module */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipsSchema = new Schema({
	name: String,
	createdBy: String,
});

const Tips = mongoose.model('tips', tipsSchema);

module.exports = Tips;