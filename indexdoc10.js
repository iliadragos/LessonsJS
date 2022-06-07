function estePar(x) {
    if (x % 2 == 0) {
        return true
    }
    return false
}

function afisare(y) {
    if (estePar(y) == true) {
        console.log("Este par")
    } else {
        console.log("Nu este par")
    }

}
afisare(3)

//// EXERCITII CU FUNCTII !!!

function ex1() {
    a = 99
    b = 11
    c = 2 / 2

    return (a / b) * c
}
console.log(ex1())

function ex2(x, y, z) {
    let w = ex1() - 4

    return (x + y + z) / w
}
console.log(ex2(2, 10, 8))

function prim(a, b) {
    if (ex1() < ex2(a, b, b)) {
        console.log("Mai mic !")
    } else if (ex1() > ex2(b, b, a)) {
        console.log("Mai mare!")
    } else {
        console.log("Egal!")
    }

}
prim(2, 3)