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
```