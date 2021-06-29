const router = require('express').Router();
const controller = require('../controller/index.js');


router.get('/:product_id', controller.getProductQuestions);
router.get('/', controller.getQuestions);
// router.get('answers/*', controller.getAnwers);
router.post('/:product_id', controller.postQuestion);

module.exports = router;