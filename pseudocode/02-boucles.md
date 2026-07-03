# EXO 1 - compterJusqua(n)
```text
VARIABLES
	i, n : ENTIER

DEBUT
	POUR i ← 1 à n FAIRE
		AFFICHER i
	FIN POUR
FIN
```

# EXO 2 - afficherPairs(n)
```text
VARIABLES
	i, n : ENTIER

DEBUT
	POUR i ← 1 à n FAIRE
		SI i % 2 = 0 ALORS
			AFFICHER i
		FIN SI
	FIN POUR
FIN
```

# EXO 3 - somme(n)
```text
VARIABLES
	i, n, somme : ENTIER

DEBUT
	somme ← 0
	POUR i ← 1 à n FAIRE
		somme ← somme + i
	FIN POUR
	RETOURNER somme
FIN
```

# EXO 4 - produit(n)
```text
VARIABLES
	i, n, produit : ENTIER

DEBUT 
	produit ← 1
	POUR i ← 1 à n FAIRE
		produit ← produit * i
	FIN POUR
	RETOURNER produit
FIN
```

# EXO 5 - compterPairs(n)
```text
VARIABLES
	i, n, compteur : ENTIER

DEBUT
	compteur ← 0
	POUR i ← 1 à n FAIRE
		SI i % 2 = 0 ALORS
			compteur ← compteur + 1
		FIN SI
	FIN POUR
	RETOURNER compteur
FIN
```

# EXO 6 - table(n)
```text
VARIABLES 
	i, n, multiple : ENTIER
	tableau : ENTIER[n]

DEBUT
	POUR i ← 1 à n FAIRE
		multiple ← i * n
		AJOUTER multiple A tableau
	FIN POUR
	RETOURNER tableau
FIN
```

# EXO 7 - multiplesJusqua(n, limite)
```text
VARIABLES
	n, limite, compteur, multiple,: ENTIER
	tableauJ : ENTIER[n]

DEBUT
	TANT QUE (compteur * n) <= limite
		multiple ← compteur * n
		AJOUTER multiple A tableauJ
		compteur ← compteur + 1
	FIN TANT QUE
	RETOURNER tableauJ
FIN
```