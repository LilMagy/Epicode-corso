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
const btn = document.getElementById("submitBtn");
const form = document.getElementById("form");
const lista = document.getElementById("lista-libri");
const allBooks = [];

// === Classi ===

class Book {
  constructor(
    _id,
    _title = "noTitle",
    _author = "noAuthor",
    _date = date.now,
    _read = false,
    _format,
  ) {
    this.id = _id;
    this.title = _title;
    this.author = _author;
    this.date = _date;
    this.read = _read;
    this.format = _format;
  }
  format() {
    console.log("cartaceo");
  }
}

class E_book extends Book {
  constructor(_id, _title, _author, _date, _read = false, _format) {
    super(_id, _title, _author, _date, _read);
    this.size = _size;
  }
  format() {
    console.log("digitale");
  }
}

// === Stato (array di libri) ===

// === Render ===

//RENDER

function renderList() {
  for (let i = 0; i < localStorage.length; i++) {
    let bookInstance = JSON.parse(localStorage.getItem(localStorage.key(i)));

    const tag = document.createElement("div");
    const h4 = document.createElement("h4");
    const newLi = document.createElement("li");
    console.log(bookInstance);
    console.log(bookInstance.title);
    h4.textContent = bookInstance.title;

    tag.classList.add("tag");
    h4.classList.add("fw-bold");

    tag.appendChild(h4);
    newLi.appendChild(tag);
    lista.appendChild(newLi);
  }
}

// === Eventi ===

btn.addEventListener("click", (e) => {
  e.preventDefault();
  bookGenerator();
});

function bookGenerator() {
  const newBook = new Book(
    crypto.randomUUID(),
    title.value,
    author.value,
    date.value,
    format.value,
  );
  localStorage.setItem(newBook.id, JSON.stringify(newBook));
  allBooks.push(newBook.id);
  const tag = document.createElement("div");
  const h4 = document.createElement("h4");
  const newLi = document.createElement("li");


  h4.textContent = newBook.title;

  tag.classList.add("tag");
  h4.classList.add("fw-bold");


  tag.appendChild(h4);
  newLi.appendChild(tag);
  lista.appendChild(newLi);



  console.log(newBook);
}

const reset = document.getElementById("resetBtn");
reset.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
});

const log = document.getElementById("logBtn");
log.addEventListener("click", (e) => {
  console.log(localStorage);
});

renderList();
