const router = require('express').Router();
const question = require('../controller/questions.js');
const answer = require('../controller/answers.js');


router.get('/:product_id', question.getQuestion);
router.get('/', question.getAll);
// router.get('answers/*', controller.getAnwers);
router.post('/:product_id', question.postQuestion);

//Patch request for question helpfulness and reported
router.patch('/:question_id/helpful', question.helpful);
router.patch('/:question_id/report', question.report);

// Answer routes
router.get('/:question_id/answers', answer.getAnswers);

module.exports = router;