import { inverserChaine, estPalindrome, compterVoyelles, capitaliser, tronquer, toCamelCase, toSnakeCase, validerMotDePasse, analyserTexte } from "./04-chaines.js"

// Tu maîtrises maintenant .toBe(), .toEqual() et le cas null.
// À partir d'ici, on ne te montre plus les tests — tu les écris.
// Les cas à couvrir sont indiqués dans chaque describe.

// Cas à couvrir : chaîne normale, chaîne vide.
describe("inverserChaine", () => {
  it("retourne 'ruojnob' pour 'bonjour'", () => {
    expect(inverserChaine("bonjour")).toBe("ruojnob")
  })
  it("retourne '' pour chaine vide", () => {
    expect(inverserChaine("")).toBe("")
  })
})

// Cas à couvrir : palindrome, non-palindrome, un seul caractère.
describe("estPalindrome", () => {
  it("retourne true pour 'kayak'", () => {
    expect(estPalindrome("kayak")).toBe(true)
  })
  it("retourne false pour 'bonjour'", () => {
    expect(estPalindrome("bonjour")).toBe(false)
  })
    it("retourne true pour 'a'", () => {
    expect(estPalindrome("a")).toBe(true)
  })
})

// Cas à couvrir : chaîne avec voyelles, chaîne sans voyelle.
describe("compterVoyelles", () => {
  it("retourne 3 pour 'bonjour'", () => {
    expect(compterVoyelles("bonjour")).toBe(3)
  })
  it("retourne 0 pour 'bcdf'", () => {
    expect(compterVoyelles("bcdf")).toBe(0)
  })
})

// [FACULTATIF] Cas à couvrir : chaîne mixte (boNJOUR → Bonjour), chaîne déjà correcte.
describe("capitaliser", () => {
  it("retourne 'Bonjour' pour 'boNJOUR'", () => {
    expect(capitaliser("boNJOUR")).toBe("Bonjour")
  })
})

// [FACULTATIF] Cas à couvrir : chaîne trop longue, chaîne assez courte.
describe("tronquer", () => {
  it("retourne 'bonjour...' pour 'bonjour tout le monde'", () => {
    expect(tronquer("bonjour tout le monde", 7)).toBe("bonjour...")
  })
  it("retourne 'coucou' pour 'coucou'", () => {
    expect(tronquer("coucou", 7)).toBe("coucou")
  })
})

// [FACULTATIF] Cas à couvrir : plusieurs mots, deux mots.
describe("toCamelCase", () => {
  it("retourne 'monNomDeVariable' pour 'mon_nom_de_variable'", () => {
    expect(toCamelCase("mon_nom_de_variable")).toBe("monNomDeVariable")
  })
  it("retourne 'helloWorld' pour 'hello_world'", () => {
    expect(toCamelCase("hello_world")).toBe("helloWorld")
  })
})

// [FACULTATIF] Même pattern inverse.
describe("toSnakeCase", () => {
  it.todo("à compléter")
})

// [FACULTATIF] Cas à couvrir : valide, trop court, pas de chiffre, pas de majuscule.
describe("validerMotDePasse", () => {
  it.todo("à compléter")
})

// [FACULTATIF] Cas à couvrir : texte simple, texte vide.
// Rappel : le résultat est un objet { lettres, mots, phrases } — utilise .toEqual().
describe("analyserTexte", () => {
  it.todo("à compléter")
})
