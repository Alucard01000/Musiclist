const express = require('express');    // donne accès aux fonctionnalités d'Express
const router = express.Router();   // on crée une instance d'express Router, pour gérer le traffic HTTP

/* GET home page. */
router.get('/', (req, res, next) => {              // le routeur va gérer l'URL "/", qui est la racine du site !!!
  res.render('index', { title: 'Ma Music-List' });      // appelle la vue "index" (contenu dans répertoire "views") avec la variable title utilisable dans cette vue !
});														// pas besoin de mettre l'extension ".ejs" à "index" vu qu'on a défini le moteur de vues au début dans la config de notre serveur

const testJSON = [              // test de données : array d'objets utilisateurs
	{
		name : "Den PAT",
		username : "Void"
	},
	{
	name : "Dine CHA",
	username : "Chacha"
	}
];
router.get("/sendjson", (req,res,next) => {   // on crée une route /sendjson pour laquelle on va mettre dans notre reponse
	res.json(testJSON);                       // les données de "testJSON", renvoyées en JSON via res.json()
});


module.exports = router;  // export de l'objet routeur 
