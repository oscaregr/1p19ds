//// ES O(n)

function MCD (x,y){
    let sobra = 0;
    while (x % y != 0){
        sobra = x%y;
        x = y;
        y=sobra;

    }
    return y;
}



/////test code
MCD (4,2)