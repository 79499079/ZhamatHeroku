adminCtrl = {};

const User = require('../models/User.model')

adminCtrl.abreFactura = function (req, res) {
    res.render("admin/factura")
}

module.exports = adminCtrl;