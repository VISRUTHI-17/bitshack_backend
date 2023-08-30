const express = require("express");
const router = express.Router();
// const object = require("./controllers.js");

router.get("/", function (req, res) {
  res.send("<h1>Welcome to Saloon!</h1>");
});

module.exports = router;
