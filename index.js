var express = require("express");
var app = express();
const mongoose = require("mongoose");
const user = require("./Routes/user");
var morgan = require("morgan");
app.use(morgan("combined"));
//Routes
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use("/user", user);
//Database
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });
mongoose.connection
  .once("open", function () {
    console.log("Database connected Successfully");
  })
  .on("error", function (err) {
    console.log("Error", err);
  });
app.listen(8000, function () {
  console.log("Listening to Port 8000");
});
