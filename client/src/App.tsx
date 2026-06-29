import {Outlet} from "react-router-dom"
import { Layout } from "./composants/Layout"; // 3️⃣ Importe le Layout depuis le dossier "composants"
import React from "react";


function App() { // 4️⃣ Déclare le composant principal de l'application

  return ( // 5️⃣ Commence à retourner le code JSX

    <Layout/>

    

    
    // 7️⃣ Utilise le Layout (qui contient le Footer + la place pour les pages)
    // 8️⃣ Ouvre le conteneur des routes (comme un tableau d'affichage des pages)
    // 9️⃣ Définit une route : quand l'URL est "/", affiche le composant Home
    //10️⃣ Ferme le conteneur des routes
    //11️⃣ Ferme le Layout
    // 12️⃣ Ferme le BrowserRouter

  )
}
export default App;  // 13️⃣ Exporte App pour qu'il soit utilisé comme point d'entrée de l'application