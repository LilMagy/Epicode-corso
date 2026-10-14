/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto 'persona' con: nome, cognome, eta, citta.
   Stampa: 'Mario Rossi, 25 anni, vive a Roma.'
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 30,
  citta: "Roma",
};

console.log(
  `${persona.nome} ${persona.cognome} ${persona.eta} anni, vive a ${persona.citta}`,
);

/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto 'persona': aggiungi 'email', poi rimuovi 'eta'.
   Stampa l'oggetto risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

persona.email = "mario.rossi@gmail.com";
delete persona.eta; //elimina la proprietà

console.log(
  `${persona.nome} ${persona.cognome}, recapito mail: ${persona.email}, vive a ${persona.citta}`,
);

/* ESERCIZIO 3 — Oggetto annidato
   Oggetto 'utente' con una proprietà 'indirizzo' (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const utente = {};
utente.indirizzo = {
  via: "Savoia",
  citta: "Roma",
  cap: "00118",
};
console.log(`${utente.indirizzo.cap}`);

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto 'persona', variabile chiave = 'nome'.
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const chiave = "nome";
console.log(persona[chiave]);

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa 'Pareggio'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 5;
let b = 2;
let c = 2;

if (a > b && a > c) {
  console.log(`${a}`);
} else {
  if (b > a && b > c) {
    console.log(`${b}`);
  } else if (c > a && c > b) {
    console.log(`${c}`);
  } else if (
    (a === b) === c ||
    (b === c && b > a) ||
    (a === b && b > c) ||
    (a === c && a > b)
  ) {
    console.log("Pareggio");
  }
}

/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile 'totale'.
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: 'Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€'
   Risolvi una volta con if/else e una volta con ternario.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let tot = 51;

if (tot <= 50) {
  console.log(
    `Totale carrello: ${tot}£ - Spedizione: 9.90£- Totale finale: ${tot + 9.9}£`,
  );
} else {
  console.log(
    `Totale carrello: ${tot}£ - Spedizione: gratuita - Totale finale: ${tot}£`,
  );
}

let totale = 35;

let spedizione = totale >= 50 ? 0 : 9.9;

let totaleFinale = totale + spedizione;

console.log(
  `Totale carrello: ${totale}€ — Spedizione: ${spedizione.toFixed(2)}€ — Totale finale: ${totaleFinale.toFixed(2)}€`,
);

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, 'ciao', true]).
   Con un for + if, per ogni elemento stampa 'x è un numero' o 'x non è un numero'.
*/

const array = [42, "ciao", true];
for (let i = 0; i < 3; i++) {
  if (typeof array[i] == typeof 1) {
    console.log(` ${array[i]} è un numero`);
  } else {
    console.log(` ${array[i]} non è un numero`);
  }
}

/* SCRIVI QUI LA TUA RISPOSTA */
/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numeri = [];

numeri.push(1);
numeri.push(2);
numeri.push(3);
numeri.push(4);
numeri.push(5);

numeri.unshift(0);

console.log(numeri);
console.log(numeri.length);

/* ESERCIZIO 9 — Carrello con splice
   Array ['Penna', 'Quaderno', 'Zaino', 'Astuccio'].
   Con splice: rimuovi 'Quaderno', poi inserisci 'Diario' al suo posto.
   Stampa dopo ogni operazione.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const carrello = ["Penna", "Quaderno", "Zaino", "Astuccio"];
console.log(carrello);

carrello.splice(1, 1);
console.log(carrello);

carrello.splice(1, 0, "Diario");
console.log(carrello);

/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ['Penna', 'Quaderno', 'Zaino'].
   cercato = 'Zaino'.
   Con includes: stampa 'Zaino è in carrello: true'.
   Con indexOf: stampa la posizione, o 'Non in carrello'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = ["Penna", "Quaderno", "Zaino"];
let boolZaino = prodotti.includes("Zaino");

if (boolZaino) {
  console.log(` ${prodotti.indexOf("Zaino")} `);
} else {
  console.log("Non in carrello");
}

/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: 'Mario (25 anni)'.
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let arrayUtenti = [
    { nome: "Mario", eta: 25 },
    { nome: "Luca", eta: 30 },
    { nome: "Anna", eta: 22 }
];

for (let i = 0; i < arrayUtenti.length; i++) {
    console.log(`${ arrayUtenti[i].nome} (${arrayUtenti[i].eta} anni)`);
}

console.table(arrayUtenti);


/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → 'OFFERTA: nome (prezzo€)'
   - disponibile && prezzo >= 10 → 'nome — prezzo€'
   - !disponibile → 'nome — esaurito'
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let prodotti2 = [
    { nome: "Penna", prezzo: 2.50, disponibile: true },
    { nome: "Quaderno", prezzo: 5.90, disponibile: true },
    { nome: "Zaino", prezzo: 25, disponibile: true },
    { nome: "Matita", prezzo: 1.50, disponibile: false }
];

for (let i = 0; i < prodotti2.length; i++) {
    let prodotto = prodotti2[i];

    if (prodotto.disponibile && prodotto.prezzo < 10) {
        console.log(`OFFERTA: ${prodotto.nome} (${prodotto.prezzo}€)`);
    } else if (prodotto.disponibile && prodotto.prezzo >= 10) {
        console.log(`${prodotto.nome} — ${prodotto.prezzo}€`);
    } else if (!prodotto.disponibile) {
        console.log(`${prodotto.nome} — esaurito`);
    }
};


/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array 'inverso', riempilo con un for (dall'ultimo al primo) usando push.
   Stampa 'inverso'.
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
