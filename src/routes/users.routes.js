const router = require("express").Router();

const {
  iniciarSesion,
  registrarse,
  singup
} = require("../controllers/users.controller");

// Routes
router.get("/users/signin", iniciarSesion);

router.get("/users/signup", registrarse);

router.post("/users/signup", singup)

module.exports = router;

