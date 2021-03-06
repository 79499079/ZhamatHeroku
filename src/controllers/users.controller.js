const usersCtrl = {};

//Models
const User = require('../models/User.model');

// Modules
const passport = require("passport");

usersCtrl.iniciarSesion = (req, res) => {
  res.render('users/signin');  
};

usersCtrl.registrarse = (req, res) => {
  res.render('users/signup');  
};

usersCtrl.signup = async (req, res) => {
  let errors = [];
  const { name, usuario, email, direccion, celular, whatsapp, password, confirm_password } = req.body;
  if (name.length < 7 ) {
    errors.push({ text: "Por favor ingrese nombres validos." });
  }  
  if (usuario.length < 3 ) {
    errors.push({ text: "Por favor ingrese un Usuario de más de 3 Caracteres" });
  }
  if (email.length < 4 ) {
    errors.push({ text: "Por favor ingrese un Email valido" });
  }
  if (password != confirm_password) {
    errors.push({ text: "Passwords no coincide." });
  }
  if (password.length < 4) {
    errors.push({ text: "Por favor ingrese una Clave." });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      usuario,      
      email      
    });
  } else {
    // Mirar si el Email concide
    const emailUser = await User.findOne({ email: email });    
    if (emailUser) {
      req.flash("error_msg", "El E-mail ya está en uso");
      res.redirect("/users/signup");
    } 
    else {
      // Guardar Nuevo Usuario
      const newUser = new User({ name, usuario, email, direccion, celular, whatsapp, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("success_msg", "Ha sido registrado satisfactoriamente.");
      res.redirect("/users/signin");
    }
  }
};

usersCtrl.signin = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/users/signin",
  failureFlash: true
});

usersCtrl.logout = (req, res) => {
req.logout();
req.flash("success_msg", "Ha cerrado sesión.");
res.redirect("/");
};

module.exports = usersCtrl;
