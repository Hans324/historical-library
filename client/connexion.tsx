
import React from "react" // “J’importe l’objet/module React (dans ce fichier) depuis la bibliothèque react pour pouvoir utiliser les outils que React fournit.”

function Connexion() { // "une fonction : C'est un bloc de code qui execute une tâche "


    return(   // “voici ce que React doit afficher à l’écran.”
    // Ou pour être plus précis “return indique à React quoi afficher à l’écran.”

    // Comment ca se passe ? Comme ceci :  La petite nuance importante, c’est que :

//return ne parle pas directement à l’écran.

//Il :

//renvoie du JSX
//React récupère ce JSX
//puis React l’affiche dans la page


/* section  regroupe un morceau de contenu lié

tout ce qui est dedans appartient à la même partie. Elle sert à :

regrouper du contenu lié
structurer la page
rendre le HTML plus clair et plus logique.

 en bref : “Je crée une section organisée de la page.”
*/


// <h2> est une balise HTML de titre.
/* Que signifient les numéros ?

Ils indiquent l’importance du titre.

<h1> = titre principal
<h2> = sous-titre
<h3> = sous-sous-titre   */
<section> 
<section>
<h2>Se connectez</h2> 
<section>
    <input type="text" size={5} />
    <input type="text"size={5} />
    <button type="button">Conexion</button>
</section>
</section>

<section>
<section>
<h2>Création d'un compte</h2>
</section>
<section>
<input type="text" size={5}/>
<input type="text" size={5}/>
<input type="text" size={5}/>
<input type="password"  size= {5} maxLength={10}/>
<button type="button">Créer compte </button>
</section>
</section>

</section>

    )
    
}
export default Connexion; // J'exporte le fichier Connexion afin qu'il soit disponible dans d'autres fichiers.
