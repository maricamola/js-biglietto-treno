const kmDaPercorrere = prompt ('Km da percorrere')

const etaPasseggero = prompt ('Età del passeggero')

console.log(kmDaPercorrere , etaPasseggero);

const costoChilometro = 0.21

const PrezzoBiglietto = kmDaPercorrere * costoChilometro;

console.log(PrezzoBiglietto)

const message =`
Il costo del biglietto è ${PrezzoBiglietto} €
`
document.getElementById('output').innerHTML = message;