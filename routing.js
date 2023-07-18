const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/" + "index.html");
});

router.get("/category", (req, res) => {
  res.sendFile(__dirname + "/view/" + "category.html");
});

router.get("/product", (req, res) => {
  res.sendFile(__dirname + "/view/" + "product.html");
});

module.exports = router;
