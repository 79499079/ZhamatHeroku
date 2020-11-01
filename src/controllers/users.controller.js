const usersCtrl = {};

//Models
const User = require('../models/User.model');

usersCtrl.iniciarSesion = (req, res) => {
  res.render('users/signin');  
};

usersCtrl.registrarse = (req, res) => {
  res.render('users/signup');  
};

module.exports = usersCtrl;
