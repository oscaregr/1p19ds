console.log ("logaritmo base b");

function loga (x,y){
    return Math.log(x)/Math.log(y);
}
function logaritmo(n){
    console.log("logaritmo base: " + n)
    for (let i = 1; i<=10; i++){
        console.log(`logaritmo ${i} = ${loga(i,n)}`)
   }
}

///// test code ////

logaritmo(8)