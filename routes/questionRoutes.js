const express = require('express');
const { submitAnswers } = require('../controller/questionController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/submit', submitAnswers);

module.exports = router;
