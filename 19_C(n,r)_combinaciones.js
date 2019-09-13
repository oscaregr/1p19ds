////19. C(n,r)  = P(n,r) / r!  
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
function conbi(s,e){
	return permu(s,e)/ factori(e)
}


//// test code
console.log(conbi(5,3))
