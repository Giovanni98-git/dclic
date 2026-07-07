# Cahier des Charges – Projet Bibliothèque en Ligne

---

## 1. Présentation du projet

### 1.1 Contexte
Ce projet est réalisé dans le cadre du cours **Développement Web – Niveau Intermédiaire**. L’objectif est de concevoir et développer un site web dynamique pour une bibliothèque en ligne, permettant la gestion d’une collection de livres et la création de listes de lecture personnalisées.

### 1.2 Objectifs généraux
- Mettre en pratique les compétences en **HTML, CSS, JavaScript, PHP et MySQL**.
- Développer une application web **CRUD** (Create, Read, Update, Delete).
- Assurer une **sécurité minimale** (requêtes préparées, échappement, sessions, validation).
- Proposer une **interface responsive** et agréable.
- Intégrer une **gestion d’images** pour les livres.

### 1.3 Public cible
- Lecteurs souhaitant consulter le catalogue et gérer leur liste de lecture.
- Bibliothécaire (administrateur) gérant le fonds documentaire.

---

## 2. Périmètre fonctionnel

### 2.1 Modules principaux

| Module | Description |
|--------|-------------|
| **Authentification** | Inscription, connexion, déconnexion. |
| **Gestion des livres** | Ajouter, modifier, supprimer, lister des livres. |
| **Recherche** | Recherche par titre ou auteur. |
| **Détails d’un livre** | Affichage complet des informations + image. |
| **Liste de lecture** | Ajout / retrait de livres dans une wishlist personnelle. |
| **Upload d’images** | Ajout et modification d’une couverture pour chaque livre. |

### 2.2 Fonctionnalités détaillées

#### a) Page d’accueil (`index.php`)
- Présentation de la bibliothèque.
- Formulaire de recherche (titre / auteur).
- Affichage des **10 derniers livres** ajoutés sous forme de cartes.
- Liens vers la wishlist, la connexion et l’ajout de livres.

#### b) Résultats de recherche (`results.php`)
- Affiche les livres correspondant aux critères saisis.
- Chaque résultat renvoie vers la page de détails.

#### c) Détails d’un livre (`details.php`)
- Toutes les informations du livre : titre, auteur, description, maison d’édition, nombre d’exemplaires, image.
- Boutons : **Ajouter à ma liste de lecture**, **Modifier**, **Supprimer**.
- Accès réservé aux utilisateurs connectés pour les actions de modification / suppression.

#### d) Gestion de la liste de lecture (`wishlist.php`)
- Affiche tous les livres ajoutés par l’utilisateur connecté.
- Possibilité de retirer un livre (avec confirmation).
- Protégée par authentification.

#### e) Ajout de livre (`add_book.php`)
- Formulaire avec champs : titre, auteur, description, maison d’édition, nombre d’exemplaires, image (optionnelle).
- Validation serveur et client.
- Upload et renommage sécurisé de l’image.

#### f) Modification de livre (`edit_book.php`)
- Formulaire pré-rempli avec les données existantes.
- Possibilité de changer l’image (suppression automatique de l’ancienne).
- Mise à jour en base de données.

#### g) Suppression de livre (`delete_book.php`)
- Page de confirmation avant suppression.
- Suppression définitive en base et suppression physique de l’image associée.

#### h) Inscription (`register.php`)
- Formulaire avec nom, prénom, email, mot de passe (avec confirmation).
- Hash du mot de passe avec `password_hash()`.
- Vérification de l’unicité de l’email.

#### i) Connexion / Déconnexion (`login.php`, `logout.php`)
- Authentification par email / mot de passe.
- Gestion de session.

---

## 3. Spécifications techniques

### 3.1 Environnement de développement
- **Serveur local** : Laragon (Apache / MySQL / PHP).
- **Éditeur** : Visual Studio Code.
- **Navigateur** : Chrome / Firefox en version récente.

### 3.2 Langages et bibliothèques
- **PHP 7.4+** avec extension PDO.
- **MySQL 5.7+**.
- **HTML5**, **CSS3** (pas de framework externe).
- **JavaScript vanilla** (validation client).

