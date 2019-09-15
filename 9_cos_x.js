function cos_x(x){
    let res = 1
    let e = 2
    let v = true
    for(let i=0;i<=x;i++){
        if (v){
            res = res - Math.pow(x,e)/factori(e)
            v = false 
        }else{
            res = res + Math.pow(x,e)/factori(e)
            v = true 
        }
        e=e+2;
    }
    return Math.cos(x)
}
function factori(a){ ///factorial
    let tot = a;
    a = a-1; 
    for(let e=1; a >= e; a--){
        tot = tot * a;
    }
    return tot ;
}

///test code
cos_x(4)