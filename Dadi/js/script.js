/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */

const min = 1;
const max = 6;

// Giocatore lancia il dado
const giocatore = Math.floor(Math.random() * max) +min;
console.log("il Giocatore ha lanciato " + giocatore);

// Comuter lancia il dado
const computer = Math.floor(Math.random() * max) +min;
console.log("il Computer ha lanciato " + computer);

// Se il giocatore ha un numero superiore al computer vince
if(giocatore > computer){
    console.log("Il vincitore è: GIOCATORE");
}
// Se il giocatore ha un numero inferiore al computer perde
else if(giocatore < computer){
    console.log("Il vincitore è: COMPUTER");
}
// Se i dati sono uguali si verifica il pareggio
else if (giocatore == computer) {
    console.log("PAREGGIO!");
}