### 3.3 Architecture des fichiers
```
bibliotheque/
├── app/                     # Code métier (non accessible)
│   ├── config.php
│   ├── db.php
│   ├── helpers.php
│   ├── validations.php
│   ├── auth.php
│   ├── helpers_upload.php
│   └── fonctions.php
├── public/                  # Racine web
│   ├── index.php
│   ├── results.php
│   ├── details.php
│   ├── wishlist.php
│   ├── add_book.php
│   ├── edit_book.php
│   ├── delete_book.php
│   ├── login.php
│   ├── logout.php
│   ├── register.php
│   └── assets/
│       ├── css/style.css
│       ├── js/app.js
│       └── uploads/         # Images uploadées
├── sql/
│   ├── schema.sql
│   └── donnees.sql
└── README.md
```

### 3.4 Base de données

#### Table `livres`
| Colonne | Type | Contraintes |
|---------|------|-------------|
| id | INT | AUTO_INCREMENT, PRIMARY KEY |
| titre | VARCHAR(100) | NOT NULL |
| auteur | VARCHAR(100) | NOT NULL |
| description | TEXT | NULL |
| maison_edition | VARCHAR(100) | NULL |
| nombre_exemplaire | INT | DEFAULT 1 |
| image_path | VARCHAR(255) | NULL |

#### Table `lecteurs`
| Colonne | Type | Contraintes |
|---------|------|-------------|
| id | INT | AUTO_INCREMENT, PRIMARY KEY |
| nom | VARCHAR(100) | NOT NULL |
| prenom | VARCHAR(100) | NOT NULL |
| email | VARCHAR(100) | UNIQUE, NOT NULL |
| password_hash | VARCHAR(255) | NOT NULL |

#### Table `liste_lecture`
| Colonne | Type | Contraintes |
|---------|------|-------------|
| id_livre | INT | PRIMARY KEY, FOREIGN KEY (livres.id) ON DELETE CASCADE |
| id_lecteur | INT | PRIMARY KEY, FOREIGN KEY (lecteurs.id) ON DELETE CASCADE |
| date_ajout | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP |

---

## 4. Contraintes de sécurité

- **Toutes les requêtes SQL** utilisent des **requêtes préparées** (PDO).
- **Toutes les sorties HTML** sont échappées avec `htmlspecialchars()` (fonction `e()`).
- **Validation des formulaires** : côté serveur (obligatoire) et côté client (UX).
- **Upload** :
  - Vérification du type MIME réel (via `mime_content_type()`).
  - Taille maximale : 2 Mo.
  - Formats autorisés : JPEG, PNG, WEBP, GIF.
  - Renommage automatique pour éviter les collisions.
- **Mots de passe** : hachés avec `password_hash()`.
- **Sessions** : stockage sécurisé de l’ID utilisateur.
- **Suppression** : exécutée uniquement en **POST** avec confirmation.

---

## 5. Contraintes d’écoconception

- **Optimisation des images** : conseiller des formats légers (WEBP) et compresser.
- **Requêtes SQL** : utilisation de `LIMIT` et d’index (sur `titre`, `auteur`).
- **Code modulaire** : éviter la duplication.
- **Accessibilité** : balises sémantiques, attributs `alt` sur les images.

---

## 6. Livrables attendus

- Archives ZIP ou dépôt GitHub contenant l’intégralité du code.
- Script SQL de création et d’insertion des données.
- Fichier `README.md` avec les instructions d’installation.
- Le site doit être **fonctionnel** sans erreur sur un serveur local (Laragon).

---

## 7. Planning indicatif (1 semaine)

| Jour | Tâches |
|------|--------|
| J1 | Installation, conception de la base de données, fichiers de configuration. |
| J2 | Authentification (inscription / connexion / déconnexion) et protection des pages. |
| J3 | CRUD livres (ajout, modification, suppression) + upload d’images. |
| J4 | Affichage (accueil, résultats, détails) et recherche. |
| J5 | Gestion de la wishlist. |
| J6 | Finalisation du design CSS, tests de responsive, corrections. |
| J7 | Tests fonctionnels, rédaction du README, remise. |

---

**Date** : Juillet 2026
**Auteur** : Giovanni MARC
**Version** : 1.0

---
