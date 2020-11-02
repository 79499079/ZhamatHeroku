const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User.model'); 

passport.use(new LocalStrategy({
  usernameField: 'email',  
}, async (email, password, done) => {
  // Comprobar si existe el Email
  const user = await User.findOne({email: email});  
  if (!user) {
    return done(null, false, { message: 'No se ha encontrado Usuario' });
  } else {
    // Match Password's User    
    const match = await user.matchPassword(password);
    //const menus = comprobarMenus(user); 
    if(match) {       
      return done(null, user);
    } else {
      return done(null, false, { message: 'Clave Incorrecta.' });
    }
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});