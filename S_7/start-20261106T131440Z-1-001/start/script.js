// Mini-libreria — Settimana VII Giorno I
//
// Devi fare 4 cose:
// 1. Definire una classe Libro (titolo, autore, anno, letto)
// 2. Definire una classe LibroDigitale che estende Libro (aggiunge formato, dimensioneMb)
// 3. Aggiungere un listener al form che crea una nuova istanza e la aggiunge all'array
// 4. Renderizzare la lista nel <ul id="lista-libri"> via innerHTML
//
// Bonus: bottone "Segna come letto" su ogni elemento, gestito con event delegation.

const title = document.getElementById("title");
const date = document.getElementById("date");
const author = document.getElementById("author");
const format = document.getElementById("format");
const size = document.getElementById("size");
const sizeBox = document.getElementById("sizeBox");
const btn = document.getElementById("submitBtn");
const form = document.getElementById("form");
const lista = document.getElementById("lista-libri");
const count = document.getElementById("count");
const allBooks = [];

// === Classi ===

class Book {
  constructor(
    _id,
    _title = "noTitle",
    _author = "noAuthor",
    _date = new Date().getFullYear(),
    _read = false,
    _createdAt = Date.now(),
  ) {
    this.id = _id;
    this.title = _title;
    this.author = _author;
    this.date = _date;
    this.read = _read;
    this.createdAt = _createdAt;
    this.format = "cartaceo";
  }
  // testo del badge accanto al titolo
  label() {
    return "cartaceo";
  }
}

class E_book extends Book {
  constructor(_id, _title, _author, _date, _read, _createdAt, _size) {
    super(_id, _title, _author, _date, _read, _createdAt);
    this.format = "digitale";
    this.size = _size;
  }
  label() {
    return this.size ? `digitale (${this.size} MB)` : "digitale";
  }
}

// === Stato (array di libri) ===

// JSON.parse restituisce oggetti semplici, senza i metodi delle classi, quindi mi serve ricreare una copia dai dati salvati.
function rebuildBook(data) {
  if (data.format === "digitale") {
    return new E_book(
      data.id,
      data.title,
      data.author,
      data.date,
      data.read,
      data.createdAt,
      data.size,
    );
  }
  return new Book(
    data.id,
    data.title,
    data.author,
    data.date,
    data.read,
    data.createdAt,
  );
}

function loadBooks() {
  const books = [];
  for (let i = 0; i < localStorage.length; i++) {
    const data = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (data && data.id && data.title !== undefined) {
      books.push(rebuildBook(data));
    }
  }

  // l'ordine delle chiavi di localStorage non è garantito: ordino per inserimento
  return books.sort((a, b) => a.createdAt - b.createdAt);
}

// === Render ===

function renderBook(book) {
  const newLi = document.createElement("li");
  const tag = document.createElement("div");
  const info = document.createElement("div");
  const head = document.createElement("div");
  const h4 = document.createElement("h4");
  const badge = document.createElement("span");
  const meta = document.createElement("small");

  newLi.dataset.id = book.id;

  tag.classList.add(
    "tag",
    "d-flex",
    "justify-content-between",
    "align-items-center",
  );
  if (book.read) tag.classList.add("read");
  head.classList.add("d-flex", "align-items-center", "gap-2");
  h4.classList.add("fw-bold", "fs-6", "mb-0");
  badge.classList.add("badge-format");
  meta.classList.add("text-muted");

  h4.textContent = book.title;
  badge.textContent = book.label();
  meta.textContent = book.date ? `${book.author} — ${book.date}` : book.author;

  head.appendChild(h4);
  head.appendChild(badge);
  info.appendChild(head);
  info.appendChild(meta);
  tag.appendChild(info);

  // a destra: bottone se non letto, scritta se già letto
  if (book.read) {
    const done = document.createElement("span");
    done.classList.add("text-muted");
    done.textContent = "✓ letto";
    tag.appendChild(done);
  } else {
    const readBtn = document.createElement("button");
    readBtn.type = "button";
    readBtn.classList.add("btn", "btn-sm", "btn-outline-dark", "read-btn");
    readBtn.textContent = "Segna come letto";
    tag.appendChild(readBtn);
  }

  newLi.appendChild(tag);
  lista.appendChild(newLi);
}

function updateCount() {
  count.textContent = `(${allBooks.length})`;
}

function renderList() {
  const books = loadBooks();
  lista.replaceChildren();
  allBooks.length = 0;

  books.forEach((book) => {
    allBooks.push(book.id);
    renderBook(book);
  });
  updateCount();
}

// === Eventi ===

// la dimensione serve solo ai libri digitali
function toggleSize() {
  sizeBox.classList.toggle("d-none", format.value !== "1");
}
format.addEventListener("change", toggleSize);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  bookGenerator();
});

function bookGenerator() {
  const id = crypto.randomUUID();
  const bookTitle = title.value.trim() || undefined;
  const bookAuthor = author.value.trim() || undefined;
  const year = date.value ? date.value.slice(0, 4) : undefined;

  let newBook;
  if (format.value === "1") {
    const mb = Number(size.value) > 0 ? Number(size.value) : null;
    newBook = new E_book(
      id,
      bookTitle,
      bookAuthor,
      year,
      false,
      Date.now(),
      mb,
    );
  } else {
    newBook = new Book(id, bookTitle, bookAuthor, year);
  }

  localStorage.setItem(newBook.id, JSON.stringify(newBook));
  allBooks.push(newBook.id);
  renderBook(newBook);
  updateCount();

  form.reset();
  toggleSize();
  console.log(newBook);
}

// event delegation: un solo listener sulla lista per tutti i bottoni "Segna come letto"
lista.addEventListener("click", (e) => {
  const readBtn = e.target.closest(".read-btn");
  if (!readBtn) return;

  const id = readBtn.closest("li").dataset.id;
  const data = JSON.parse(localStorage.getItem(id));
  data.read = true;
  localStorage.setItem(id, JSON.stringify(data));
  renderList();
});

const reset = document.getElementById("resetBtn");
reset.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
  renderList();
});

const log = document.getElementById("logBtn");
log.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(localStorage);
});

renderList();
