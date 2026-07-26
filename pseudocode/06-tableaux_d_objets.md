# EXO 1 - tousLesPrenoms(personnes)
```text
VARIABLES
	personnes : OBJET[taille]
	nom, prénoms : STRING

DEBUT
	POUR chaque objet dans personnes FAIRE
		AJOUTER prenom dans un nouveau tableau
	FIN POUR
	RETOURNER nouveau tableau
FIN
```

# EXO 2 - totalPoints(etudiantes)
```text
VARIABLES
	etudiantes : OBJET[taille] {nom, notes}
	nom : STRING
	notes : NUMBERS[taille]
	total : NUMBER
	tabTotal : OBJET[taille] {nom, total}

DEBUT
	total ← 0
	POUR chaque etudiante dans etudiantes FAIRE
		total ← ADDITIONNER notes de etudiante
		AJOUTER nom et total DANS tabTotal
	FIN POUR
	RETOURNER tabTotal
```