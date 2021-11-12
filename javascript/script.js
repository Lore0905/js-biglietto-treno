// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// CHIEDO INFO AL PASSEGGIERO

// chiedo quanti km vuole percorrere
const km = parseInt ( prompt('Quanti km vuoi percorrere') );
console.log (km);

// chiedo l'età
const eta = parseInt ( prompt('Quanti anni hai?') );
console.log (eta);

// LOGICA

// calcolo il prezzo in base ai km che mi ha fornito
let price = km * 0.21;
console.log (price);

// sconto del 20% se sei minorenne
let discountMinorenni = price * 0.20;
console.log (discountMinorenni);

// sconto del 65% se sei over 65
let discountOver = price * 0.4;
console.log (discountOver);

if ( eta <= 18 ) {
    price = price - discountMinorenni;
} 
else if ( eta >= 65) {   
    price = price - discountOver;
}

console.log(price);

// OUTPUT
document.getElementById('Price-final').innerHTML = "Price: " + price.toFixed(2) ;