// let string = 'AbCDefghij01s*/%r4,?.'

// let char = 0
// let num = 0

// for(let i = 0; i < string.length; i++){
//     if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90 || string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
//         char ++ 
//     }
//     else if(string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57){
//         num ++
//     }
// }

// console.log('Avem ' + char + ' litere, ' + num + ' cifre si ' + (string.length - (char + num)) + ' simboluri. ')


// let string2 = 'aivkmlzupomioel234lmepoh'

// let vocale = 'aeiou'
// let nrv = 0
// let cons = 0

// for(let i = 0; i < string2.length; i++){
//     if(vocale.includes(string2[i])){
//         nrv ++
//     } else if(string2.charCodeAt(i) >= 65 && string2.charCodeAt(i) <= 90 || string2.charCodeAt(i) >= 97 && string2.charCodeAt(i) <= 122 ){
//         cons ++
//     }
// }
// console.log('\n' + 'Sunt ' + nrv + ' vocale.')

// console.log('Sunt ' + cons + ' consoane.')

// METODE: 
//  !!!!!!!!!!  charCodeAt (text -> numar ASCII) ; String.fromCharCode (Numar 'ascii' -> caracter)


let text = 'abDerFFG012.;'

function ascii(){
    let string = ""
    for (let i = 0; i < text.length; i++){
        if(text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90){
            let codAscii = text.charCodeAt(i)
            string += String.fromCharCode(97 + (codAscii - 65))
        }
        else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122){
            let codAscii = text.charCodeAt(i)
            string += String.fromCharCode(65 + (codAscii - 97))
        } else {
            string += text[i]
        }
    }
return string
}
console.log(ascii())

