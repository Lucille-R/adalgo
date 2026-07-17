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