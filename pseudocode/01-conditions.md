# EXO 1 - estPositif(n)
```text
VARIABLES
	n : ENTIER

DEBUT
	SI n >= 0 ALORS
		RETOURNE true
	SINON 
		RETOURNE false
	FIN SI
FIN
```

# EXO 2 - estPair(n)
```text
VARIABLES
	n : ENTIER

DEBUT
	SI n % 2 = 0 ALORS
		RETOURNE true
	SINON
		RETOURNE false
	FIN SI
FIN
```

# EXO 3 - max(a, b)
```text
VARIABLES
	a, b : ENTIER

DEBUT
	SI a = b ALORS
		RETOURNE a
	SINON SI a > b ALORS
		RETOURNE a
	SINON
		RETOURNE b
	FIN SI
FIN
```

# EXO 4 - mention(note)
```text
VARIABLES
	note : ENTIER

DEBUT 
	SI note >= 16 ALORS	
		RETOURNE "Très bien"
	SINON SI note >= 14 ALORS
		RETOURNE "Bien"
	SINON SI note >= 12 ALORS
		RETOURNE "Assez bien"
	SINON SI note >= 10 ALORS
		RETOURNE "Passable"
	SINON
		RETOURNE "Insuffisant"
	FIN SI
FIN
```

# EXO 5 - fizzbuzz(n)
```text
VARIABLES
	n : ENTIER

DEBUT
	SI n % 3 = 0 ET n % 5 = 0 ALORS
		RETOURNE "FizzBuzz"
	SINON SI n % 3 = 0 ALORS
		RETOURNE "Fizz"
	SINON SI n % 5 = 0 ALORS
		RETOURNE "Buzz"
	SINON 
		RETOURNE texte(n)
	FIN SI 
FIN
```

# EXO 5 - fizzbuzz2(n)
```text
VARIABLES
	n : ENTIER
	msg : STRING

DEBUT 
	msg ← ""
	SI n % 3 = 0 ALORS
		msg ← "Fizz"
	SINON SI n % 5 = 0 ALORS
		msg ← "Buzz"
	SINON 
		msg ← texte(n)
	FIN SI 
FIN