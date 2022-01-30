var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("../Models/user");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/add", function (req, res) {
  const user = new User({
    userName: req.body.userName,
    userPassword: req.body.userPassword,
    userType: req.body.userType,
  });
  user.save().then((val) => {
    res.json({ msg: "User Added Successfully", val: val });
  });
});

module.exports = app;
