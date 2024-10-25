const bikes = [
  {
    'nome': "Bici rossa",
    'peso': 5
  },

  {
    'nome': "Bici blu",
    'peso': 1
  },

  {
    'nome': "Bici verde",
    'peso': 3
  },
]

//console.log(bikes[0].peso * 2)   //esempio

//peso di riferimento 
//ciclo per scorrere tutti gli elementi dell'array
//consizione che verifichi se il peso è da aggiornare - confronto rifermiento con peso elemento i

let biciLeggera = bikes[0]

for (let i = 0; i < bikes.length; i++) {
  const elementoCorrente = bikes[i]
 if (elementoCorrente.peso < biciLeggera.peso){
  // console.log ("Bici leggera:", biciLeggera)
  // console.log ("Bici più leggera:", elementoCorrente)
  biciLeggera = elementoCorrente
  //console.log ({biciLeggera}, elementoCorrente)

 }

}

console.log (biciLeggera)