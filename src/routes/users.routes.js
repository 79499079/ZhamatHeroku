const router = require("express").Router();

const {
  iniciarSesion,
  registrarse,
  signup,
  signin,
  logout
} = require("../controllers/users.controller");

// Routes
router.get("/users/signin", iniciarSesion);

router.post("/users/signin", signin);

router.get("/users/signup", registrarse);

router.post("/users/signup", signup)

router.get("/users/logout", logout);

module.exports = router;

