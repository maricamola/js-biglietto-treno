// costanti
const kmDaPercorrere = prompt('Km da percorrere');
const etaPasseggero = prompt('Età del passeggero');
const costoChilometro = 0.21;

// valori che potrebbero cambiare
let PrezzoBiglietto = kmDaPercorrere * costoChilometro;

console.log(kmDaPercorrere, etaPasseggero);
console.warn(PrezzoBiglietto);

if (etaPasseggero <= 18) {
  PrezzoBiglietto = PrezzoBiglietto * 0.8;
} else if (etaPasseggero >= 65) {
  PrezzoBiglietto = PrezzoBiglietto * 0.6;
}

document.getElementById('output').innerHTML = `Il costo del biglietto è ${PrezzoBiglietto} €`;