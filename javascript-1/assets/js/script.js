/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nome = "Mario";
const cognome = "Rossi";
console.log(nome, cognome);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const display = document.getElementById("display");

function addValue(value) {
  display.value += value;
  console.log(value);
}
const valueButtons = document.querySelectorAll("[dataValue]"); //array di tutti gli elementi con attributo data value indipendentemente dal valore

valueButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const nestedValue = event.target.getAttribute("dataValue"); //event.target restituisce il bottone cliccato e il metodo getAttribute il VALORE dell'attributo
    addValue(nestedValue);
  });
});

const clearButton = document.querySelector("button[doAction='clearDisplay']");
const equalButton = document.querySelector(
  "button[doAction='calculateResult']",
);

clearButton.addEventListener("click", (event) => {
  display.value = null;
});

equalButton.addEventListener("click", (event) => {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Non so come tu abbia fatto";
  }
});

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const annoNascita = 2005;
const annoCorrente = 2026;
let age = annoCorrente - annoNascita;
let oldAge = age + 10;
let youngAge = age - 5;

console.log(`Oggi hai ${age} anni`);
console.log(`Tra 10 anni ne avrai ${oldAge}`);
console.log(`5 anni fa ne avevi ${youngAge}`);

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maggiorenne(age) {
let bigBoy
  if (age >= 18) {
    console.log(`Età: ${age} anni - Maggiorenne: true `); return bigBoy = true;
  } else {
    console.log(`Età: ${age} anni - Maggiorenne: false! `); return bigBoy = false;
  }
};

maggiorenne(age);



/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let gender = undefined;
let address = null;
console.log(`Nome è di tipo ${typeof nome}`)
console.log(`Età è di tipo ${typeof age}`)
console.log(`Maggiorenne è di tipo ${typeof bigBoy}`)
console.log(`Genere è di tipo ${typeof gender}`)
console.log(`Indirizzo è di tipo ${typeof address}`)



/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero = 5;
const stringa = "5";

console.log(numero == stringa);  // true
console.log(numero === stringa); // false

// == confronta il valore convertendo i tipi (coercizione), === confronta valore E tipo, senza conversioni.


/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Previsioni:
// "5" + 3      -> "53"  
// "5" - 3      -> 2     
// true + 1     -> 2     
// "10" * "2"   -> 20    

console.log("5" + 3);       // "53"
console.log("5" - 3);       // 2
console.log(true + 1);      // 2
console.log("10" * "2");    // 20


/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/


/* SCRIVI QUI LA TUA RISPOSTA */

const n = 12;

const pari = n % 2 === 0; // l'operatore % restituisce il RESTO della divisione (quindi 0 se i numeri sono divisibili)
const divisibileTre = n % 3 === 0;

console.log(`n è pari: ${pari}`);
console.log(`n è divisibile per 3: ${divisibileTre}`);
console.log(`n è pari E divisibile per 3: ${pari && divisibileTre}`);


/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/



/* SCRIVI QUI LA TUA RISPOSTA */

const a = 10;
const b = 3;
const c = 7;

let tipo;

switch (true) {
  case a === b && b === c:
    tipo = "equilatero";
    break;
  case a !== b && b !== c && a !== c:
    tipo = "scaleno";
    break;
  default:
    tipo = "isoscele";
}

console.log(`Il perimetro del triangolo ${tipo} è di ${a + b + c} cm`);