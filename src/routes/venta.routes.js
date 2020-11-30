const router = require("express").Router();


const {
    abreCheckout,
    sinInicio,
    confirmacion,
    respuesta,
    pagoContraentrega
} = require("../controllers/ventas.controller");

// autentica que el usuario tenga iniciada sesion
const { isAuthenticated } = require("../helpers/auth");

router.get("/ventas/sinInicio", sinInicio)

router.get("/ventas/ckeckout", isAuthenticated, abreCheckout)

router.get("/ventas/confirmacion", isAuthenticated, confirmacion)

router.get("/ventas/respuesta", isAuthenticated, respuesta)

router.post("/ventas/pagoContraentrega", isAuthenticated, pagoContraentrega)

module.exports = router;