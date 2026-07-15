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

# EXO 6 - toCamelCase(str)
```text
VARIABLES :
	str : STRING
	strDecoupee, tabMotsMaj : STRING[taille]

DEBUT
	strDecoupee ← DECOUPER str A CHAQUE "_"
	POUR chaque mot de strDecoupee avec son index FAIRE
		SI index == 0 ALORS
			RETOURNER mot
		SINON
			RETOURNER mot[0] EN MAJUSCULE + mot DECOUPé à partir de mot[1]
		FIN SI
	FIN POUR
	JOINDRE tabMotsMaj
	RETOURNER tabMotsMaj
FIN
```

# EXO 7 - toSnakeCase(str)
```text
VARIABLES :
	str : STRING

DEBUT
	DANS str REMPLACER chaque majuscule PAR "_" + minuscule
	str ← strModifiee
	RETOURNER strModifiee
FIN
```

# EXO 8 - validerMotDePasse(mdp)
```text
VARIABLES :
	mdp : STRING
	
DEBUT
	SI mdp > 6 ET
	mdp < 12 ET
	mdp CONTIENT majuscule ET
	mdp CONTIENT minuscule ET
	mdp CONTIENT chiffre ET
	mdp CONTIENT [$#@] ALORS
		RETOURNE vrai
	SINON
		RETOURNE faux
	FIN SI
FIN
```

# EXO 9 - analyserTexte(texte)
```text
VARIABLES :
	texte : STRING
	lettres, mots, phrases : NUMBERS
	dansMot : BOOLEAN

DEBUT
	lettres ← 0
	mots ← 0
	phrases ← 0
	dansMot ← faux
	POUR i de 0 à taille.texte-1 FAIRE
		SI texte[i] = lettre FAIRE
			lettres ← lettres + 1
			dansMot ← vrai
		SINON
			SI dansMot = vrai FAIRE
				mots ← mots + 1
				dansMot ← false
			FIN SI
			SI texte[i] == "." || texte[i] == "!" || /texte[i] == "?" FAIRE
				phrases ← phrases + 1
			FIN SI
		FIN SI
	FIN POUR
	RETOURNE { lettres, mots, phrases }
FIN
```