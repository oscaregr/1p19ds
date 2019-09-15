function factorial(fact){
    let resultado = 1;
    for(let i = 1 ; i <= fact ; i++){
        resultado = resultado * i;
    }
    return(resultado);
}

function catalan(n){
    for(let i=0; i<=n;i++){
        console.log("El numero catalan de "+i+" es : "+factorial(i*2)/(factorial(i+1)*factorial(i)))
    }
    
}


////// test code
catalan(9)