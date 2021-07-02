const router = require('express').Router();
const question = require('../controller/questions.js');
const answer = require('../controller/answers.js');


router.get('/questions/:product_id', question.getQuestion);
router.get('', question.getAll);
// router.get('answers/*', controller.getAnwers);
router.post('/questions/:product_id', question.postQuestion);

//Patch request for question helpfulness and reported
router.put('/questions/:question_id/helpful', question.helpful);
router.put('/questions/:question_id/report', question.report);

// Answer get request
router.get('/questions/:question_id/answers', answer.getAnswers);

//post request for answers
router.post('/questions/:question/answers', answer.postAnswer);

// Answers patch requests for helpfulness and reported
router.put('/answers/:answer_id/helpful', answer.helpful);
router.put('/answers/:answer_id/report', answer.report);

module.exports = router;