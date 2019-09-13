//// O(n)

function primo(a){
    let r = a*5
    let t = 1
    for (let i=2; i<r;i++){
        if(t<= a){
            if(i % 2 != 0 && t<= a){
                console.log(i)
                t+=1
            }
        }else{break;}
    }
}



//// test code
primo(9)