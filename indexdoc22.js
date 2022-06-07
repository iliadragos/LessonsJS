// // # - ID   . - CLASA

// let btn2 = document.querySelector("#btn2")

// let input = document.querySelector("#input")

// btn2.addEventListener("click", button1)

// // button1 = () => {    ( ARROW FUNCTION )
// //     console.log("Primul buton.")
// // }

// let bool = false

// function button1(){
//     if (bool){
//         bool = false
//         input.type = "text"
//     } else {
//         bool = true
//         input.type = "password"
//     }
// }


// input.addEventListener("keyup", function first(){
//     console.log(this.value)
// })

// MINIM 8 CARACTERE
// cate litere mari, mici, cifre si simboluri exista in parola, cand apesi pe buton
// 65-90 upper | 97-122 lower | 48-57 num

let button = document.querySelector("#btn2")
let button2 = document.querySelector("#btn1")
let button3 = document.querySelector("#btn3")

let input1 = document.querySelector("#input")
let input2 = document.querySelector("#input2")

let color = document.querySelectorAll(".color")
let brown = document.querySelector(".brown")

console.log(brown.classList)
console.log(button2.classList)

button3.addEventListener("click", function(){
    let bool = false
    if(bool){
        bool = false
        input2.type = "checkbox"
    } else {
        bool = true
        input2.type = "radio"
    }
})

button2.addEventListener("click", function(){
    alert("NOT FUNCTIONAL, BUT CHECK THE CHANGES !!!")
    input2.type = "checkbox"
    button2.classList.add(brown.classList)
})

function css(input){
    if(letters(input) && input.length >= 8){
        if(input.length >= 12) return 2
        return 1
    }
return 0
}

input1.addEventListener("keyup", function(){
    let colors = ["red", "yellow", "green"]
    for(i = 0; i < color.length; i++){
        if(i > css(this.value) || this.value.length == 0){
            color[i].style = ""
        } else {
            color[i].style = `background-color: ${colors[css(this.value)]};`
        }
    }
})

button.addEventListener("click", function(){
    if(letters(input1.value)){
        console.log("OK")
    } else {
        console.log("NOT OK")
    }
})

input.addEventListener("keyup", function(){
    console.log(this.value)
})

function letters(password){
    let upper = 0
    let lower = 0
    let num = 0
    let sym = 0

    for(let i = 0; i < password.length; i++){
        if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90){
            upper++
        } else if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122){
            lower++
        } else if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
            num++
        } else {
            sym++
        }
    }
    if(upper != 0 && lower != 0 && num!= 0 && sym != 0){
        return true 
    }
    return false
}















