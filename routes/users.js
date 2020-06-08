var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Voici ma page des utilisateurs !');
});

module.exports = router;
