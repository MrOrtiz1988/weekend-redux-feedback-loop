const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const newFeedback = req.body;
    console.log(newFeedback);
    let squlText = `
        INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments")
        VALUES
        ($1, $2, $3, $4);
    `;
    let sqlValues = [newFeedback.feeling, newFeedback.understanding, newFeedback.supported, newFeedback.comments]

    pool.query(squlText, sqlValues)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((dbErr) => {
            console.log('POST /feedback error:', dbErr);
            res.sendStatus(500);
        })
})


module.exports = router;