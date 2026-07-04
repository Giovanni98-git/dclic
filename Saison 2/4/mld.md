# Modèle Logique de Données (MLD)

```text
APPRENANT
---------
id_apprenant (PK)
nom
prenom
email
telephone
date_naissance
date_inscription

FORMATION
---------
id_formation (PK)
titre
description
niveau
duree_heures

SESSION_FORMATION
-----------------
id_session (PK)
id_formation (FK)
date_debut
date_fin
lieu
nb_places

INSCRIPTION
-----------
id_inscription (PK)
id_apprenant (FK)
id_session (FK)
date_inscription
statut
note_finale
```

---
