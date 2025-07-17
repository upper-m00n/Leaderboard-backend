const express= require('express');
const router= express.Router();
const {claimPoints}= require('../controller/claimController')

router.put('/:userId',claimPoints);

module.exports =router