const db = require('../../database/db.js');

module.exports = {
  // TO DO: re-write this, not getting the correct data
  // TO DO: if reported is true, do not show on get
  getQuestion: (product_id, page, count) => {
    var queryString = 'SELECT questions.id, product_id, questions.body, questions.date_written, asker_name, asker_email, questions.helpful, questions.reported, answers.id, answers.body, answers.date_written, answerer_name, answers.helpful FROM questions FULL OUTER JOIN answers on questions.id=answers.question_id  WHERE product_id=$1 LIMIT $2;';

    return db.pool.query(queryString, [product_id, count])
      .then(data => {
        // console.log(data);
        return data.rows;
      })
      .catch(err => console.log('Error: ', err));
  },

  // Get all questions from DB
  // TODO: Write to get all questions with nested answers and  photos
  getAll: () => {
    var queryString = 'SELECT id, product_id, body, date_written, asker_name, asker_email, helpful, reported FROM questions;';

    console.log('getAllQuestions');

    db.pool.query(queryString)
      .then(data => {
        return data.rows;
      })
      .catch(err => console.log('Error: ', err));
  },

  // Post question to db
  postQuestion: (product_id, body, asker_email, asker_name) => {
    var queryString = `INSERT INTO questions (product_id, body, date_written, asker_name, asker_email) VALUES (${product_id}, '${body}', CURRENT_TIMESTAMP, '${asker_name}', '${asker_email}');`;

    return db.pool.query(queryString)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  },

  // Increment the helpful column by one
  updateHelpful: (question_id) => {
    var queryString = `UPDATE questions set helpful = helpful +1 WHERE id = ${question_id};`;

    return db.pool.query(queryString)
      .then(data => {
        return data;
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  },

  // Set reported column to true
  updateReport: (question_id) => {
    var queryString = `UPDATE questions set reported = 'true' WHERE id = ${question_id};`

    return db.pool.query(queryString)
    .then(data => {
      return data;
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
  }
}