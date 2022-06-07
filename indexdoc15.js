// let vect = [-1, -3, 5, 2, 4, 1]

// function sortare(vect2){
//     for(let i = 0; i < vect2.length; i++){
//         for(let j = i + 1; j < vect2.length; j++){
//             if (vect2[i] > vect2[j]){
//                 let schimbare = vect2[i]
//                 vect2[i] = vect2[j]
//                 vect2[j] = schimbare
//             }
            
//         }
//     }
// return vect2
// }

// function main(vect2){
//     let str = ""
//     for(let e = 0; e < vect2.length; e++){
//         str += vect2[e] + " "  
//     }
// console.log(str)
// }
// main(vect)
// console.log('\n')

// main(sortare(vect))

// function desen(z){
//     let matrice = []
//     for(let i = 0; i < z; i++){
//         let vect = []
//         for(let j = 0; j < z; j++){
//            vect.push("*")
//         }
//     matrice.push(vect)
//     }
// return matrice  
// }

// function main(matrice){
//     let spatiu = ""
//     for(let z = 0; z < matrice.length; z++){
//         let str = ""
//         for(let y = 0; y < matrice[0].length; y++){
//             str += matrice[z][y] + " "
//         }
//     str += spatiu 
//     spatiu += " "

//     console.log(str)
//     }
// }
// main(desen(4))

// TEMA

// * * * *
// o o o o
// * * * *
// o o o o


// o * o *
// * o * o
// o * o *
// * o * o


// o * o *
// o * o *
// o * o *
// o * o *


// o * * *
// * o * *
// * * o *
// * * * o


// * * * o
// * * o *
// * o * *
// o * * * 



// o * * o
// * o o *
// * o o *
// o * * o

// function creare(){
//     let saptiuGol = ""
//     let varA = 4
//     let matrice = []
//     for(let i = 0; i < varA; i++){
//         let vector = []
//         for(let j = 0; j < varA; j++){
//             if (i == j){
//                 vector.push("*")
//             }
//             else {
//                 vector.push("0")
//             }
//         }
//     matrice.push(vector)
//     } 
//  afisare(matrice)
// }
// creare()

// function afisare(matrice){
//     let spatiu = ""
//     for(i = 0; i < matrice.length; i++){
//         let string = ""
//         for(j = 0; j < matrice.length; j++){
//             string += matrice[i][j] + " "
//         }
//     spatiu += " " 
//     console.log(string + spatiu)
//     }
//     console.log("\n")
// }


// function creare2(){
//     let saptiuGol = ""
//     let varA = 4
//     let matrice = []
//     for(let i = 0; i < varA; i++){
//         let vector = []
//         for(let j = 0; j < varA; j++){
//             vector.push()
//             if (i % 2 == 0){
//                 vector.push("*")
//             }
//             else {
//                 vector.push("0")
//             }
//         }
//     matrice.push(vector)
//     } 
//  afisare(matrice)
// }
// creare2()

// function creare3(){
//     let saptiuGol = ""
//     let varA = 4
//     let matrice = []
//     for(let i = 0; i < varA; i++){
//         let vector = []
//         for(let j = 0; j < varA; j++){
//             vector.push()
//             if (i % 2 == 0){
//                 vector.push("*")
//             }
//             else {
//                 vector.push("0")
//             }
//         }
//     matrice.push(vector)
//     } 
//  afisare(matrice)
// }
// creare3()

// function creare4(){
//     let saptiuGol = ""
//     let varA = 4
//     let matrice = []
//     for(let i = 0; i < varA; i++){
//         let vector = []
//         for(let j = 0; j < varA; j++){
//             vector.push()
//             if (i % 2 == 0){
//                 if (j % 2 == 0){
//                     vector.push("0")
//                 }else{
//                     vector.push("#")
//                 }
//             } else {
//                 if(j % 2 == 1){
//                     vector.push("0")
//                 }else{
//                     vector.push("#")
//                 }
                
//             }
            
//         }
//     matrice.push(vector)
//     } 
//  afisare(matrice)
// }
// creare4()

// // 0 # 0 #
// // # 0 # 0
// // 0 # 0 #
// // # 0 # 0

// function creare5(){
//     let saptiuGol = ""
//     let varA = 5
//     let matrice = []
//     for(let i = 0; i < varA; i++){
//         let vector = []
//         for(let j = 0; j < varA; j++){
//             if(i == j){
//                 vector.push("*")
//             }
//              else if ((i+j) % 2 == 0){
//                 vector.push("0")
//             } else {
//                 vector.push("#")
//             }
//         }
//     matrice.push(vector)
//     } 
//  afisare(matrice)
// }
// creare5()

// function creare6(){
//     let saptiuGol = ""
//     let varA = 5
//     let matrice = []
//     for(let i = 0; i < varA; i++){
//         let vector = []
//         for(let j = 0; j < varA; j++){
//             if (i + j == varA - 1 || i == j){
//                 vector.push("?")
//             }else{
//                 vector.push(" ")
//             }
//         }
//     matrice.push(vector)
//     } 
//  afisare(matrice)
// }
// creare6()

// n = 5

// 1 2 3 4 5
// 2 2 3 4 5
// 3 3 3 4 5
// 4 4 4 4 5
// 5 5 5 5 5

function creare1(){
    let n = 5
    let matrice = []
    for(let i = 1; i <= n; i++){
        let vect = []
        for(let j = 1; j <= n; j++){
            if(i >= j){
                vect.push(i)  
            } else {
                vect.push(j)
            }
        }
    matrice.push(vect)
    }
 afisare(matrice)
}
creare1()

function afisare(matrice){
    let spatiu = " "
    for(let i = 0; i < matrice.length; i++){
        let string = ""
        for(let j = 0; j < matrice.length; j++){
            string += matrice[i][j] + " "
        }
    spatiu += " "
    console.log(string + spatiu)
    } 
}


