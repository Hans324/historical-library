import React from "react";
import './Liste.css'
import LivreRomain from  "../Images-Livres/Livre-romain.png";
import LivrePerse from   "../Images-Livres/Livre-perse.png";
function  Liste () {



    return(

<section className="Liste">
<h1 className="Titre1">Liste des Livres</h1>
<section className="Livre1">
<h2 className="TitreRomain">TITRE : L'ANTIQUITÉ SUR L'HISTOIRE ROMAINE</h2>
<h4 className="auteurRomain">auteur: Pierre Grimal</h4>
<img className="ImageRomaine" src={LivreRomain}></img>
<section className="position">
<p className="Texte1">  Ce livre retrace l'histoire de l'Antiquité romaine, depuis les origines de Rome jusqu'à la chute de l'Empire romain d'Occident. 
Il présente les grandes étapes de son développement, les conquêtes qui ont fait de Rome une puissance majeure, ainsi que l'organisation politique, militaire et sociale de l'Empire. 
L'ouvrage met également en lumière la vie quotidienne des Romains, leur culture, leurs croyances et l'héritage qu'ils ont transmis aux civilisations occidentales. 
Accessible et documenté, il permet de mieux comprendre l'évolution de l'une des plus grandes civilisations de l'Histoire.</p>
<section className="Bouton1-position">
 <button className="Boutoninfos1" type="button">Informations</button>
 </section>
 </section>
</section>

<section className="Livre2">

<h2 className="TitrePerse">Titre : L'ANTIQUITÉ DE LA PERSE ANTIQUE</h2>
<h4 className="auteurPerse">auteur: Leïla  Karimi</h4>
<img className="ImagePerse" src={LivrePerse}></img>
<p className="Texte2"> Cet ouvrage retrace l'histoire de l'Antiquité perse, depuis la naissance de l'Empire achéménide jusqu'à son déclin. 
Il présente les grands souverains qui ont marqué cette civilisation, les conquêtes qui ont étendu son territoire ainsi que son organisation politique, administrative et militaire. 
Le livre explore également la richesse de la culture perse, ses croyances, son art, son architecture et son influence sur les peuples voisins. 
Grâce à une approche claire et documentée, il permet de mieux comprendre le rôle majeur de la Perse dans l'histoire du monde antique et l'héritage qu'elle a laissé aux civilisations suivantes.
                 </p>
 <section className="Bouton2-position">              
<button className="Boutoninfos2" type="button">Informations</button>
</section>  
</section>


</section>




    )
    



}

export default Liste;