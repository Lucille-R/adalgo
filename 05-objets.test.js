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

// EXO 2
describe("filtrerParAge", () => {
  it("retourne [{ nom: 'Ada', age: 28 }] pour '[{ nom: 'Ada', age: 28 }, { nom: 'Alan', age: 17 }], 18' ", () => {
    expect(filtrerParAge([{ nom: 'Ada', age: 28 }, { nom: 'Alan', age: 17 }], 18)).toEqual([{ nom: 'Ada', age: 28 }])
  })
  it("retourne [] pour '[{ nom: 'Ada', age: 16 }, { nom: 'Alan', age: 17 }], 18' ", () => {
    expect(filtrerParAge([{ nom: 'Ada', age: 16 }, { nom: 'Alan', age: 17 }], 18)).toEqual([])
  })
})

// EXO 3
describe("trierParNom", () => {
  it("retourne [{ nom: 'Hopper' }, { nom: 'Lovelace' }, { nom: 'Turing' }] pour [{ nom: 'Turing' }, { nom: 'Lovelace' }, { nom: 'Hopper' }]", () => {
    expect(trierParNom([{ nom: "Turing" }, { nom: "Lovelace" }, { nom: "Hopper" }])).toEqual([{ nom: "Hopper" }, { nom: "Lovelace" }, { nom: "Turing" }])
  })
  it("retourne [{ nom: 'Hopper' }] pour [{ nom: 'Hopper' }]", () => {
    expect(trierParNom([{ nom: "Hopper" }])).toEqual([{ nom: "Hopper" }])
  })
  it("retourne [] pour []", () => {
    expect(trierParNom([])).toEqual([])
})
});

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
