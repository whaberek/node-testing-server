/*globals  require, exports */

const { tipsMock } = require('./tips.mocks');

const tipsController = {
  getTips(req, res) {
    res.json(tipsMock);
  },
};

module.exports = { tipsController };
