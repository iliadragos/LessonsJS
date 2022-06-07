// tipuri de date in JS
// undefined, null, boolean, string, symbol, number, object

// obiect{
//     nume: "George",
//     prenume: "Marin",
//     varsta: 22
// }

// array = [
//     'George', 
//     "marin",
//     22
// ]

//variabile



var nume; // declarare si atribuire la nesfarsit

nume = "George";
console.log(nume);
var nume = "Alin";

console.log(nume);

let prenume; //atribuire la nesfarsit

prenume = "Mihai";
prenume = "George";

const varsta = 23; //declarare si atribuire singulara(o singura data)


let nume1 = 'Fabian';
let nume2 = "Dragos";
var nume3 = "Alex"; 

const nume3 = "Numele 1 este:" + nume1 + ", Numele 2 este: " + nume2; 

const nume4 = `Numele 1 este: ${nume1}, Numele 2 este ${nume2}`; 

let bollean = false;

const persoana = {
        varsta: 27,
        nume: 'Gheorghe',
        prenume: 'Andrei',
        gen: 'male'

}

const persoana2 = [27, "Gheorghe", "Andrei", "male"]
console.log(persoana.nume);
console.log(persoana2[1]);

//operatori

//functii