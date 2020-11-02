const router = require("express").Router();


const {
    abreCheckout,
    sinInicio
} = require("../controllers/ventas.controller");

// autentica que el usuario tenga iniciada sesion
const { isAuthenticated } = require("../helpers/auth");

router.get("/ventas/sinInicio", sinInicio)

router.get("/ventas/ckeckout", isAuthenticated, abreCheckout)

module.exports = router;