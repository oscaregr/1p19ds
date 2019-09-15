function sen_x(x){
    let tota = x
    let cambi = false
    for(let i =3; i <= x; i = i+2){
        if(cambi){
            tota = tota + ((Math.pow(x, i))/factori(i))
            cambi = false
        }else{
            tota = tota - ((Math.pow(x, i))/factori(i))
            cambi = true
        }
    }
    return Math.sin(x)
}

function factori(a){ ///factorial
    let tot = a;
    a = a-1; 
    for(let e=1; a >= e; a--){
        tot = tot * a;
    }
    return tot ;
}

//// test code 
sen_x(8)