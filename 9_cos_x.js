function factori(a){ ///factorial
    let tot = a;
    a = a-1; 
    for(let e=1; a >= e; a--){
        tot = tot * a;
    }
    return tot ;
}

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
    console.log(res)
}

function cos_v(x){
    Math.cos(x)
}


//// test code
cos_v(4)
cos_x(4)