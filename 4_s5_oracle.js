let a = 2;
let n = 10;
function op1(a1){
    for(let i =0; i <= n; i ++){
        console.log(Math.pow(a1,i))
    }
}
function op2(a2,n2){
    console.log((Math.pow(a2, (n2+1))-1)/(a2-1))
}


//// test code////
console.log("primera forma")
op1(a)
console.log("segunda forma")
op2(a,n)