/// ES O(n) 

function fibo(a){
    let x = 0
    let y = 1
    let z = 1

   for(let i = 1; i <= a; i++){
    console.log(z);
    z = x+y;   
    x = y
    y = z;
    
   }
}


//// test code
fibo(4)