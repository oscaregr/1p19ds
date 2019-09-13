function factori(a){ ///factorial
    let tot = a;
    a = a-1; 
    for(let i=1; a >= i; a--){
        tot = tot * a;
    }
    return tot;
}

///// test code 
factori(8)