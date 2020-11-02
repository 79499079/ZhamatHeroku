const helpers = {};

//hasta no inicar sesion no permite entrar las paginas

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) 
  {
    return next();
  }
  req.flash('error_msg', 'No esta autorizado hasta Iniciar Sesión');
  res.redirect('/users/signin');
};

module.exports = helpers;
