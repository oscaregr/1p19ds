/// ES O(n)

function MCD (x,y){
    let sobra = 0;
    while (x % y != 0){
        sobra = x%y;
        x = y;
        y=sobra;

    }
    return y;
}

let mcm = function (a, b){ 
    return a*b/MCD(a,b);
}



//// test code
mcm(4,8)