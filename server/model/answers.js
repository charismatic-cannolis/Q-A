const db = require('../../database/db.js');

module.exports = {
  getAnswers: (question_id, page, count) => {
    const queryString = `SELECT * FROM answers WHERE question_id = ${question_id} LIMIT ${count}; `;

    return db.pool.query(queryString)
      .then(data => {
        return data.rows;
      })
      .catch((err) => {
        console.log('Error: ', err);
      })
  },

  helpful: (answer_id) => {
    const queryString = `UPDATE answers set helpful = helpful +1 WHERE id = ${answer_id};`

    return db.pool.query(queryString)
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  },

  report: (answer_id) => {
    const queryString = `UPDATE answers set reported = 'true' WHERE id = ${answer_id};`

    return db.pool.query(queryString)
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  }
}