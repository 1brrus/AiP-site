var express = require("express");
var router = express.Router();
var Part = require("../models/part").Part;

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("Новый маршрутизатор, для маршрутов, начинающихся с parts");
});

router.get("/:short", async function (req, res, next) {
    var parts = await Part.find({ short: req.params.short });
    console.log(parts);

    if (!parts.length) return next(new Error("Нет такой части истории"));

    var part = parts[0];
    res.render("part", {
        title: part.title,
        picture: part.picture,
        desc: part.desc,
    });
});

module.exports = router;
