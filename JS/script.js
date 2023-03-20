const kmDaPercorrere = prompt ('Km da percorrere')

const etaPasseggero = prompt ('Età del passeggero')

console.log(kmDaPercorrere , etaPasseggero);

const costoChilometro = 0.21

const PrezzoBiglietto = kmDaPercorrere * costoChilometro;

console.log(PrezzoBiglietto)

let sconto = PrezzoBiglietto

let sconto40 = PrezzoBiglietto - (PrezzoBiglietto * 0.4) 

if (etaPasseggero <= 18) {
  `
Il costo del biglietto è ${sconto20} €
`
} else if (etaPasseggero >= 65) {
  `
Il costo del biglietto è ${sconto40} €
`
}
else {
  `
Il costo del biglietto è ${PrezzoBiglietto} €
`
}


const message =`
Il costo del biglietto è ${PrezzoBiglietto} €
`
document.getElementById('output').innerHTML = message;