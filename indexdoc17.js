// let string = 'unu'
// let j = string.length - 1
// let estePalindrom = true

// for(let i = 0; i < string.length; i++){
//     if(string[i] != string[j]){
//         estePalindrom = false
//     }
// console.log(string[i], string[j])
// j--
// }

// if(estePalindrom){
//     console.log('Este palindrom')
// } else {
//     console.log('NU este palindrom')
// }




// EXERCITIU TEMA !!!

// sa se afiseze primele n elemente di sirul lui Fibonacci
// Sirul lui Fibonacci: elementul n = suma elementelor de pe pozitiile n-2 si n-1
// primele doua numere sunt 0 si 1
// n = (n-2)+(n-1)
// pentru n = 10
// 0 1 1 2 3 5 8 13 21 34

let n = 10

function fibo(n){
    let contor = [0,1]
    
    for(let i = 2; i < n; i++){
        let n1 = contor[i - 1]
        let n2 = contor[i - 2]
        contor.push(n1 + n2)
        // contor[i] = n1 + n2
        // n1 = n2
        // n2 = contor[i]
    }
 return contor
}
console.log(fibo(n));

// for(let j = 2; j < n; j++){
//     let count = [0,1]
//     n1 = n-1
//     n2 = n-2
//     if (n <= 10){
//         count = n1 + n2
//         n1 = n2
//         n2 = count
//     } 
// }
// console.log(count[n])
