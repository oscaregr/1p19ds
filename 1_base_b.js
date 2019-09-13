console.log ("logaritmo base b");
let y = 8;
function loga (x){
    return Math.log(x)/Math.log(y);
}
for (let i = 1; i<=10; i++){
     console.log(`loga( ${i} = ${loga(i)}`)
}


///// test code ////
