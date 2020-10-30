const router = require("express").Router();

const {
  indexPrincipal
} = require("../controllers/index.controller");

// Routes
router.get("/", indexPrincipal);

module.exports = router;
