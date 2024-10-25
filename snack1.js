console.log ("Bici più pesante")

const bike1 = {
  "nome": "Bici Rossa",
  "peso": 30
}

console.log (bike1.nome,",Peso:", bike1.peso)

const bike2 = {
  "nome": "Bici blu",
  "peso": 20
}

 console.log (bike2.nome,",Peso: ", bike2.peso)


 if (bike1.peso > bike2.peso) {
   console.log ( "La", bike1.nome, "è più pesante della", bike2.nome)
 }

 else {
  console.log (`La ${bike2.nome} 2 è più pesante della ${bike1.nome}`)
 }
   
 
