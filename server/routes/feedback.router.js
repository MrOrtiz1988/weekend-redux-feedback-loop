const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const feedbackArray = [];

router.post('/', (req, res) => {
    const newFeedback = req.body;
    console.log(newFeedback);
    feedbackArray.push(newFeedback);
    res.sendStatus(201);
})


module.exports = router;