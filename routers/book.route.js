const { Router } = require("express");

const route = Router();

route.get("/", (req, res) => {
  res.json("OK book");
});

module.exports = route; 



