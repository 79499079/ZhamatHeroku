ventasCtrl = {};

ventasCtrl.abreCheckout = function (req, res) {
    res.render("ventas/checkout")
}

ventasCtrl.sinInicio = function (req, res) {
    res.render("ventas/sinInicio")
}

module.exports = ventasCtrl;