const kmDaPercorrere = prompt ('Km da percorrere')

const etaPasseggero = prompt ('Età del passeggero')

console.log(kmDaPercorrere , etaPasseggero);

const costoChilometro = 0.21

const PrezzoBiglietto = kmDaPercorrere * costoChilometro;

console.log(PrezzoBiglietto)

const sconto20 = PrezzoBiglietto (PrezzoBiglietto * 0.2) 

const sconto40 = PrezzoBiglietto (PrezzoBiglietto * 0.4) 




const message =`
Il costo del biglietto è ${PrezzoBiglietto} €
`
document.getElementById('output').innerHTML = message;