// let vect = [0, 1, 2, "string", 55]

// for (i = 0; i < vect.length; i++) {
//     console.log(vect[i])
// }
let vect = [1, 3, 5, 6, 5, 5, 10, 12, 1000, 1, -10000]

// function numarDeAparitii(vect, elem) {
//     let nr = 0
//     for (let e = 0; e < vect.length; e++) {
//         if (vect[e] == elem) {
//             nr++
//         }
//     }
//     return nr
// }
// console.log(numarDeAparitii(vect, 5))

// function main() {
//     let vect = [3, 4, 10, 100, 1000, 3]
//     console.log(numarDeAparitii(vect, 3))

// }
// main()

function max(vect) {
    let mx = vect[0]
    for (let i = 0; i < vect.length; i++) {
        if (vect[i] < mx) {
            mx = vect[i]
        }
    }
    return mx
}
console.log(max(vect))

