# EXO 1 - maximum(tableau)
```text
VARIABLES
	i, max : ENTIERS
	tableau : ENTIER[taille]

DEBUT
	max ← tableau[0]
	POUR i ← 0 à taille-1 FAIRE
		SI tableau[i] > max
		max ← tableau[i]
		FIN SI
	FIN POUR
	RETOURNER max
FIN
```

# EXO 2 - minimum(tableau)
```text
VARIABLES 	
	i, min : ENTIER
	tableau : ENTIER[taille]

DEBUT
	min ← tableau [0]
	POUR i ← 0 à taille-1 FAIRE
		SI tableau[i] < min
		min ← tableau [i]
		FIN SI
	FIN POUR
	RETOURNER min
FIN
```

# EXO 3 - moyenne(tableau)
``` text
VARIABLE
	i, total, compteur : ENTIER
	moyenneTab : REEL
	tableau : ENTIER[taille]

DEBUT
	total ← 0
	compteur ← 0
	moyenneTab ← null
	POUR i ← 0 à taille-1 FAIRE
		total ← total + tableau[i]
		compteur ← compteur + 1
	FIN POUR
	SI tableau = vide
		RETOURNER moyenneTab
	SINON 
		moyenneTab ← total / compteur
	FIN SI
	RETOURNER moyenneTab
FIN
```

# EXO 4 - contient(tableau, valeur)
```text
VARIABLES
	i, valeur : ENTIER
	tableau : ENTIER[taille]

DEBUT
	POUR i ← 0 à taille-1 FAIRE
		SI tableau[i] == valeur ALORS
			RETOURNE true
		FIN SI
	FIN POUR
	RETOURNE false
FIN
```

# EXO 5 - compter(tableau, valeur)
```text
VARIABLES
	i, valeur, compteur : ENTIER
	tableau : ENTIER[taille]

DEBUT
	compteur ← 0
	POUR i ← 0 à taille-1 FAIRE
		SI tableau[i] == valeur ALORS
			compteur ← compteur + 1
		FIN SI
	FIN POUR
	RETOURNE compteur
FIN
```