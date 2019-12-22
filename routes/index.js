const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  let message = 'Hello from index route';
  res.status(200).render('index', { message })
});

module.exports = router;