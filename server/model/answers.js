const db = require('../../database/db.js');

module.exports = {
  getAnswers: (question_id, page, count) => {
    const queryString = `SELECT
    answers.id AS answer_id,
    answers.body,
    answers.answerer_name,
    answers.helpful AS helpfulness,
    json_agg (
      json_build_object (
        'id', photos.id,
        'url', photos.url
      )
    ) AS photos FROM photos
    INNER JOIN answers ON photos.answer_id = answers.id WHERE question_id=${question_id} AND answers.reported=false GROUP BY answers.id LIMIT ${count};`;

    return db.pool.query(queryString)
      .then(data => {
        return data.rows;
      })
      .catch((err) => {
        console.log('Error: ', err);
      })
  },

  helpful: (answer_id) => {
    const queryString = `UPDATE answers set helpful = helpful+1 WHERE id = ${answer_id};`

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