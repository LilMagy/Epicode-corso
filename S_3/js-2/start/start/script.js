/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/
const now = new Date();

const formattedDate =
  `${String(now.getDate()).padStart(2, "0")}/` +
  `${String(now.getMonth() + 1).padStart(2, "0")}/` +
  `${String(now.getFullYear()).slice(-2)} ` +
  `${String(now.getHours()).padStart(2, "0")}:` +
  `${String(now.getMinutes()).padStart(2, "0")}`;

const button = document.querySelector("#bottone-aggiungi");
let counter = 0;
button.addEventListener("click", (event) => {
  const input = document.querySelector("#nuovo-task");
  localStorage.setItem(counter, input.value);
  appendListItem();
  counter++;
});

function appendListItem() {
  const ul = document.querySelector("#lista-task");
  const priorita = document.querySelector("#prio-select").value;
  const task = localStorage.getItem(counter);

  const li = document.createElement("li");
  li.classList.add(`priorita-${priorita}`); // colore di sfondo sulla riga

  const testo = document.createElement("span");
  testo.textContent = task;

  const badge = document.createElement("span");
  badge.classList.add("badge"); // solo l'etichetta
  badge.textContent = priorita;

  const data = document.createElement("span");
  data.classList.add("data");
  data.textContent = new Date().toLocaleString("it-IT"); // "20/10/2026, 13:15:17"

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Elimina";
  deleteBtn.addEventListener("click", () => li.remove());

  li.append(testo, badge, data, deleteBtn);
  ul.appendChild(li);
}


//BIN-----------------------------------------------------------------------------------------
const bin = document.querySelector("#bin");
bin.addEventListener("click", (event) => {
  console.log("Carrello svuotato");
  localStorage.clear();
});
