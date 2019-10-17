/*globals require, module */

const expressRouter = require('express').Router;
const router = expressRouter();

const { authController } = require('./auth.controller');

router.post('/login', authController.login);

module.exports = router;
