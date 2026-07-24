# EXO 1 - fullName(personne)
```text
VARIABLES
	personne : OBJETS 
	prenom, nom : STRING

DEBUT
	RETOURNER personne.prenom + " " + personne.nom
FIN
```

# EXO 2 - filtrerParAge(personnes, ageMin)
```text
VARIABLES
	personnes : OBJET[taille]
	ageMin, age : NUMBERS
	nom : STRING
	filtreAge : OBJET[taille]

DEBUT
	FILTRER personnes 
		RETOURNER personne.age >= ageMin
	RETOURNER filtreAge
FIN
```

# EXO 3 - trierParNom(personnes)
```text
VARIABLES
	personnes : OBJET[taille]
	nom : STRING
	triNom : OBJET[taille]

DEBUT
	TRIER personnes 
		RETOURNER ordre alphabétique
	RETOURNER triNom
FIN
```

# EXO 4 - grouperParVille(personnes)
```text
VARIABLES
	personnes : OBJET[taille]
	nom, ville : STRING
	groupes : OBJET

DEBUT
	POUR chaque personne dans personnes FAIRE
		SI ville n'existe pas ALORS
			CREER tableau vide dans groupes
		FIN SI
		AJOUTER nom de la personne DANS tableau de sa ville
	FIN POUR
	RETOURNER groupes
FIN
```