// Overlay (modal) prodotto: si apre al click su una card.
// Richiede Bootstrap 5 JS bundle (bootstrap.bundle.min.js) caricato prima di questo file.

document.addEventListener("DOMContentLoaded", () => {
  // Descrizioni dei prodotti (chiave = titolo della card).
  // In alternativa, aggiungi data-description="..." sull'<article>.
  const descrizioni = {
    "Monitor MasterFlash": "Monitor ad alta frequenza con colori vividi e design sottile.",
    "Occhiali Shade": "Occhiali da sole leggeri con lenti polarizzate e protezione UV400.",
    "Caffettiera Express": "Caffettiera in acciaio, pronta in pochi minuti, facile da pulire.",
  };

  // Crea il modal una sola volta e lo aggiunge al body
  const modalEl = document.createElement("div");
  modalEl.className = "modal fade";
  modalEl.tabIndex = -1;
  modalEl.setAttribute("aria-labelledby", "productModalTitle");
  modalEl.setAttribute("aria-hidden", "true");
  modalEl.innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="productModalTitle"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Chiudi"></button>
        </div>
        <div class="modal-body">
          <div class="bg-secondary bg-opacity-25 rounded mb-3 d-flex align-items-center justify-content-center text-secondary fs-1 fw-bold"
               style="height: 300px">600 × 300</div>
          <p class="modal-description mb-3"></p>
          <p class="modal-price fs-4 fw-bold m-0"></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
          <button type="button" class="btn btn-success btn-add-cart">Aggiungi al carrello</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(modalEl);

  const modal = new bootstrap.Modal(modalEl);
  const titleEl = modalEl.querySelector(".modal-title");
  const descEl = modalEl.querySelector(".modal-description");
  const priceEl = modalEl.querySelector(".modal-price");
  const addBtn = modalEl.querySelector(".btn-add-cart");

  // Apre il modal con i dati della card cliccata
  function apriModal(card) {
    const titolo = card.querySelector("h3").textContent.trim();
    const prezzo = card.querySelector("p").textContent.trim();

    titleEl.textContent = titolo;
    priceEl.textContent = prezzo;
    descEl.textContent =
      card.dataset.description || descrizioni[titolo] || "Nessuna descrizione disponibile.";

    modal.show();
  }

  // Rende cliccabili tutte le card prodotto
  document.querySelectorAll("main article").forEach((card) => {
    card.style.cursor = "pointer";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    card.addEventListener("click", () => apriModal(card));
    // Accessibilità: apertura anche con Invio / Spazio
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        apriModal(card);
      }
    });
  });

  // Azione del bottone "Aggiungi al carrello"
  addBtn.addEventListener("click", () => {
    console.log("Aggiunto al carrello:", titleEl.textContent);
    modal.hide();
  });
});
