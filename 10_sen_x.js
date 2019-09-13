function factori(a){ ///factorial
    let tot = a;
    a = a-1; 
    for(let e=1; a >= e; a--){
        tot = tot * a;
    }
    return tot ;
}
function sen_v(x){
    return Math.sin(x)
}
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

    console.log(tota);
}





//// test code ////
sen_v(8)

