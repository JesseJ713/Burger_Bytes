let express = require("express");
let burger = require("../models/burger");

let router = express.Router();

router.get("/" , function (req, res) {
    burger.all(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log("hbsObject: ", hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create(req.body.burger_name, function(result) {
        res.json({ id: result.insertId });
    });
});