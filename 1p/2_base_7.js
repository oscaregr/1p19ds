console.log ("logaritmo base 7");

function loga (x){
    return Math.log(x)/Math.log(7)
}
function logaritmo(n){
    for (let i = 1; i<=n; i++){
        console.log(`loga( ${i} = ${loga(i)}`)
   }
}


////// logaritmo base 7
//// test code////
logaritmo (5)
