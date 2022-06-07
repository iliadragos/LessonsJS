let nr  //Nedefinita        //1 Declarare !
console.log(typeof(nr))      

nr = null    //Obiect  
console.log(typeof(nr))      //2 Suprascriere !

nr = 4
console.log(typeof(nr))      //3 Suprascriere !

let nrluna = 1

switch (nrluna){
    case 1:
        console.log("Ianuarie")
        break;
    case 2:
        console.log("Februarie")
        break;
    case 3:
        console.log("Martie")
        break;
    case 4:
        console.log("Aprilie")
        break;
    case 5:
        console.log("Mai")
        break;
    case 6:
        console.log("Iunie")
        break;
    case 7:
        console.log("Iulie")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("Septembrie")
        break;
    case 10:
        console.log("Octombrie")
        break;
    case 11:
        console.log("Noiembrie")
        break;
    case 12:
        console.log("Decembrie")
        break;
    default:
        console.log("Nu exista")
}

if (nrluna == 1){
    console.log("Ian")
}
else if (nrluna == 2){
    console.log("Feb")
}
else if (nrluna == 3){
    console.log("Mar")
}
else if (nrluna == 4){
    console.log("Apr")
}
else if (nrluna == 5){
    console.log("Mai")
}
else if (nrluna == 6){
    console.log("Iun")
}
else if (nrluna == 7){
    console.log("Iul")
}
else if (nrluna == 8){
    console.log("Aug")
}
else if (nrluna == 9){
    console.log("Sep")
}
else if (nrluna == 10){
    console.log("Oct")
}
else if (nrluna == 11){
    console.log("Noi")
}
else if (nrluna == 12){
    console.log("Dec")
} 
else {}
