var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/earlyapple', function (req, res, next) {
    res.render('part', {
        title: 'Основание компании Apple',
        picture: 'images/first-apple-logo.png',
        desc: 'Как основалась компания и первые 200 компьютеров собранные вручную'
    });
});

router.get('/appledownfall', function (req, res, next) {
    res.render('part', {
        title: 'Уход Стива Джобса и падение компании',
        picture: 'images/apple-downfall.jpg',
        desc: 'Увольнение Джобса из собственной компании и падение'
    });
});

router.get('/applenow', function (req, res, next) {
    res.render('part', {
        title: 'Как дела у Apple сейчас',
        picture: 'images/apple-park.jpg',
        desc: 'Сейчас компания является лидером рыночной капитализации'
    });
});

module.exports = router;
