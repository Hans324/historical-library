import { BrowserRouter, Routes, Route } from "react-router-dom"; // 1️⃣ Importe les outils pour gérer les pages (navigation entre /, /apropos, etc.)
import Home from "./pages/Home" // 2️⃣ Importe le composant Home depuis le dossier "pages"
import { Layout } from "./composants/Layout"; // 3️⃣ Importe le Layout depuis le dossier "composants"
import React from "react";
import Liste from "./pages/Liste";
import Livre from "./pages/Livre";
import Connexion from "../Connexion"

function App() { // 4️⃣ Déclare le composant principal de l'application

  return ( // 5️⃣ Commence à retourner le code JSX

// 6️⃣ Active le système de navigation (pour changer de page sans recharger)
<BrowserRouter>  
      <Layout>    
      <Routes>     
        <Route path="/" element={<Home />} />
        <Route path= "/liste" element={<Liste/>}/>  
        <Route path= "/livre" element={<Livre/>}/>
        <Route path= "/Connexion" element={<Connexion/>} />
      </Routes>  
      </Layout> 
    </BrowserRouter> 
    
    // 7️⃣ Utilise le Layout (qui contient le Footer + la place pour les pages)
    // 8️⃣ Ouvre le conteneur des routes (comme un tableau d'affichage des pages)
    // 9️⃣ Définit une route : quand l'URL est "/", affiche le composant Home
    //10️⃣ Ferme le conteneur des routes
    //11️⃣ Ferme le Layout
    // 12️⃣ Ferme le BrowserRouter

  )
}
export default App;  // 13️⃣ Exporte App pour qu'il soit utilisé comme point d'entrée de l'application