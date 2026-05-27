import React from "react"; // 1) Importe la bibliothèque React (obligatoire pour créer des composants)
import Footer from "./Footer";  // 2️) Importe le composant Footer depuis le dossier "composants"


// 3️) Déclare un composant appelé "Layout" qui accepte un paramètre "children" (le contenu dynamique)
export function Layout({ children }) {
  return ( // 4️) Commence à retourner le code JSX (ce qui sera affiché à l'écran)
    
    // 5️) Ouvre un "Fragment" (une boîte invisible pour regrouper plusieurs éléments sans ajouter de balise HTML)
     <> 
     

      {children}  
      <Footer />   

       
    </> // 8️⃣ Ferme le Fragment

// 6️ **Affiche ici le contenu passé par le parent** (ex: Home / ou APropos /). C'est comme une place réservée pour tes pages.

// 7️⃣ **Affiche le Footer** (il sera présent sur TOUTES les pages qui utilisent ce Layout)

  );
}

