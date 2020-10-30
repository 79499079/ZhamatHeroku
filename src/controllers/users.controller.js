const usersCtrl = {};

//Models
const User = require('../models/User.model');

usersCtrl.entraUsuario = (req, res) => {
  res.render('users/signin');  
};

module.exports = usersCtrl;
