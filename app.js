const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');        //déf. des routes
const users = require('./routes/users');
const api = require('./routes/api/index');

const app = express();   // on crée notre application "app" en utilisant l'objet express !

// view engine setup
app.set('views', path.join(__dirname, 'views'));        // definition du répertoire contenant les "vues"
app.set('view engine', 'ejs');                          // configuration du moteur de "vues" : ici, EJS !



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));  // paramétrage du chemin pour le favicon via le module serve-favicon !!

app.use(express.static(path.join(__dirname, 'public')));   // on sépcifie un lien public pour les actifs statiques du site


app.use('/', index);           // on dit la route à utiliser pour chaque url path défini : / avec le routeur "index" (contenu dans ./routes/index) et /users avec le routeur "users" (contenue dans ./routes/users)
app.use('/users', users);      // chacun de ces routeurs est défini dans les répertoire "routes" (fichiers JS)
app.use('/api', api);       // route pour notre index dans rép API !



// catch 404 and forward to error handler
app.use((req, res, next) => {        // fonction utilisée si aucune route valide n'est utilisée (/ ou /users)
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {          // fonction de gestion des erreurs qui prend la suite de la précédente, via le next(err) !!!!
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;     //export de notre variable app
