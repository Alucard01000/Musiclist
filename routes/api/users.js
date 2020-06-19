const express = require('express');

const router = express.Router();

const User = require('../../models/user'); // appelle le modèle "User" - besoin pour récupérer les données des utilisateurs
										   // besoin de cela non pas seulement pour enregistrer les données
										   // , mais aussi pour les récupérer !                       ============> cela va permettre de se connecter à la collection "users" de la base mongo "musiclist"
router.get('/list', (req, res, next) => { // on veut la liste de tous les utilisateurs
  User.find((err, users) => {
    if (err) { // s'il y a une erreur lors du traitement, on envoit l'erreur en réponse
      return res.send(err); // on met un return car c'est plus clair, et recommandé par ESLint !
    }
    return res.json(users); // sinon on renvoit un tableau de données (JSON) qui reprendra tous les "users", idem que précédement pour le return
  });
});

module.exports = router;
