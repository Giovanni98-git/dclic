PROJET : Gestion de formulaire client

----------------------------------------
1. DESCRIPTION DU PROJET
----------------------------------------

Ce projet est une application web simple permettant de gérer un formulaire client.

L’utilisateur peut :
- Saisir ses informations personnelles
- Ajouter un pays à la liste existante
- Vérifier la validité des données
- Afficher les informations dans une boîte de dialogue
- Enregistrer les données dans le navigateur (Local Storage)
- Récupérer les données enregistrées

----------------------------------------
2. STRUCTURE DU PROJET
----------------------------------------

Le projet contient trois fichiers :

- index.html  : structure du formulaire HTML
- style.css   : mise en forme du formulaire
- script.js   : logique JavaScript (validation et actions)

----------------------------------------
3. FONCTIONNALITÉS
----------------------------------------

✔ Ajout dynamique d’un pays dans la liste déroulante
✔ Vérification des champs du formulaire :
   - Nom : entre 8 et 20 caractères
   - Adresse : minimum 20 caractères
   - Code postal : doit être 3000 ou 4000
✔ Affichage automatique de la localité selon le code postal
✔ Affichage des erreurs dans des zones dédiées
✔ Changement de couleur des champs invalides (rouge)
✔ Affichage des données dans une alerte
✔ Sauvegarde des données dans le Local Storage
✔ Récupération automatique des données enregistrées

----------------------------------------
4. TECHNOLOGIES UTILISÉES
----------------------------------------

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Local Storage API

----------------------------------------
5. UTILISATION
----------------------------------------

1. Ouvrir le fichier index.html dans un navigateur
2. Remplir le formulaire
3. Cliquer sur :
   - "Vérification formulaire" pour valider les données
   - "Soumettre formulaire" pour afficher les données
   - "Enregistrer" pour sauvegarder les données
   - "Récupérer" pour recharger les données sauvegardées

----------------------------------------
6. AUTEUR
----------------------------------------

Projet réalisé dans le cadre d’un exercice de développement web.
