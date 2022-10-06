const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Welcome Profile panel');
});

module.exports= router;