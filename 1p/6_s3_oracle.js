let n = 10;
let t=0;
function op1(){
    for (let i = 1; i<=n; i++){
        t = t + (Math.pow(i, 2));
        
   }
   return t;
}

function op2(){
    return ((n*(n+1)*(2*n +1))/6);
}



//// test code
console.log("primera forma")
console.log(op1());
console.log("segunda forma")
console.log(op2());