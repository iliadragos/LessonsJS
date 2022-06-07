// VECTORI => ARRAY [1, 4, 6, 8]
// MATRICI => 2D ARRAYS 
// let vector = [[1, 4, 6, 8], [1, 4, 6, 8], [1, 4, 6, 8], [1, 4, 6, 8]]
// for(let i = 0 ; i < vector.length; i ++){
//     for(let j = 0; j< vector.length; j++){
//         console.log(vector[i][j])
//     }    
// }

// function v(n){
//     let list = []
//     for(let i = 0; i <= n; i++){
//         list.push(i)
//     }
//  return list
// }

// function main(n){
//     let v2 = v(n)
//     for(let i = 0; i < v2.length; i++){
//         console.log(v2[i])
//     }
// }
// main(10)

// function v(n){
//     let list = []
//     let nr = 1
//     for(let i = 1; i <= n; i++){
//         let list2 = []

//         for(let e = 1; e <= n; e++){
//             list2.push(nr)
//             nr++
//         }
//     list.push(list2)
//     }
//  return list
// }

// function main(n){
//     let v2 = v(n)
//     for(let i = 0; i < v2.length; i++){
//         console.log(v2[i])
//     }
//  console.log(v(n))
// }
// main(10)


// Se da un numar natural n care determina lungimea atat pe linii cat si pe coloane a unei matrici patratice. Sa se adauge n x n elemente, doar numere pare, in matrice

// n = 5

// 0  2  4  6  8
// 10 12 14 16 18
// 20 22 24 26 28
// 30 32 34 36 38
// 40 42 44 46 48

function one(n){
    let lista = []

    for(let i = 0; i < n; i++){
        let lista2 = []
        let numar = n * 2
        for(let z = i * numar; z < i * numar + numar; z++){
            if(z % 2 == 0){
                lista2.push(z)
            }
        }
     lista.push(lista2)
    }
return lista
}
console.log(one(6))

