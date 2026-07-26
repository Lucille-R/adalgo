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

// EXO 2 : totalPoints(etudiantes)
describe("totalPoints", () => {
  it("retourne [{ nom: 'Ada', total: 45 }, { nom: 'Grace', total: 24 }] pour [ { nom: 'Ada',   notes: [12, 15, 18] }, { nom: 'Grace', notes: [10, 14] }]", () => {
    expect(totalPoints([
      { nom: "Ada",   notes: [12, 15, 18] },
      { nom: "Grace", notes: [10, 14] }
     ])).toEqual([{ nom: "Ada", total: 45 }, { nom: "Grace", total: 24 }])
  })
  it("retourne [{ nom: 'Ada', total: 0 }] pour [ { nom: 'Ada',   notes: [] }]", () => {
    expect(totalPoints([
      { nom: "Ada",   notes: [] },
     ])).toEqual([{ nom: "Ada", total: 0 }])
  })
})


// EXO 3 : aMaitriseCompetence(etudiantes, competence)
describe("aMaitriseCompetence", () => {
  it("retourne ['Ada'] pour ([ { nom: 'Ada',   competences: ['HTML', 'CSS', 'JS'] }, { nom: 'Grace', competences: ['HTML', 'Python'] }], 'JS')", () => {
    expect(aMaitriseCompetence([
      { nom: "Ada",   competences: ["HTML", "CSS", "JS"] },
     { nom: "Grace", competences: ["HTML", "Python"] }
    ], "JS")).toEqual(["Ada"])
  })
  it("retourne [ 'Ada', 'Grace' ] pour ([ { nom: 'Ada',   competences: ['HTML', 'CSS', 'JS'] }, { nom: 'Grace', competences: ['HTML', 'Python'] }], 'HTML')", () => {
    expect(aMaitriseCompetence([
      { nom: "Ada",   competences: ["HTML", "CSS", "JS"] },
      { nom: "Grace", competences: ["HTML", "Python"] }
    ], "HTML")).toEqual(["Ada", "Grace"])
  })
  it("retourne [] pour ([ { nom: 'Ada',   competences: ['HTML', 'CSS', 'JS'] }, { nom: 'Grace', competences: ['HTML', 'Python'] }], 'Java')", () => {
    expect(aMaitriseCompetence([
      { nom: "Ada",   competences: ["HTML", "CSS", "JS"] },
      { nom: "Grace", competences: ["HTML", "Python"] }
    ], "Java")).toEqual([])
  })
})


// EXO 4 :
describe("projetsEnRetard", () => {
  it.todo("à compléter")
})


// EXO 5 :
describe("resumePromo", () => {
  it.todo("à compléter")
})
