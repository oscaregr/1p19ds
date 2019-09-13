function factori(a){ ///factorial
    let tot = a;
    a = a-1; 
    for(let i=1; a >= i; a--){
        tot = tot * a;
    }
    return tot;
}
let valor = 1;
//factori (valor);
//< menor
function e_ala_x(x){
    let res = 1;
    for(let i1=1; i1 <= x; i1++){
        res = res + ((Math.pow(x,i1))/ factori(i1));
    }
    return res;
}


/// test code
e_ala_x(1);
