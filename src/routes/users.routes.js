const router = require("express").Router();

const {
  iniciarSesion,
  registrarse
} = require("../controllers/users.controller");

// Routes
router.get("/users/signin", iniciarSesion);

router.get("/users/signup", registrarse);


module.exports = router;

