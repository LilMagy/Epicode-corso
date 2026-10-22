/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/

let usciti = []; // array dei numeri già estratti

/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti
   2. estrai()          — pesca un numero casuale tra i non usciti
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/
function rendiTabellone(n) {
  for (let i = 1; i <= n; i++) {
    let tabellone = document.getElementById("tabellone");
    let newDiv = document.createElement("div");
    newDiv.id = i;
    newDiv.classList = "numero";
    newDiv.textContent = i;
    tabellone.appendChild(newDiv);
  }
}

rendiTabellone(90);
let hDiv = null;

function daUnoALenght(arr) {
  return Math.floor(Math.random() * arr.length) + 1;
}

function estrai(usciti) {
  let n = [];
  for (let i = 1; i <= 90; i++) {
    n.push(i);
  }
  let disponibili = n.filter((n) => !usciti.includes(n));
  console.log(disponibili);

  if (hDiv !== null) {
    let l = usciti.at(-1);
    hDiv.id = l;
    hDiv = null;
  }
  let u = daUnoALenght(disponibili);
  usciti.push(u);
  console.log(usciti);
  let l = usciti.at(-1);
  hDiv = document.getElementById(`${l}`);
  hDiv.id = "ultimo-numero";
}


function reset() {
  usciti = [];
}

let estraiBtn = document.getElementById("estrai");
let resteBtn = document.getElementById("reset");

estraiBtn.addEventListener("click", (event) => {
  estrai(usciti);
});

resteBtn.addEventListener("click", (event) => {
  reset();
});
