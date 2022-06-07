let list =[ 10, 4, 7, 9, -15, -22, 94, 148]
let pare = 0 
let impare = 0


for(let i = 0; i < list.length; i++){
    if (list[i] % 2 == 0){
       console.log(list[i], 'este par')
       pare++
    }
    else {
        console.log(list[i], 'este impar')
    }
}
// bucle repetitive for pt nr impare si pare !...
console.log(pare + ' numere pare')
console.log((list.length - pare) + ' numere impare') // ELSE 


