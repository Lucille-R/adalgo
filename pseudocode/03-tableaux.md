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
	FIN POUR
	RETOURNER max
FIN
```