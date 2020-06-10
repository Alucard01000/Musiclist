// modèle utilisé pour créer le modèle "Mongoose" de nos utilisateurs (users) pour notre API !!! ***
const mongoose = require('mongoose'); // on appelle le module mongoose.

const { Schema } = mongoose; // on appelle la methode "Schema" de mongoose et on la met dans la variable Schema
const passportLocalMongoose = require('passport-local-mongoose');


const User = new Schema({ // on crée alors un nouveau Schema "User"
  username: String, // on indique alors chaque champ souhaité avec son type de données : String ici !
  // password : String,  // plus besoin car on utilise passport local mongoose pour cela
  firtName: String,
  lastName: String,
});
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User); // on exporte le modèle "User" créé à partir du schema "User"
