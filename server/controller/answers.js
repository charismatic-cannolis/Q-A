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
        const formattedData = {
          "question": question_id,
          "page": page,
          "count": count,
          "result": data
        }
        res.status(200).send(formattedData);
      })
      .catch(err => {
        res.status(500).send(err);
      })
  },

  helpful: (req, res) => {
    const answer_id = req.params.answer_id;
    models.helpful(answer_id)
      .then(data => {
        res.status(202).send(data);
      })
      .catch(err => {
        res.status(204).send(err);
      });
  },

  report: (req, res) => {
    const answer_id = req.params.answer_id;
    models.report(answer_id)
      .then(date => {
        res.status(202).send(data);
      })
      .catch(err => {
        res.status(204).send(err);
      })
  }
}