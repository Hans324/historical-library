-- ========== TABLE USER (Utilisateurs) ==========
Create TABLE USER ( /* Crée une table nommée "User" pour stocker les utilisateurs*/
    id INT PRIMARY KEY AUTO_INCREMENT, /* "id" = numéro unique pour chaque utilisateur (ex: 1, 2, 3...). */
/*PRIMARY KEY = identifiant obligatoire et unique */
/* AUTO_INCREMENT = le numéro s'incrémente tout seul à chaque nouvel utilisateur.*/

    name VARCHAR(100) NOT NULL, /* "name" = nom de l'utilisateur (ex: "Hans Siemon"). */
/* VARCHAR(100) = texte de max 100 caractères. NOT NULL = ce champ ne peut pas être vide.*/
    email VARCHAR(100) UNIQUE NOT NULL, /* "email" = adresse email de l'utilisateur (ex: "hans@example.com"). UNIQUE = deux utilisateurs ne peuvent pas avoir le même email. NOT NULL = obligatoire. */
    password VARCHAR(255) NOT NULL,   /* "password" = mot de passe crypté (ex: "5f4dcc3b5aa765d61d8327deb882cf99"). VARCHAR(255) = texte de max 255 caractères (pour les mots de passe sécurisés). */
);

-- ========== TABLE BOOK (Livres) ==========

Create TABLE BOOK ( /* Crée une table nommée "Book" pour stocker les livres */

id INT PRIMARY KEY AUTO_INCREMENT, /*"id" = numéro unique pour chaque livre (ex: 101, 102...).
PRIMARY KEY = identifiant obligatoire et unique. */
title VARCHAR(255) NOT NULL,  /* "title" = titre du livre (ex: "Le Petit Prince"). VARCHAR(255) = texte de max 255 caractères. NOT NULL = obligatoire. */
author VARCHAR(100) NOT NULL,  /* "author" = auteur du livre (ex: "Antoine de Saint-Exupéry"). VARCHAR(100) = texte de max 100 caractères. NOT NULL = obligatoire. */
category VARCHAR(50),     /* "category" = catégorie du livre (ex: "Roman", "Science-Fiction"). VARCHAR(50) = texte de max 50 caractères. Peut être vide (pas de NOT NULL). */
available BOOLEAN DEFAULT TRUE   /* "available" = indique si le livre est disponible (TRUE = oui, FALSE = non). DEFAULT TRUE = par défaut, le livre est disponible. */


);


-- ========== TABLE LOAN (Prêts) ==========
CREATE TABLE Loan (       /* Crée une table nommée "Loan" pour stocker les emprunts de livres */
id INT PRIMARY KEY AUTO_INCREMENT,  /* "id" = numéro unique pour chaque prêt (ex: 5001, 5002...). PRIMARY KEY = identifiant obligatoire et unique. */
user_id INT NOT NULL, /*"user_id" = numéro de l'utilisateur qui a emprunté le livre (ex: 1 pour Hans). INT = nombre entier. NOT NULL = obligatoire.*/
book_id INT NOT NULL,  /* "book_id" = numéro du livre emprunté (ex: 101 pour "Le Petit Prince"). INT = nombre entier. NOT NULL = obligatoire. */
borrowed_at DATETIME NOT NULL, /*"borrowed_at" = date et heure de l'emprunt (ex: "2026-06-16 14:30:00"). DATETIME = format date + heure. NOT NULL = obligatoire.*/
returned_at DATETIME, /*"returned_at" = date et heure du retour (ex: "2026-06-23 10:00:00"). Peut être NULL (vide) si le livre n'est pas encore rendu.*/
FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE, /*"user_id" est une clé étrangère : elle doit correspondre à un "id" dans la table User. ON DELETE CASCADE = si l'utilisateur est supprimé, tous ses prêts le seront aussi. */
FOREIGN KEY (book_id) REFERENCES User(id) ON DELETE CASCADE,/*  "book_id" est une clé étrangère : elle doit correspondre à un "id" dans la table Book. ON DELETE CASCADE = si le livre est supprimé, tous ses prêts le seront aussi.*/

);