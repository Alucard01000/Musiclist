import React from 'react';
import { Link } from 'react-router-dom'; // on importe "Link" du module React-router-dom

export default function Header(props) {  // on utilise les props pour extraire le nom de l'utilisateur s'il y en a un
	const { username } = props;
	return(
		<header>
			<h1>Music list</h1>
			<div className="user-menu">
				<h2>Bienvenue, { username } !!!</h2>
				<nav>
          			<ul>
            			<li><Link to="/">Home</Link></li>
            			<li><Link to="/account/profile/Den">Profile</Link></li>
          			</ul>
        		</nav> 	
			</div>
		</header>
		);
}