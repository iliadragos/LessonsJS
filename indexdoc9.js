// function adunare(a, b) {
//     let a1 = 2
//     let a2 = 8

//     return a1 + a2 + a + b
// }

// function scadere(a) {
//     let s1 = 4
//     let s2 = 7

//     return s1 - s2 - a
// }

// function inmultire() {
//     let i1 = 10
//     let i2 = 3

//     return i1 * i2
// }

// function impartire() {
//     let i1 = 20
//     let i2 = 5

//     return i1 / i2
// }
// let f1 = adunare(3, 5) // Se folosesc PARAMETRII !

// console.log(f1)
// let f2 = scadere(2)
// console.log(f2)
// let f3 = inmultire()
// console.log(f3)
// let f4 = impartire()
// console.log(f4)

// function dinamic(a, b) { // FUNCTIE DINAMICA !

//     return a + b
// }
// console.log(dinamic(10, 25))

// let numar1 = 12
// let numar2 = 4

// let numar3 = numar1 + numar2

// console.log(numar3)

// function returneaza() {

//     let numar1_1 = 3
//     let numar2_2 = 5

//     console.log(nuReturneaza())
//     console.log("Salut!")
//     return numar1_1 + numar2_2
// }

// function nuReturneaza() {

//     let numar1_1 = 3
//     let numar2_2 = 5

//     console.log(numar1_1 + numar2_2)
//     if (numar1_1 < numar2_2) {
//         return numar1_1
//     } else if (numar1_1 > numar2_2) {
//         return numar2_2
//     }
//     return undefined
// }

// let valoareFunctie = returneaza()

// console.log(valoareFunctie)


// function adunare(a, b) {
//     const c = returneaza()
//     return a + b + c
// }

// console.log(adunare(3, -2))

// sa se faca un "calculator" din functii precum:
// adunare, scadere, inmultire, ipartire - functii care primesc doi parametrii
// functia main, care va primi 3 parametrii: 2, "+", -4
// functia main va trebui sa apeleze functiile pentru calcul: aduanre, scadere.... pentru operatiile necesare, in functie de parametrul 2 : "+, -, *, /"
// se trimit mai departe la functiile adunare, scadere... ceilalti 2 parametrii: numar1 si numar2

// mesajele de afisare se tin separat de partea logica

//OPERATORI
//aritmetici
// ++, --, +, -, *, /, %
//verificare(relationali)
// ==, >, >=, <, <=, !=
//atribuire
// +=, -=, =, *=, /=, %=
//logici
// &&, ||, !

function plus(x, y) {
    return x + y
}

function minus(x, y) {
    return x - y
}

function inmultire(x, y) {
    return x * y
}

function impartire(x, y) {
    return x / y
}

function main(x, y, z) {
    let rezultat

    if (y == "+") {
        rezultat = plus(x, z)
    } else if (y == "-") {
        rezultat = minus(x, z)
    } else if (y == "*") {
        rezultat = inmultire(x, z)
    } else if (y == "/") {
        rezultat = impartire(x, z)
    }
    console.log(rezultat)

}
main(5, "+", 10)