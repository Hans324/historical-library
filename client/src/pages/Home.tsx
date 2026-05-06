import React from "React";
import imageAccueil from "../Images-Livres/Image-accueil-Desktop.png"
import imageLogo  from "../Images-Logos-Menus/Logo-site-version2.png"


function Home () {

return (
<section>
<section>
<h1>Historical-library</h1>
<h2>Liste des Livres</h2>
<h2>Mes livres</h2>
<img src={imageLogo}  alt="Logo Historical" />
</section>
<section>
<img src={imageAccueil} alt="Image d'accueil"/>
</section>
</section>
);










}
export default Home;