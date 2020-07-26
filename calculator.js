// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded( {extended: true}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {
  res.send("thanks");
});
app.listen(3000, function() {
  console.log("port established at 3000");
});
