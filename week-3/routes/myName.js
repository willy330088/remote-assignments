const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let name
    if (req.cookies.username && req.cookies.username != 'undefined') {
        name = req.cookies.username;
    } else {
        name = false;
    }
    res.render('myName', { name });
});

module.exports = router;