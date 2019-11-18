/*globals require, module */

const expressRouter = require('express').Router;
const router = expressRouter();

const { itemsController } = require('./items.controller');

router.get('/items', itemsController.generateItems);

module.exports = router;
