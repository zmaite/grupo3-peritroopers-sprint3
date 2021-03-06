const express = require('express');
const router = express.Router();
const controller = require('../controller/homeController');

router.get('/', controller.home);

router.get('/faq', controller.faq);

module.exports = router;