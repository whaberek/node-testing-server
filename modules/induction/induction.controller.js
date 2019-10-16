/*globals  require, exports */

const	{ mockBackendResponse } = require('modules/induction/induction.mocks');

const inductionController = {
	mockResponse(req, res) {
		res.json(mockBackendResponse);
	},
};

module.exports = { inductionController };
