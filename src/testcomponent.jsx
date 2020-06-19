import React from 'react';
// on tape ici notre code JSX : HTML + JS
export default function Testcomponent(props) {   // on met le props en paramètres car on va utiliser les props passés lors de l'appel du composant "enfant" dans le composant "parent"
	return (  
		<div>			
			<h1>React : {props.titre} !</h1>     {/* on utilise le props passé en indiquant celui qu'on veut : "titre", donc "props.titre" : on le met en accolades car c'est du JSX !!! */ } 
			{props.showCount ? <h2>Compteur : {props.count}</h2> : null}   {/* on va utiliser le props booléen "showCount pour afficher ou non un élément : si showCount vaut "true", alors on affiche le H2 sinon rien !  */}
		</div>
		);
}

