//const path = require('path'); //module path pour rendre statique un chemin, afin d'éviter d'appeler ce chemin à chaque fois dans l'adresse !
const { resolve } = require('path');   // on extrait que la méthode "resolve" du module path donc on va faire comme ça et plus le require total !!!
const webpack = require('webpack');   



module.exports = {
  context: resolve(__dirname, 'src'),      // on spécifie le répertoire de base pour les point d'entrés, ici donc le répertoire "src" à partir du répertoire de base du projet (là ou se trouve l'executable du projet)
	entry: [
    	//'javascripts/build.js': './src/index.jsx',
      'react-hot-loader/patch',
      //'webpack-dev-server/client?http://localhost:8080',       // on neleve des 2 lignes car on ne va plus gérer un serveur dev webpack à part !!!!
      //'webpack/hot/only-dev-server',
      'react-hot-loader/babel',            // on ajoute ces 2 la pour gérer le serveur webpack automatiquement depuis express !!!!
      'webpack-hot-middleware/client',
      './index.jsx',
  	],
  output: {
    filename: 'build.js',              
    //path: resolve(__dirname, 'public', 'javascripts'),  // on indique le chemin d'accès est répertoire de base + public + javascripts !
    path : '/',       // avec la nouvelle gestion webpack, on a pas besoin de mettre de lien vers le disque donc on et / (serveur virtuel)
    publicPath : '/javascripts',
  },

  // plus besoin de ça !!!
  //devServer: {                             // on crée le devServer utilisé par webpack afin de mettre à jour les composants React à chaud (HOT !!!) : serveur sur localhost:8080 !!!!!!
  //  hot: true,
  //  contentBase: resolve(__dirname, ''),   // on met où se trouve le répertoire de base du serveur
  //  publicPath: '/javascripts',            // on indique ou se trouve le répertoire javascripts pour qu'il mette à jour les bons fichiers JS
  // },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [            // règles pour webpack !
      {
    	test: /\.jsx?$/,
    	exclude: /(node_modules|bower_components|public\/)/,
    	loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),          // Cela appelle simplement quelques plugins dont Webpack a besoin pour effectuer un remplacement de module à "chaud", 
    new webpack.NamedModulesPlugin(),                  // qui est un terme technique pour «mettre à jour votre bundle React, sans avoir à reconstruire le tout à chaque fois».
    new webpack.NoEmitOnErrorsPlugin(),  // gestion des erreurs plus facilement et plus esthetique dans webpack !!!
  ],

};