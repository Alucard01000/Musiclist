import React from 'react';        // import du module react en notation ES6 => en ES5 c'est : var React = require('react');
import { render } from 'react-dom';  // import de la méthode "render" du module react-dom - on utilise la "destructuration" (ES6) pour ainsi importer qu'une méthode du module react-dom !
import { AppContainer } from 'react-hot-loader';    // import du composant AppContainer depuis react-hot-loader !
//import Testcomponent from './testcomponent'; // import du composant "Testcomponent" depuis testcomponent.jsx !
import Template from './components/Template';
/*
render(
	<Testcomponent titre="C'est mon titre" count={123} showCount />, document.querySelector('#react-app'),   // on utilise le render de react-dom pour faire le rendu de notre composant "testcomponent"
);															// et on le place dans la balise div d'id "react-app"
															// on ajoute des props "count" (nombre : on met entre {} car sinon ca serait un String entre ") et "showCount" qui est un booléen alors si aucune valeur
*/
// on fait appel désormais à une fonction car on en a besoin pour le fonctionnel du "hot-loader" qui fait un "DIFF" sur cette fonction entre deux instants différents pour le changement à chaud du composant !!!
const renderApp = (Component) => {   // la fonction prend un composant en paramètre et il est mis dans le "conteneur-composant" "AppContainer", branché au niveau de l'élément d'ID "react-app"
  render(
    <AppContainer>
      <Component titre="Ceci est un super Titre" count={123} showCount />
    </AppContainer>,
    document.querySelector('#react-app'),
  );
};


//renderApp(Testcomponent); // on lance la fonction avec notre composant "Testcomponent"
renderApp(Template);

/*if (module && module.hot) {       // on test si notre build "Webpack" a bien le module hot reloading est bien disponible => "module" est founri par Webpack
  module.hot.accept('./components/Template', () => {    // on a changé note Test component par le composant "Template" donc on change aussi ici ces données
    renderApp(Template);     
  });
} */

if (module && module.hot) {
  module.hot.accept();
}  


