import React from 'react'

/*   C’est le point de départ de ton application React. Il dit à ton navigateur :
"Prépare-toi à afficher mon application React, et commence par charger le composant App."
         */

import { StrictMode } from 'react' /*  j'importe Strictmode afin de l'utiliser dans ce fichier.   
 StrictMode : Un outil de React qui t’aide à repérer des erreurs ou des mauvaises pratiques dans ton code pendant le développement. 
C’est comme un "mode strict" qui te donne des avertissements utiles.*/
import { createRoot } from 'react-dom/client' /* j'importe createRoot  afin de l'utiliser dans ce fichier.

createRoot : Une fonction qui permet de dire à React : 
"Prends ce conteneur HTML (ici, un élément avec l’ID root) et affiche-y mon application."
*/
import './index.css' /* 
Charge (j'importe) le fichier index.css pour appliquer des styles (couleurs, polices, etc.) à ton application.  */
import App from './App.js'
/*  Charge le composant App depuis le fichier App.jsx. 
C’est le composant principal de ton application (celui qui contient toute ta logique et ton interface).   */ 

import { RouterProvider, createBrowserRouter } from "react-router";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/*   createRoot(document.getElementById('root')).render(...)

document.getElementById('root') : Trouve dans ton fichier HTML un élément avec l’ID root (généralement un <div id="root"></div>).
.render(...) : Affiche le contenu React à l’intérieur de cet élément.
   */

/*   <StrictMode><App /></StrictMode>

Enveloppe ton application (<App />) dans StrictMode pour activer les vérifications utiles pendant le développement.
          */