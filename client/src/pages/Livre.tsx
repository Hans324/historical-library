import React from "react";
import LivreRomain from  "../Images-Livres/Livre-romain.png";
import LivrePerse from   "../Images-Livres/Livre-perse.png";
import LivreCharles from "../Images-Livres/Image Charles.png";
import LivreReligion from "../Images-Livres/Image Chretien.png";
import "./Livre.css"

function Livre () {



return(
<section className="section-Livre">
<section className="Sous-section-1">
<section className="Romain">

<img className="Livre-Romaine" src={LivreRomain}/>
 <p className="auteur-1">Auteur: Pierre Grimal</p>
</section>

<section className="Perse">
<img className="Livre-Perse" src={LivrePerse}/>
<p className="auteur-2">Auteur: Leïla Karimi</p>
</section>

</section>

<section className="Sous-section-2">
<section className="Charles">
<img className="Livre-Charlemagne" src={LivreCharles}/>
<p className="auteur-3"> Auteur: Clive Staples Lewis   </p>
</section>

<section className="Religion">
<img className="Livre-christianisme" src={LivreReligion}  />
<p className="auteur-4">Auteur: Jaroslav Pelikan </p>
</section>

</section>
</section>



);

}


export default Livre;