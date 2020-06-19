import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';   // on importe deux éléments de react-router-dom qui sont en fait des composants React !!! : on renomme "BrowserRouter" en "Router" pour + de facilité d'utilisation !!!

import Header from './shared/Header'; // on importe le composant "Header" depuis ./shared/Header.jsx
import HomePage from './home/HomePage';
import ProfilePage from './account/ProfilePage';

// on met "props" en paramètres car on va utiliser les "props" passés lors de l'appel du composant "enfant" dans le composant "parent"									
export default function Template(props) {  // on utilise "className" car "class" tout court est réservé en JS, donc on peut pas utiliser le "class" habituel pour du HTML5 !!!!! 
 	return(                                // d'où className (class sera bien mis une fois le rendu React fait !!)
 		<Router>
 			<div className="wrapper">       
 				<Header username='Invité'/>  
 				{/*<h3>{props.titre}</h3>
 				{props.showCount ? <h3>Compteur : {props.count}</h3> : null} */}
 				
 				<Route exact path="/" component={HomePage} />
 				<Route path="/account/profile/:id" component={ProfilePage} />

 				{props.showCount ? <h4>Compteur : {props.count}</h4> : null}
 			</div>
 		</Router>
 	);
 }
//On utilise le composant Header et on passe un props username à invité par défaut !!! => il sera utilise dans le composant enfant "Header"!