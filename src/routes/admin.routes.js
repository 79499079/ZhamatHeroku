const router = require("express").Router();

const {
    abreFactura
} = require("../controllers/admin.controller");

// autentica que el usuario tenga iniciada sesion
const { isAuthenticated } = require("../helpers/auth");

router.get("/admin/abreFactura", abreFactura)


module.exports = router;