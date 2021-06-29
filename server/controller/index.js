const models = require('../model/index.js');

module.exports = {
  getProductQuestions: (req, res) => {
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
    models.getAllProductQuestions(productId, page, count)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => res.status(500).send(err));
  },
  getQuestions: (req, res) => {
    models.getAllQuestions();
    res.end();
  },
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
  }
}