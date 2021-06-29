const router = require('express').Router();
const controller = require('../controller/index.js');


router.get('/:product_id', controller.getProductQuestions);
router.get('/', controller.getQuestions);
// router.get('answers/*', controller.getAnwers);
router.post('/:product_id', controller.postQuestion);

router.patch('/:question_id/helpful', controller.questionHelpful);

// Answer routes
router.post('/:question_id/answers', controller.postAnswer);

module.exports = router;