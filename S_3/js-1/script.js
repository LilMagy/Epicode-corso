const arrowFunction = (a, b) => a + b; //return implicito e assenza di graffe se il corpo della funzione è una sola espressione
let a = 1;
let b = 2;
console.log(arrowFunction(a, b));

const obj = {
  count: 10,
  lapse: function() { //i metodi degli oggetti vanno dichiarati come funzioni tradizionali 
    setTimeout(() => {
        this.count++; //this è obj --> in pratica this DENTRO UN ARROW FUNCTION si riferisce sempre alla radice assoluta dello scope; dentro lo scope di una funzione tradizionale this ritorna la funzione 
        console.log(this.count)
    }, 10000); //setTimeout ritarda il log di 10.000 millisecondi = 10sec
  },
};

obj.lapse();


const user = {
userName: "Mario",
age: 30,
};



const {userName, age}= user; // destrurrando l'oggetto in questa dichiarazione le proprietà diventano varibili che posso richiamare liberamente 
console.log(userName, age);

const colori = ["rosso","blu","verde"]; 
const [el1, el2, el3] = colori; // si può fare anche con gli array ma è poco usato
console.log(el1);


const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const numebers3 =[numbers1, numbers2]; // [[1, 2, 3], [4, 5, 6]]
const numebers3 =[...numbers1, ...numbers2]; // [1, 2, 3, 4, 5, 6]


const persona = {nome: "Mario", eta: 30};
const copia = {...persona};