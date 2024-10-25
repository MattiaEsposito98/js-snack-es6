console.log("Squadre da calcio")
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const Squadra = [
  { //1 OGG
    'nome': "Napoli",
    'puntiFatti': 0,
    'falliSubiti': 0,
  },

  { //2 OGG
    'nome': "Juventus",
    'puntiFatti': 0,
    'falliSubiti': 0,
  },

  {  //3 OGG
    'nome': "Milan",
    'puntiFatti': 0,
    'falliSubiti': 0
  },

  { //4 OGG
    'nome': "Inter",
    'puntiFatti': 0,
    'falliSubiti': 0,
  },

  { //5 OGG
    'nome': "Roma",
    'puntiFatti': 0,
    'falliSubiti': 0,
  }
]

const dateSquadra = []
for (let i = 0; i < Squadra.length; i++) {
  const squadre = Squadra[i]
  squadre.falliSubiti = (Math.floor(Math.random()*500)+1)
  squadre.puntiFatti = (Math.floor(Math.random()*105)+1)
  console.log (squadre)
  console.log("Punti fatti:",squadre.puntiFatti)
  console.log("Falli subiti:",squadre.falliSubiti)

  dateSquadra.push(squadre.nome)
  dateSquadra.push(squadre.falliSubiti)
  console.log("Nome e falli subiti:",dateSquadra)

}