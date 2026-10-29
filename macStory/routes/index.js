var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/earlyapple', function (req, res, next) {
    res.send("<h1>Как все началось</h1>");
});

router.get('/appledownfall', function (req, res, next) {
    res.send("<h1>Уход Стива Джобса и крах компании</h1>");
});

router.get('/applenow', function (req, res, next) {
    res.send("<h1>Apple сейчас</h1>")
});

module.exports = router;
