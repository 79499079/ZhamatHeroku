ventasCtrl = {};

ventasCtrl.abreCheckout = function (req, res) {
    res.render("ventas/checkout")
}

ventasCtrl.sinInicio = function (req, res) {
    res.render("ventas/sinInicio")
}

ventasCtrl.confirmacion = (req, res) =>{
    res.render("ventas/confirmacion")
}
module.exports = ventasCtrl;