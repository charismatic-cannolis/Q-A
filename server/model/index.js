const db = require('../../database/db.js');

module.exports = {
  getAllProductQuestions: (product_id) => {
    var queryString = 'SELECT id, product_id, body, date_written, asker_name, asker_email, helpful, reported FROM questions WHERE product_id=$1';

    db.pool.query(queryString, [product_id])
      .then(res => console.log(res))
      .catch(err => console.log('Error: ', err));
  },

  getAllQuestions: () => {
    var queryString = 'SELECT id, product_id, body, date_written, asker_name, asker_email, helpful, reported FROM questions';

    db.pool.query(queryString)
      .then(res => console.log(res))
      .catch(err => console.log('Error: ', err));
  }
}