# 🧮 Adalgo

Entraînement à l'algorithmique en JavaScript, avec des tests automatisés.

## 📝 Description
*Exercices réalisés dans le cadre de la formation Concepteur Développeur d'Applications à Ada Tech School.*

Une série d'exercices d'algorithmique répartis en 7 chapitres, des conditions jusqu'au tri et à la recherche. Chaque fonction est vérifiée par des tests automatisés écrits avec Jest.

## 🔁 Méthode de travail

Pour chaque exercice :
1. Écrire le pseudo-code dans `pseudocode/XX-chapitre.md`
2. Coder la fonction dans `XX-chapitre.js`
3. Lancer les tests et les faire passer au vert
4. Commiter

Chaque chapitre a été développé sur sa propre branche, puis intégré à `main` par une pull request.

## 📚 Chapitres

| Fichier | Notions | État |
|---|---|---|
| `01-conditions.js` | if/else, comparaison, logique | ✅ |
| `02-boucles.js` | for, while, forEach, accumulation | ✅ |
| `03-tableaux.js` | indice, .length, filtrage | ✅ |
| `04-chaines.js` | .length, .split(), .join() | ✅ |
| `05-objets.js` | propriétés, tableaux d'objets | ✅ |
| `06-imbriques.js` | objets imbriqués, accès en profondeur | ✅ |
| `07-tri-recherche.js` | O(n), O(n²), algorithmes classiques | ⏳ En cours |

Certains exercices facultatifs restent à faire.

## 🛠️ Technologies utilisées
- JavaScript (ES Modules)
- Jest (tests automatisés)

## 🚀 Installation

```bash
git clone https://github.com/Lucille-R/adalgo.git
cd adalgo
npm install
```

## 🧪 Lancer les tests

Tous les tests :
```bash
npm test
```

Un seul chapitre, par exemple le chapitre 03 :
```bash
npm run ch03
```

Relance automatique à chaque sauvegarde :
```bash
npm run test:watch
```

## 👤 Auteure

- **Lucille Richard** - Étudiante chez Ada Tech School

## 📄 Licence

Projet réalisé dans un cadre pédagogique - Ada Tech School.