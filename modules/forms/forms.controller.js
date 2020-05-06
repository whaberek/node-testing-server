const request = require('request');

const formsController = {
	async validateRecaptcha(req, res) {
		// if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
		// 	return res.json({
		// 		responseCode : 1,
		// 		responseDesc : 'Please select captcha',
		// 	});
		// }
		// const secretKey = process.env.RECAPTCHA_SECRET_KEY;
		// const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body['g-recaptcha-response']}&remoteip=${req.connection.remoteAddress}`;
		//
		// request(verificationUrl,function(error,response,body) {
		// 	body = JSON.parse(body);
		// 	// Success will be true or false depending upon captcha validation.
		// 	if(body.success !== undefined && !body.success) {
		// 		return res.json({
		// 			responseCode : 1,
		// 			responseDesc : 'Failed captcha verification'
		// 		});
		// 	}
			res.json({
				responseCode : 0,
				responseDesc : 'Success'
			});
		// });
	},
};

module.exports = { formsController };
