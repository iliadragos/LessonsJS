// let array = [1, 23, 34, 56]

// //FOR
// for(let i = 0;i < array.length; i++){
//    console.log(array[i])
// }

// // FOR IN
// for(let i in array){
//    console.log(array[i])
// }

// // FOR OF
// for(let element of array){
//    console.log(element)
// }

// // WHILE
// let i = 0
// while(i < array.length){
//    console.log(array[i])
//    i++
// }

// //DO WHILE
// i = 0
// do{
//    console.log(array[i])
//    i++
// }while(i < array.length)



// let masinaCumparata = false

// while(!masinaCumparata){
//    console.log("Masina nu este cumparata")
//    if(i<5) i++
//    else if (i == 5){
//       masinaCumparata = true
//       console.log("Masina este cumparata")
//    }
// }

// let pare = 0
// for(let i of array){
//    if (i %2 == 0){
//       console.log(i,  " este numar par")
//       pare++
//    } else {
//       console.log(i, " nu este numar par")
//    }
// }

// console.log(pare + " numere sunt numere pare")

// for(let i in array){
//    if (array[i] %2 == 0){
//       console.log(array[i],  " este numar par")
//    } else {
//       console.log(array[i], " nu este numar par")
//    }
// }

// let list = [10, 20, 15, 55, 23, 99]

// for(let i = 0; i<list.length; i++){
//     //console.log(list[i])
// }

// for(let i in list){
//     //console.log(list[i])
// }

// for(let i of list){
//     //console.log(i)
// }
// let i=0
// while(i < list.length){
//     console.log(list[i])
//     i++
// }

// i = 0
// do{
// console.log(list[i])
// i++
// }while(i < list.length)

let newlist = [12, 22, -2, 24, -43, 35, 56, 712]

// sa imi afisezi toate numerele pare pana la primul numar impar

let i = 0
let pare = 0
while(i < newlist.length){
   if (newlist[i] % 2 == 0){
      console.log(newlist[i], " este numar par")
      pare++
   }else{
      i = newlist.length
   }
   i++
}
console.log(pare + " numere pare")

for(i = 0; i < newlist.length; i++){
   if (newlist[i] % 2 == 0){
      console.log(newlist[i], " este numar par")
   } else {
      break
   }
}