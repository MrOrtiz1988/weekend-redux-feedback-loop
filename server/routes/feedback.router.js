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

router.get('/', (req, res) => {

    const sqlText = `SELECT * FROM feedback ORDER BY date ASC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})


module.exports = router;