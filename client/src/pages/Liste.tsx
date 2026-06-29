import React from "react";



function  Liste () {



    return(

<section className="Liste">
<h1 className="Titre1">Liste des Livres</h1>
<section className="Livre1">
<h2 className="TitreRomain">TITRE : L'ANTIQUITÉ SUR L'HISTOIRE ROMAINE</h2>
<h4 className="auteurRomain">auteur: Pierre Grimal</h4>
<img className="ImageRomaine"></img>
<p className="Texte1">Ce livre raconte....</p>
 <button className="Boutoninfos1" type="button">Informations</button>
</section>

<section className="Livre2">

<h2 className="TitrePerse">Titre : L'ANTIQUIT2 DE LA PERSE ANTIQUE</h2>
<h4 className="auteurPerse">Leïla  Karimi</h4>
<img className="ImagePerse"></img>
<p className="Texte2"> Ce livre raconte...</p>
<button className="Boutoninfos2" type="button">Informations</button>
</section>


</section>




    )
    



}

export default Liste;