let bin = 17

let x = ""
let rev = ""
while(parseInt(bin) != 0){
    x += parseInt(bin) % 2
    bin = parseInt(bin) / 2
}

for(j = x.length; j < 8; j++){
    x += 0
}

for(let i = x.length - 1; i >= 0; i--){
    rev += x[i]
}
console.log(rev)





function main(){
    let string = "Mama are mere."
    console.log(ascii(string))
}
main()

function ascii(string){
    let golA = ""
    for(let i = 0; i < string.length; i++){
        golA += binary(string.charCodeAt(i)) + " "
    }
return golA
}

function binary(ascii){
    let golB = ""
    while(parseInt(ascii) != 0){
        golB += parseInt(ascii) % 2
        ascii = parseInt(ascii) / 2
    }
return reverse(byte(golB))
}

function reverse(golB){
    let rev = ""
    for (let i = golB.length - 1; i >= 0; i--){
        rev += golB[i]
    }
return rev
}

function byte(rev){
    let oct = rev
    for(i = rev.length; i < 8; i++){
        oct += 0
    }
return oct
}