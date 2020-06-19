const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const passport = require('passport'); // appel du mode passport
const LocalStrategy = require('passport-local').Strategy; // on ajoute un constructeur de Strategy de passport-local

const expressSession = require('express-session')({ // on utilise la session express
  secret: 'any random string can go here', // on indique un secret, utilisé pour un hash pour les requêtes de session, afin que le serveur sache qu'elles proviennent du bon endroit
  resave: false,
  saveUninitialized: false,
});

const webpack = require('webpack');                   // paramétrage des package "Webpack" pour le "serveur" Webpack
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');



const User = require('./models/user'); // on utilise notre modèle User (contenu dans models\User)

const index = require('./routes/index'); // déf. des routes
// const users = require('./routes/users');
const api = require('./routes/api/index');
const users = require('./routes/api/users');

const app = express(); // on crée notre application "app" en utilisant l'objet express !
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://Den:Den@localhost:27017/musiclist', { useNewUrlParser: true, authSource: 'admin' }); // connection BDD MongoDB -- on spécifie la base d'authentification "admin" sinon l'authentification ne fonctionnerait pas car on utilise une base musiclist différente !

// view engine setup
app.set('views', path.join(__dirname, 'views')); // definition du répertoire contenant les "vues"
app.set('view engine', 'ejs'); // configuration du moteur de "vues" : ici, EJS !


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(expressSession);
app.use(passport.initialize()); // on lance ensuite passport initialize
app.use(passport.session()); // puis on lance la session, qui fonctionnera avec la session express !


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); // paramétrage du chemin pour le favicon via le module serve-favicon !!
app.use(express.static(path.join(__dirname, 'public'))); // on spécifie un lien public pour les actifs statiques du site


// Webpack Server
const webpackCompiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(webpackCompiler, {
  publicPath: webpackConfig.output.publicPath,       // le serveur JS est créé virtuellement, ainsi que les fichiers gérés nécessaires pour cela.
  stats: {
    colors: true,
    chunks: true,
    'errors-only': true,
  },
}));
app.use(webpackHotMiddleware(webpackCompiler, {
  log: console.log,
}));


//app.use('/', index);  on dit la route à utiliser pour chaque url path défini : / avec le routeur "index" (contenu dans ./routes/index) et /users avec le routeur "users" (contenue dans ./routes/users)
// app.use('/users', users); // chacun de ces routeurs est défini dans les répertoire "routes"(JS)
app.use('/api', api); // route pour notre index dans rép API !
app.use('/api/users', users);
app.use('/*', index); // on bouge la page de façon à ce que les url api soient servis hors "react" / pour les autres routes, on va tout rediriger vers index et donc vers notre appli React !!!


passport.use(new LocalStrategy(User.authenticate())); // configuration de Passport
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// capture des erreurs et gestion de celles-ci
app.use((req, res, next) => { // fonction utilisée si aucune route valide n'est utilisée
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => { // fn de gestion des err->suite de la précédente,via le passage de next(err) dans le bloc précédent !
  // set locals, only providing error in development, sinon rien !
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app; // export de notre variable app
