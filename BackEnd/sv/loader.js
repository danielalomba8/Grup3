//Módulos necessários ao servidor
const app = require ('./server.js');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require ('express-session');
const expressSanitizer = require ('express-sanitizer');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const models = require ('../models');



//Criação de sessão
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(cookieParser());
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'PSPg3',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: true,
    maxAge: 60000,
    httpOnly: true,
  }
}))
app.use(expressValidator());

//Verificar  se existe sessão associada a uma variável, se não cria uma sessão na variável global
app.use(function(req, res, next) {
    if (global.sessData === undefined) {
        global.sessData = req.session;
        global.sessData.ID = req.sessionID;
    }
    else {
        console.log('session exists', global.sessData.ID);
    }
    next();
});


//Sincronização dos models com a BD
app.use(passport.initialize());
app.use(passport.session()); // sessões de login persistentes

/*
models.sequelize.sync().then(function() {
  console.log('Database looks fine')}) 
  
  .catch (function(err) {
  console.log(err, 'Something went wrong with the Database Update')
});  */


//Forçar a utilização do router e a exportação da app



//const auth = require('../routes/auth.route.js') (app, passport);
//require('../config/passport/passport.js') (passport, models.user);


const suspectRouter = require("../routes/suspects.route");
app.use("/suspects", suspectRouter);

//app.use('/users', auth);

module.exports = app;
