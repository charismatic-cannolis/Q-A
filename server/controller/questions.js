const models = require('../model/questions.js');

module.exports = {
  // Get a all reveiws for a single product
  getQuestion: (req, res) => {
    const productId = req.params.product_id;
    let page = req.query.page;
    let count = req.query.count;
    // defaults
    if (page === undefined) {
      page = 1;
    }
    if (count === undefined) {
      count = 5;
    }
    models.getQuestion(productId, page, count)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => res.status(500).send(err));
  },
  // Get all the reviews
  getAll: (req, res) => {
    models.getAll();
    res.end();
  },

  // Post a question to a product given a product id
  postQuestion:(req, res) => {
    const body = req.body.body;
    const asker_name = req.body.asker_name;
    const asker_email = req.body.asker_email;
    const product_id = req.params.product_id;
    models.postQuestion(product_id, body, asker_email, asker_name)
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => res.status(500).send(err));
  },

  // Increment helpfulness
  helpful: (req,res) => {
    const question_id = req.params.question_id;
    models.updateHelpful(question_id)
      .then(data => {
        res.status(202).send(data);
      })
      .catch(err => {
        res.status(204).send(err);
      })
  },

  report: (req, res) => {
    const question_id = req.params.question_id;
    models.updateReport(question_id)
      .then(data => {
        res.status(202).send(data);
      })
      .catch(err => {
        res.status(204).send(err);
      })
  }
}