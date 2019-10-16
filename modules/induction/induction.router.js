/*globals require, module */

const expressRouter = require('express').Router;
const router = expressRouter();

const { inductionController } = require('./induction.controller');

router.get('/PersonalQuestionnaire/GetFormDetails', inductionController.mockResponse);

module.exports = router;
