import React, { useState } from 'react'
import "./Connexion.css"


export default function Connexion() {


const  [message,setMessage]= useState("");
const[messageType,setMessageType]=useState("");
const [strengthColor, setStrengthColor] = useState("black");




function strength() {

    let score=0
switch (score) {

case 0:
case 1:
case 2:
    setStrengthColor("red")
    return "faible"

case 3:
case 4:
case 5:
    setStrengthColor("yellow")
    return "moyen"
case 5:
case 6:
    setStrengthColor("green")
    return "fort"
}
}

return(
<section className="connexion">
<section className="Se-Connectez">
<h2 className="Title-1">Se Connectez</h2>
<label className="Email-1">Email</label>
<input type="email" className="type-email-1" placeholder="Email"/>
<label className="Mot-de-Passe-1">Mot de Passe </label>
<input type="password" className="type-password-1" placeholder="Password" required minLength={8}/>
<input className="button-1"type="button" value="Connexion"/>
</section>


<section className="Creation-de-Compte">
<h2 className="Title-2">Création d'un compte</h2>
<label className="Email-2">Email</label>
<input type="email" className="type-email-2" placeholder="Email"/>
<label className="Mot-de-Passe-2">Mot de passe</label>
<input type="password" className="type-password-2" placeholder="Password" required minLength={8}/>
<label className="Prenom-2">Prénom</label>
<input type="firstname" className="type-firstname" placeholder="Firstname" required minLength={50}/>
<label className="Nom-de-Famille-2">Nom de Famille</label>
<input type="lastname" className="type-lastname" placeholder="Lastname" required minLength={50}/>
<input className="button-2"type="button" value="Connexion"/>
</section>
</section>

)



}



// “J’importe l’objet/module React (dans ce fichier) depuis la bibliothèque react pour pouvoir utiliser les outils que React fournit.”

// "une fonction : C'est un bloc de code qui execute une tâche "



// “voici ce que React doit afficher à l’écran.”
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