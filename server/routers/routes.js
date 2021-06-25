const router = require('express').Router();
const controller = require('../controller/index.js');


router.get('/:product_id', controller.getProductQuestions);
router.get('/', controller.getQuestions);
// router.get('answers/*', controller.getAnwers);

module.exports = router;