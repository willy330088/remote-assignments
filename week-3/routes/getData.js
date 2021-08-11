const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let answer;
    let wrong;

    if (req.query.number == 'xyz') {
        answer = 'xyz';
        wrong = true;
    } else {
        req.query.number = parseInt(req.query.number);
        const { number } = req.query;
        answer = (1 + number) * number / 2;
    }
    res.render('getData', { answer, wrong });
});

module.exports = router;