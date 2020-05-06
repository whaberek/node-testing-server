/*globals require, module */

const expressRouter = require('express').Router;
const router = expressRouter();

const { formsController } = require('modules/forms/forms.controller');

router.get('/form', formsController.validateRecaptcha());

module.exports = router;
