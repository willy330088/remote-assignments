const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let answer;
    let wrong;
    let targetNumber;

    if (isNaN(req.query.number) || parseInt(req.query.number) < 0) {
        answer = true;
        wrong = true;
    } else {
        req.query.number = parseInt(req.query.number);
        targetNumber = req.query.number;
        answer = (1 + targetNumber) * targetNumber / 2;
    }

    res.render('getData', { answer, wrong, targetNumber });
});

module.exports = router;