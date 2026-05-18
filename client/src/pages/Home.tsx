import React from "react";
import imageAccueil from "../Images-Livres/Image-accueil-Desktop.png"
import imageLogo  from "../Images-Logos-Menus/Logo-site-version2.png"
import "./Home.css";
import {Link}  from "react-router-dom"

function Home () {

return (
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
);










}
export default Home;