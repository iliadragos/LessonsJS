let n = 5
let n1 = 0
let n2 = 1
let sum = 0
// console.log(n1)
// console.log(n2)
for(let i = 0; i < n; i++){
    sum = sum + n1
    console.log(n1)
    let form = n1 + n2
    n1 = n2
    n2 = form
}

console.log(sum)


