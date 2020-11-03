const router = require("express").Router();


const {
    abreCheckout,
    sinInicio,
    confirmacion
} = require("../controllers/ventas.controller");

// autentica que el usuario tenga iniciada sesion
const { isAuthenticated } = require("../helpers/auth");

router.get("/ventas/sinInicio", sinInicio)

router.get("/ventas/ckeckout", isAuthenticated, abreCheckout)

router.get("/ventas/confirmacion", isAuthenticated, confirmacion)

module.exports = router;