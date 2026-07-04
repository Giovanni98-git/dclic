# Modèle Physique (MPD)

## Table apprenants

```sql
CREATE TABLE apprenants (
    id_apprenant INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telephone VARCHAR(20),
    date_naissance DATE,
    date_inscription DATETIME NOT NULL
);
```

---

## Table formations

```sql
CREATE TABLE formations (
    id_formation INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(150) NOT NULL,
    description TEXT,
    niveau ENUM('debutant','intermediaire','avance') NOT NULL,
    duree_heures INT NOT NULL
);
```

---

## Table sessions

```sql
CREATE TABLE sessions (
    id_session INT AUTO_INCREMENT PRIMARY KEY,
    id_formation INT NOT NULL,
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL,
    lieu ENUM('presentiel','en_ligne') NOT NULL,
    nb_places INT NOT NULL,

    FOREIGN KEY (id_formation)
        REFERENCES formations(id_formation)
        ON DELETE CASCADE
);
```

---

## Table inscriptions

```sql
CREATE TABLE inscriptions (
    id_inscription INT AUTO_INCREMENT PRIMARY KEY,

    id_apprenant INT NOT NULL,
    id_session INT NOT NULL,

    date_inscription DATETIME NOT NULL,

    statut ENUM(
        'en_attente',
        'confirmee',
        'annulee'
    ) NOT NULL,

    note_finale DECIMAL(4,2),

    FOREIGN KEY (id_apprenant)
        REFERENCES apprenants(id_apprenant)
        ON DELETE CASCADE,

    FOREIGN KEY (id_session)
        REFERENCES sessions(id_session)
        ON DELETE CASCADE,

    UNIQUE(id_apprenant, id_session)
);
```

La contrainte :

```sql
UNIQUE(id_apprenant, id_session)
```

empêche un apprenant d'être inscrit deux fois à la même session.

---
