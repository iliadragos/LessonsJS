let listaSort = [-2, 4, -5, 6, -1, 0]

function array(x){
    for(let n = 0; n < x.length; n++){
        for(let m = n + 1; m < x.length; m++){
            if (x[n] > x[m]){
                let xSort = x[n]
                x[n] = x[m]
                x[m] = xSort
            }
        }
    }
return x
}
console.log(array(listaSort))

