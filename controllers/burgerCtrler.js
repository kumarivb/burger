// import express and burger.js
var express = require("express");
var burger = require("../models/burger.js");

// router
var router = express.Router();

// create routes
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        console.log(data);
        res.render("index",{data});
    });
});

router.post("/", function(req, res) {
    burger.insertOne([
        "burgerName", "devoured"        
    ], [
        req.body.burgerName, req.body.devoured
    ], function(result) {
        res.redirect("/")
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.update({
        devoured: true
    }, {id: req.params.id}, function(data) {
        res.redirect("/")
    });
});

// router.get("/", function(req, res) {
//     res.render("index");

// export router
module.exports = router;