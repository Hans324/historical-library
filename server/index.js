
// on importe la bibliothèque Express
// require ("express") permet d'utilise Express dans ce fichier
const express = require("express")

// On crée une application Express
// "app" représente ton serveur
const app = express();

// Middleware : permet de lire les données JSON envoyées par le client
// Sans ca, req.body serait undefined
// app.use () permet de dire que j'utilise un middleware. (peut-être que ca veut dire que j'utilise plsuieurs middlewares.)
app.use(express.json());

//Route GET sur "/"
// Quand quelqu'un va sut http://localhost:3000/
// cette fonction sera executée
app.get("/", (req,res)=> {
// "req" = la requête envoyée par le client
// "res" = la réponse que le serveur va envoyer

// On envoie une réponse simple au client
res.send("API us running");

});

// Lancer serveur
// On définit le port du serveur
// 3000 = adresse locale (http://localhost:3000)
const PORT = 3000;

//on démarre le serveur
// Le serveur écoute les requêtes sur le port 3000
app.listen (PORT, () => {
// Message affiché dans le terminal quand le serveur démarre
console.log(`Server unning on http://localhost:${PORT}`);

});