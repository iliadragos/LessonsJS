// array = vector
// static, nu poti schimba dimensiunea

// OBJECTS = > TIPURI DE DATE PRIMITIVE
// STRUCTURI DE DATE

// CHEIE: VALOARE

// let obiect = {
//     marca: "audi",
//     anFabricatie: 2014,
//     numarUsi: 4
// }

// let array = ["audi", 1014, 4]

// console.log(obiect.marca)
// console.log(obiect["anFabricatie"])

// let vector = ['marca', 'anFabricatie', 'numarUsi']
// for(let i = 0 ; i < vector.length; i ++){
//     console.log(obiect[vector[i]])
// }

// let persoana = {
//     nume: "Ion",
//     prenume: "Andrei",
//     varsta: 30,
//     numeIntreg: function(){
//         return this.nume + " " + this.prenume
//     },
//     parametrii: function(param){
//         console.log(param)
//     }
// }

// persoana.parametrii()
// // se schimba valoarea
// persoana.nume = "Mircea"
// persoana['nume'] = "Marin"

// console.log(persoana.nume)


let persoana={
    nume: 'Stefan',
    prenume: 'Vlad',
    varsta: 30,
    inaltime: '180cm',
    numeComplet: function(){
        return this.nume + ' ' + this.prenume
    },
    varstaInaltime: function(){
        return this.varsta + ' de ani si '  + this.inaltime  + '.'
    },
}
console.log(persoana.numeComplet() + ' si are ' + persoana.varstaInaltime())

let persoana2={
    nume: 'Popa',
    prenume: 'Andreea',
    varsta: 27,
    inaltime: '168cm',
    numeComplet: function(){
        return this.nume + ' ' + this.prenume 
    },
    varstaInaltime: function(){
        return this.varsta + ' ani si ' + this.inaltime + '.'
    },
}
console.log('\n' + persoana2.numeComplet() + ' care are ' + persoana2.varstaInaltime())

console.log('\n' + persoana2.numeComplet() + ' este impreuna cu ' + persoana.numeComplet() + '.')

console.log('Acestia doi au ' + persoana2.varsta + ',respectiv ' + persoana.varsta + ' ani.')

let suma={
    sumaAni: function(){
        return persoana.varsta + persoana2.varsta
    },
}

console.log('\n' + persoana.prenume + ' si ' + persoana2.prenume + ' impreuna adunat, au ' + suma.sumaAni() + ' de ani.')




