/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- L'array starWarsCharacters è già preparato qui sotto: NON modificarlo a inizio file.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "750",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

/* ESERCIZIO 1 — Estrai i nomi
   Array vuoto "nomi". Con un for, fai push di ogni starWarsCharacters[i].name.
   Stampa "nomi".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nomi = [];
for (let i = 0; i < starWarsCharacters.length; i++) {
  nomi.push(starWarsCharacters[i].name);
  console.log(`${i + 1}: ${nomi[i]}!`);
}

console.log(nomi);
/* ESERCIZIO 2 — Solo i femminili
   Array vuoto "personaggiFemminili". Con un for + if (gender === "female"),
   crea un nuovo oggetto { name, hair_color, eye_color } e fai push.
   Stampa.
*/

const personaggiFemminili = [];

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "female") {
    personaggiFemminili.push({
      name: starWarsCharacters[i].name,
      hair_color: starWarsCharacters[i].hair_color,
      eye_color: starWarsCharacters[i].eye_color,
    });
  }
}
for (const chiave in personaggiFemminili) {
  //for const K in obj scorre tutte le proprietà dell'obj; obj[k] nella stessa iterazione fornisce il valore
  console.log(personaggiFemminili[chiave]);
}
console.log(personaggiFemminili);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3 — Oggetto raggruppamento
   Crea perColoreOcchi con chiavi: blue, yellow, brown, red, blue-gray (con trattino).
   Ognuna con un array vuoto.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const perColoreOcchi = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  "blue-gray": [],
};
console.log(perColoreOcchi);
/* ESERCIZIO 4 — Raggruppa per colore degli occhi
   For su starWarsCharacters + switch (character.eye_color).
   In ogni case fai push del personaggio nell'array giusto. Ricorda break.
   Stampa perColoreOcchi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let i = 0; i < starWarsCharacters.length; i++) {
  let c = starWarsCharacters[i];

  switch (c.eye_color) {
    case "blue":
      perColoreOcchi.blue.push(c);
      break;
    case "yellow":
      perColoreOcchi.yellow.push(c);
      break;
    case "brown":
      perColoreOcchi.brown.push(c);
      break;
    case "red":
      perColoreOcchi.red.push(c);
      break;
    case "blue-gray":
      perColoreOcchi["blue-gray"].push(c);
      break;
  }
}

console.log(perColoreOcchi);

/* ESERCIZIO 5 — Massa totale dell'equipaggio (while)
   i = 0, massaTot = 0.
   While: somma Number(starWarsCharacters[i].mass).
   Stampa la massa totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let i = 0;
let massaTot = 0;
while (i < starWarsCharacters.length) {
  massaTot = massaTot + Number(starWarsCharacters[i].mass);
  i++;
}
console.log(massaTot);
/* ESERCIZIO 6 — Classifica il carico
   Su massaTot, switch (true) o if/else if:
   < 500            → "Carico leggero"
   500 – 700        → "Carico medio"
   700 – 900        → "Attenzione: oltre 700"
   900 – 1000       → "Carico critico"
   > 1000           → "PERICOLO: sovraccarico"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let messaggio;

switch (true) {
  case massaTot < 500:
    messaggio = "Carico leggero";
    break;
  case massaTot <= 700:
    messaggio = "Carico medio";
    break;
  case massaTot <= 900:
    messaggio = "Attenzione: oltre 700";
    break;
  case massaTot <= 1000:
    messaggio = "Carico critico";
    break;
  default:
    messaggio = "PERICOLO: sovraccarico";
}

console.log(messaggio);

/* ESERCIZIO 7 — Robotizza i n/a
   For: per ogni personaggio con gender === "n/a", cambialo in "robot".
   Stampa l'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 0; i < starWarsCharacters.length; i++) {
  let c = starWarsCharacters[i];
  if (c.gender === "n/a") {
    c.gender = "robot";
  }
}
console.log(starWarsCharacters);

/* ESERCIZIO 8 — Più alto e più basso
   For su starWarsCharacters. Trova il personaggio con altezza maggiore e quello con altezza minore.
   L'altezza è una stringa: convertila con Number().
   Stampa: "Più alto: Darth Vader (202 cm)" e "Più basso: ...".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const heightOrder = [];
for (let i = 0; i < starWarsCharacters.length; i++) {
  let c = starWarsCharacters[i];
  heightOrder.push([c.name, Number(c.height)]);
}

heightOrder.sort((a, b) => b[1] - a[1]); //funzione di compilazione: "per paragonare due elementi esegui questo". Altrimenti sort converte in stringhe e ordina per lunghezza. In questo caso comunico alla funzione sort di paragonare due elementi (entrambi array di lenght 2) con una sottrazione tra i propri elementi di indice 1. In questo modo dovrebbe ordinare l'array di array solo in base alle cifre contenute negli array innestati e in ordine decrescente

let tallBoy= heightOrder[0];
let shortBoy= heightOrder.at(-1);
console.log(`${tallBoy[0]} (${tallBoy[1]}cm) è il più alto`);
console.log(`${shortBoy[0]} (${shortBoy[1]}cm) è il più basso`);


/* ESERCIZIO 9 — Rimuovi i femminili dai nomi (cicli annidati)
   Sull'array "nomi" dell'esercizio 1: for esterno su nomi, for interno su personaggiFemminili.
   Quando combaciano per nome, rimuovi quel nome da nomi con splice.
   Stampa lunghezza prima e dopo.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Lunghezza prima:", nomi.length);

for (let i = 0; i < nomi.length; i++) {
  for (let j = 0; j < personaggiFemminili.length; j++) {
    if (nomi[i] === personaggiFemminili[j].name) {
      nomi.splice(i, 1);
      i--; // compenso lo scorrimento degli elementi dopo lo splice
      break; // esco dal ciclo interno: questo nome è già stato rimosso
    }
  }
}

console.log("Lunghezza dopo:", nomi.length);


/* ESERCIZIO 10 — Personaggio casuale
   indice = Math.floor(Math.random() * starWarsCharacters.length)
   personaggio = starWarsCharacters[indice]
   if/else su gender per stampare "Lei è alta X cm" o "Lui è alto X cm".
   if su hair_color !== "n/a" && hair_color !== "none": stampa "Capelli: X" o "Senza capelli".
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const indice = Math.floor(Math.random() * starWarsCharacters.length);
const personaggio = starWarsCharacters[indice];

console.log(personaggio.name);

if (personaggio.gender === "female") {
  console.log(`Lei è alta ${personaggio.height} cm`);
} else {
  console.log(`Lui è alto ${personaggio.height} cm`);
}

if (personaggio.hair_color !== "n/a" && personaggio.hair_color !== "none") {
  console.log(`Capelli: ${personaggio.hair_color}`);
} else {
  console.log("Senza capelli");
}


/* --EXTRA-- ESERCIZIO 11 — Conta per colore di occhi
   For...in sulle chiavi di perColoreOcchi.
   Stampa: "blue: 4 personaggi", "yellow: 2 personaggi", ecc.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
