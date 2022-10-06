const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Welcome User panel');
});

module.exports= router;