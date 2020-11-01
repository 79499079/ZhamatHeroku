const router = require("express").Router();

const {
  indexPrincipal,
  enviaEmail
} = require("../controllers/index.controller");

// Routes
router.get("/", indexPrincipal);

router.post('/enviarEmail', enviaEmail)

module.exports = router;
