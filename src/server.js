const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session);

// Initializations
const app = express();
require('./config/passport');


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');


//middlewares
app.use(express.urlencoded({extended: false}));//permite entender datos recibidos
app.use(express.json());//recibe datos json 
app.use(methodOverride('_method'));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { maxAge: 180 * 60 * 1000 }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Variables Globales
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
 /*  res.locals.msg_carrito = req.flash('msg_carrito'); */
  res.locals.user = req.user || null;
  //permite que sesion este en todo el proyecto
  res.locals.session = req.session; 
  next();
});

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.msg_carrito = req.flash('msg_carrito');
  res.locals.user = req.user || null;
  //permite que sesion este en todo el proyecto
  res.locals.session = req.session; 
  next();
});

// routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/users.routes'));
app.use(require('./routes/venta.routes'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;