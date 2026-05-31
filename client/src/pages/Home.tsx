// 1) Les imports. Ces lignes disent que j'ai besoin de ces éléments pour créer ma page.
import React from "react"; /* J'ai besoin de React pour créer des composants et mes pages.
React est une bibliothèque qui permet de construire des interfaces utilisateurs 
Rappel c'est tout ce que l'utilisateur voit et utilise  sur un site ou une application.  */
import imageAccueil from "../Images-Livres/Image-accueil-Desktop.png"
import imageLogo  from "../Images-Logos-Menus/Logo-site-version2.png"
/* J'importe deux images..afin de les utiliser..Bref, j'utilise deux images: une pour l'accueil et une pour le logo.
  Ces images sont stockées  dans des dossiers  spécifiques et seront affichées plus tard */
import "./Home.css";/* j'importe le fichier Home.css..afin de l'utiliser..pour que je puisse styliser la page Home.
 Ce fichier  contient  les styles comme les couleurs,tailles, etc */
import {Link}  from "react-router-dom" /*j'importe Link qui vient de la bilibiothèque React..
Plus spécifiquement Link vient du React-router-dom.
Link permet de naviguer  entre les pages..... sans recharger la page d'un site, comme un menu interactif.. */

/* Rappel : react-router-dom : C'est une biliothèque de react.. c'est un outil supplémentaire . 
Il s'occupe de la navigation entre les pages dans une application web.*/


function Home () {
/* Rappel : Une fonction est un morceau de code..qui fais une action..en bref..c'est un morceau de code qui va executer une action.

Dans React,une fonction comme Home est un composant: 
C'est un bloc de code qui décrit ce qui doit être affiché à l'écran( du texte, des images, des boutons,etc).
*/
return (
/* Tout ce qui est entre les parenthèses () après return est ce qui sera affiché à l'écran. 
En gros :"voici ce que je veux afficher dans le site.*/

/* Rappel: Chaque balise est un élément de la page 
( comme un titre, une image, une section, etc)  */

 /*Je crée une grande section principale avec le style accueil (défini dans Home.css)     */
<section className="accueil"> 
<section className= "Section1">
<section className= "Section-titre-library">
<h1 className="Titre">Historical-library</h1>
<section className="Section-sous-titres">

<Link to="/liste-livres" className="lien-menu-1">
<h2 className="sous-titre-un" >Liste des Livres</h2>
</Link>
<Link to="/mes-livres" className="lien-menu-2">
<h2 className="sous-titre-deux">Mes livres</h2>
</Link>


</section>
</section>
<img src={imageLogo}  alt="Logo Historical" className ="Image-logo-menu"/>
</section>
<section className="Section-2">
<img src={imageAccueil} alt="Image d'accueil" className="Image-accueil"/>
</section>
</section>
/* Je crée une sous-section appelée Section1 (pour organiser le contenu) */
/* Je crée une section appelée Section-titre-library pour le titre et les sous-titres.*/
/* J'affiche un titre principal Historical-library avec le style Titre.*/
/* Je crée une section appelée sous-titres (les liens du menu)*/
/* Je crée un lien vers la page /liste-livres. 
Quand on clique sur le texte Liste des Livres, on va sur cette page.
Le style est lien-menu-1 et sous-titre-un */

/* Même chose, mais pour la page /mes-livres avec le texte Mes livres et les styles lien-menu-2 et sous-titres-deux
 */

/* Je créer une section Section-2 qui contient l'image imageAccueil (importée plus haut)
 avec le texte alternatif Image d'accueil et le style Image-accueil"   */
/* </section> : fermeture des balises. Je ferme toutes les sections ouvertes pour dire que la recette est terminée. */
);










}
export default Home;