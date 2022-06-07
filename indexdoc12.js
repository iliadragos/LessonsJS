// // n = 6 Avem nr natural N, sa se determine suma tuturor elementelor pare pana la N. 
// FIecare nr este un nr natural intreg ! 

function nr(){
    let n = 6
    let sumPare = 0
    for(let i = 0; i <= n; i++){
        if (i % 2 == 0){
            console.log(i)
            sumPare += i 
        }
    }
    console.log(sumPare) 
}
nr()

// se da un numar natural n
// sa determinam suma s=1*2+2*3+3*4+...n*(n+1)

function nr2(){
    let n = 10
    let sum = 0
    for (let i = 1; i <= n; i++){
        sum += i*(i+1)
    }
    console.log(sum)
}
nr2()

// se da un numar natural n
// sa determinam suma s=1*2-2*3+3*4-...+/-n*(n+1)

function nr3(){
    let n = 10
    let sum = 0
    let bool = true
    for(let i = 0; i <= n; i++){
        if (bool){
            sum += i*(i+1)
            bool = false
        } else {
            sum -= i*(i+1)
            bool = true
        }
        console.log(bool)
    }
    console.log(sum)
}
nr3()



