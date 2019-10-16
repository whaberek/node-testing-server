/*globals require, module */

const expressRouter = require('express').Router;
const router = expressRouter();

const { tipsController } = require('./tips.controller');

router.get('/tips/:id', tipsController.getTips);

module.exports = router;
