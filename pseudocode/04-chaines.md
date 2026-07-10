# EXO 1 - inverserChaine(chaine)
```text
VARIABLES :
	chaine : STRING

DEBUT :
	DECOUPER chaine en tableau
	INVERSER le tableau
	JOINDRE le tableau
	RETOURNER le resultat
FIN
```

# EXO 2 - estPalindrome(chaine)
```text
VARIABLES :
	chaine, chaineInversee : STRING
	estPalindrome : BOOLEAN

DEBUT
	DECOUPER chaine en tableau
	INVERSER le tableau
	JOINDRE le tableau
	chaineInversee ← tableau
	SI chaine == chaineInversee ALORS
		estPalindrome ← VRAI
	SINON
		estPalindrome ← FAUX
	FIN SI
FIN
```

# EXO 3 - compterVoyelles(chaine)
```text
VARIABLES :
	voyelles : STRING [taille]
	chaine : STRING
	compteur, i :NUMBER

DEBUT
	compteur ← 0
	voyelles ← [a, e, i, o, u, y]
	POUR i ← 0 à taille.chaine-1 FAIRE
		SI voyelles INCLUS DANS chaine ALORS
		compteur++
	FIN POUR
	RETOURNE compteur
FIN
```

# EXO 4 - capitaliser(chaine)
```text
VARIABLES :
	chaine : STRING

DEBUT
	chaine EN MINUSCULE
	chaineMinuscule[0] EN MAJUSCULE
	RETOURNE chaine
FIN
```

# EXO 5 - tronquer(chaine, longueur)
```text
VARIABLES :
	chaine, chaineDecoupee : STRING
	longueur : NUMBER

DEBUT
	SI longueur chaine > longueur ALORS
		DECOUPER chaine de 0 à longueur
		chaine ← chaineDecoupee + ...
	FIN SI
	RETOURNE chaine
FIN
```