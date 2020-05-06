const request = require('request');

const formsController = {
	async validateRecaptcha(req, res) {
			res.json({
				responseCode : 0,
				responseDesc : 'Success'
			});
	},
};

module.exports = { formsController };
