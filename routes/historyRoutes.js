const express = require('express');
const router = express.Router();
const {getUserHistory}= require('../controller/historyController')

router.get('/',getUserHistory);

module.exports = router