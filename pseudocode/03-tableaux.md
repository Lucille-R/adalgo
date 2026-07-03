# EXO 1 - maximum(tableau)
```text
VARIABLES
	i, max : ENTIERS
	tableau : ENTIER[taille]

DEBUT
	max ← tableau[0]
	POUR i ← 0 à taille-1
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
	POUR i ← 0 à taille-1
		SI tableau[i] < min
		min ← tableau [i]
		FIN SI
	FIN POUR
	RETOURNER min
```