import { fullName, filtrerParAge, trierParNom, grouperParVille, statistiques, prixTotal, plusCher } from "./05-objets.js"

// Les fonctions retournent des objets et des tableaux d'objets.
// Utilise .toBe() pour une string, .toEqual() pour un objet ou un tableau.
// Plus d'indications sur les cas — choisis toi-même ce qui est pertinent à tester.

// EXO 1
describe("fullName", () => {
  it("retourne Ada Lovelace pour { prenom: 'Ada', nom: 'Lovelace' }", () => {
    expect(fullName({prenom: "Ada", nom: "Lovelace"})).toEqual("Ada Lovelace")
  })
  it("retourne un simple espace pour { prenom: '', nom: '' }", () => {
    expect(fullName({prenom: "", nom: ""})).toEqual(" ")
  })
  it("retourne Marie-Jeanne Le Capitaine pour { prenom: 'Marie-Jeanne', nom: 'Le Capitaine' }", () => {
   expect(fullName({prenom: "Marie-Jeanne", nom: "Le Capitaine"})).toEqual("Marie-Jeanne Le Capitaine")
})
});

describe("filtrerParAge", () => {
  it.todo("à compléter")
})

describe("trierParNom", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("grouperParVille", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("statistiques", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("prixTotal", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("plusCher", () => {
  it.todo("à compléter")
})
