let k = 2;
let t=0;

function op1(){
    for (let i = 1; i<=10; i++){
        t = t + (Math.pow(i, k));
        
   }
   return t;
}

function op2(){
    return (1/(k+1))*Math.pow(10, (k+1));
}


/// test code/
console.log(op1());
console.log(op2());