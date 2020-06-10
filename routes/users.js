const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('Voici ma page des utilisateurs !');
});

module.exports = router;
