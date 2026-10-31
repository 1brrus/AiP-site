var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с parts');
});

router.get("/:short", function (req, res, next) {
    res.send(req.params.short);
});

module.exports = router;
