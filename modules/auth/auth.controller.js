/*globals  require, exports */

const authController = {
	async login(req, res) {
		const { userName, password } = req.body;

		if (userName === process.env.AUTH_LOGIN && password === process.env.AUTH_PASS) {
			res.json({
				token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NzEyNDA0ODUsImV4cCI6MTYwMjc3NjQ4NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.mozYnG8lPCnQMuZ_9PnySdSSbY5IGKgmO1RBQrHAi9g',
			});
		} else {
			res.json({
				data: 'Invalid request data',
			});
		}
	},
};

module.exports = { authController };
