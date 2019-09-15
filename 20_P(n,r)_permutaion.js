////20. P(n,r) = n! / (n-r)!
function factori(a){ ///factorial
    let tot = a;
    a = a-1; 
    for(let i=1; a >= i; a--){
        tot = tot * a;
    }
    return tot;
}
function permu(n,r){
	return factori(n)/factori(n-r)
}

//// test code
console.log(permu(6,3))