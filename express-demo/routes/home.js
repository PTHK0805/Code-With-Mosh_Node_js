const express = require('express');
const router = express.Router();

// HTTP GET Request
router.get('/', (req, res) => {
  res.render('index', { title: 'My Express App', message:'Hello, Welcome to my website'});
});

module.exports = router;
