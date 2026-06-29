import React from 'react'// Importe la bibliothèque React, nécessaire pour créer des composants.


// Importe les images pour les icônes du menu burger et desktop.
// Ces chemins pointent vers les fichiers images dans le dossier "Images-Logos-Menus".
import Menuburger from "../Images-Logos-Menus/Menu-burger.png" 
import MenuDesktop from "../Images-Logos-Menus/Menu-Desktop.png"

// Importe les hooks `useState` et `useEffect` depuis React.
// - `useState` : Permet de créer des états (variables réactives).
// - `useEffect` : Permet d'exécuter des effets de bord (ex: écouter des événements).
import { useState } from 'react'
import { useEffect } from 'react'
import "./Header.css" //Importe le fichier CSS pour ce composant

import Connexion from '../pages/Connexion'
import {Link}  from "react-router-dom"
function Header() {

// --- ÉTATS (useState) ---
  // Ces variables permettent de stocker des informations(des données) qui peuvent changer. Bref tu peux modifier une information
  // `isMobile` : Indique si l'écran est en mode mobile (true) ou desktop (false).

const [isMobile, setIsMobile]= useState(false);

// `menuOpen` : Indique si le menu déroulant est ouvert (true) ou fermé (false).
const[menuOpen, setMenuOpen] = useState(false);

// --- EFFET DE BORD (useEffect) ---
  // Cette fonction s'exécute une seule fois au chargement du composant (à cause du `[]` à la fin).

useEffect (() => {

 // `handleResize` : Fonction qui vérifie la taille de l'écran et met à jour `isMobile`.

const handleResize= () => {

// `window.innerWidth` : Largeur actuelle de la fenêtre du navigateur.

if (window.innerWidth< 768) {

    // Si la fenêtre fait moins de 768 pixels de large, on est en mode mobile.
setIsMobile (true)
} else {

    // Sinon, on est en mode desktop
setIsMobile(false)

}
};

// On appelle `handleResize` une fois au chargement pour vérifier la taille initiale de l'écran.

handleResize();

 // `window.addEventListener("resize", handleResize)` :
    // On écoute l'événement "resize" (redimensionnement de la fenêtre) et on appelle `handleResize` à chaque fois.

 window.addEventListener("resize", handleResize);

 // Cette fonction est appelée quand le composant est supprimé (ex: on quitte la page).
    // On enlève l'écouteur pour éviter les fuites de mémoire.

return () => {
window.removeEventListener("resize",handleResize);
};
},[]); // Le tableau vide `[]` signifie que ce `useEffect` ne s'exécute qu'une fois, au montage du composant.


// --- RENDU (ce qui est affiché à l'écran) ---
return (

// Conteneur principal pour le menu et le bouton de connexion.

<section className="Menu-bouton-position">

 {/* Section qui contient le menu (burger ou desktop) */}

    <section className="Menu">
 {/* Condition ternaire :
          - Si `isMobile` est true, on affiche l'icône du menu burger.
          - Sinon, on affiche l'icône du menu desktop.
        */}


{  isMobile ? <img src={Menuburger} alt= "Menu mobile" className= "Menumobile" onClick={() => setMenuOpen(!menuOpen)} // Inverse la valeur de `menuOpen` (true → false ou false → true) quand on clique.
/> 
: <img src={MenuDesktop} alt="Menu Desktop" className="Menu-version-desktop" />}  {/* Condition pour afficher le menu déroulant :
          - Si `menuOpen` est true, on affiche le menu déroulant.
          - Sinon, on n'affiche rien.
        */}
{menuOpen && (
    
    <div className='menu-déroulant'>
                    {/* Liste des liens du menu */}

<ul>
{/* Chaque `<li>` a une clé unique (`key`) pour aider React à identifier les éléments. */}

<li key="accueil">
    <a href="/accueil">Accueil</a> {/* Lien vers la page d'accueil */}
    </li>
<li key="à propos"> 
   <a href="/à propos"> à propos </a> {/* Lien vers la page "à propos" */}
    </li>
</ul>
</div>
)}
</section>

{/* Section pour le bouton de connexion 

 - `className="Blue button"` : Applique les styles CSS pour un bouton bleu.
        - `type="button"` : Indique que ce bouton ne soumet pas de formulaire.

*/}
<section className="bouton-connexion">
<Link to ="../pages/Connexion">
<button className="button" type="button">Connexion</button>
</Link>
</section>

</section>

)};


// Exporte le composant `Header` pour qu'il puisse être utilisé dans d'autres fichiers.
export default Header;