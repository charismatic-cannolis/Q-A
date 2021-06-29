const models = require('../model/answers.js');

module.exports = {
  getAnswers: (req, res) => {
    const question_id = req.params.question_id;
    let page = req.query.page;
    let count = req.query.count;
    // defaults
    if (page === undefined) {
      page = 1;
    }
    if (count === undefined) {
      count = 5;
    }

    models.getAnswers(question_id, page, count)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send(err);
      })
  }
}