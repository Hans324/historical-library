/*   C’est un fichier de configuration pour TypeScript (un outil qui aide à éviter les erreurs dans ton code).
Il dit à TypeScript :
"Ne t’inquiète pas si tu vois des images (.png, .jpg, etc.) importées dans mon code. 
Je sais les gérer, même si ce ne sont pas des fichiers JavaScript normaux."*/


declare module "*.png";  /*  declare module "*.png";

Signification : "Toutes les images avec l’extension .png peuvent être importées dans mon code sans erreur."
        */
declare module "*.jpg"; /*   declare module "*.jpg";

Pareil, mais pour les images .jpg
        */
declare module "*.jpeg";  /*   declare module "*.jpeg";

Pareil, mais pour les images .jpeg.




      */
declare module "*.svg"; /* declare module "*.svg";

Pareil, mais pour les images .svg (des images vectorielles).
     */



/*   Pourquoi ce fichier existe ?
Par défaut, TypeScript ne comprend pas que tu peux importer des fichiers images dans ton code JavaScript/React.
Ce fichier lui dit : "Oui, c’est normal, je gère ça avec Vite (l’outil qui construit ton application)."

Analogie :
Imagine que TypeScript est un douanier très strict à la frontière.

Normalement, il ne laisse passer que les fichiers JavaScript.
Ce fichier est comme un passeport spécial qui dit : "Laisse passer aussi les images, elles sont autorisées !"

Si tu utilises des images dans ton code (par exemple, <img src={import MyImage from './photo.png'} />), ce fichier évite que TypeScript ne râle en disant "Mais qu’est-ce que c’est que ce fichier .png ?!".
         */
