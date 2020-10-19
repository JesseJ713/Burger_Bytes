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