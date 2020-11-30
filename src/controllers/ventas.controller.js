ventasCtrl = {};

const User = require('../models/User.model')

ventasCtrl.abreCheckout = async (req, res) => {    
    var user = req.user    
    res.render("ventas/checkout", {user})  
    console.log(user)
}

ventasCtrl.sinInicio = function (req, res) {
    res.render("ventas/sinInicio")
}

ventasCtrl.confirmacion = (req, res) =>{
    res.render("ventas/confirmacion")
}

ventasCtrl.respuesta = (req, res) =>{
    res.render("ventas/respuesta/")
}

ventasCtrl.pagoContraentrega = async (req,res) =>{
    const{email, name, direccion, celular, whatsaap} = req.body
    const newUser = new User({email, name, direccion, celular, whatsaap})
    await newUser.save();
}
module.exports = ventasCtrl;