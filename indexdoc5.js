/// String-uri - Tipuri de date , return TEXT ("")
// "\" - indicator care marcheaza text

let text = "Ana are mere.,!?[]"
let text2 = "Ana are mere."
let ultimaPozitie = text.length - 1
// Metode si propr ale string-urilor
console.log(text[12])

console.log(text[ultimaPozitie])
/// .SLICE + parametrii negativi coada la cap si pozitivi cap coada
console.log(text.slice(-10, -5))

console.log(text.substr(3, 3))
// .SUBSTRING nu reprezinta suprascriere, ci se schimba variabila
console.log(text.substring(0, 6))

console.log(text.charAt(0))
// SE APELEAZA METODA PRIN [.] SI ASA SE ARATA TOT PRIN METODA FIRST CHARACTER