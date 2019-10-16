/*globals require, module */

const expressRouter = require('express').Router;
const router = expressRouter();

const { authController } = require('./auth.controller');

router.post('/Authenticate', authController.login);

module.exports = router;
