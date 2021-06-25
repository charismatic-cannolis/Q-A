const models = require('../model/index.js');

module.exports = {
  getProductQuestions: (req, res) => {
    models.getAllProductQuestions(req.params[0]);
    res.end();
  },
  getQuestions: (req, res) => {
    models.getAllQuestions();
    res.end();
  }
}