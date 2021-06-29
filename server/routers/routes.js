const router = require('express').Router();
const controller = require('../controller/index.js');


router.get('/:product_id', controller.getProductQuestions);
router.get('/', controller.getQuestions);
// router.get('answers/*', controller.getAnwers);
router.post('/:product_id', controller.postQuestion);

//Patch request for question helpfulness and reported
router.patch('/:question_id/helpful', controller.questionHelpful);
router.patch('/:question_id/report', controller.questionReport);

// Answer routes
router.post('/:question_id/answers', controller.postAnswer);

module.exports = router;