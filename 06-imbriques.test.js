import { tousLesPrenoms, totalPoints, aMaitriseCompetence, projetsEnRetard, resumePromo } from "./06-imbriques.js"

// À ce stade tu sais écrire des tests complets.
// Écris tes propres describe et it pour chaque fonction.
// Pense aux cas limites : tableau vide, aucun résultat, un seul élément.

// EXO 1 : tousLesPrenoms(personnes)
describe("tousLesPrenoms", () => {
  it("retourne ['Ada', 'Augusta', 'Grace'] pour [{ nom: 'Lovelace', prenoms: ['Ada', 'Augusta']},{ nom: 'Hopper',   prenoms: ['Grace'] }]", () => {
    expect(tousLesPrenoms([ { nom: "Lovelace", prenoms: ["Ada", "Augusta"] }, { nom: "Hopper",   prenoms: ["Grace"] }])).toEqual(["Ada", "Augusta", "Grace"])
  })
  it("retourne ['Ada'] pour [{ nom: 'Lovelace', prenoms: ['Ada']}]", () => {
    expect(tousLesPrenoms([ { nom: "Lovelace", prenoms: ["Ada"] }])).toEqual(["Ada"])
  })
  it("retourne [] pour []", () => {
    expect(tousLesPrenoms([])).toEqual([])
  })
})

describe("totalPoints", () => {
  it.todo("à compléter")
})

describe("aMaitriseCompetence", () => {
  it.todo("à compléter")
})

describe("projetsEnRetard", () => {
  it.todo("à compléter")
})

describe("resumePromo", () => {
  it.todo("à compléter")
})
