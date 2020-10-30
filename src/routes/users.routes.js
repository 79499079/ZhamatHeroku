const router = require("express").Router();

const {
  entraUsuario
} = require("../controllers/users.controller");

// Routes
router.get("/users/signin", entraUsuario);



module.exports = router;

