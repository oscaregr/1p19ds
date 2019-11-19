class two_three_four{
    constructor(){
        this.tree = [[40,null,null,"|"],
        [null,null,null,"|"],
        [null,null,null,"|"],
        [null,null,null,"|"],
        [null,null,null,"|"]]
        this.p = 1
        this.valores = [0,0,0]
        this.re = [null]
    }
    add(x){
        let v = this.valores
        //let po = 0
        for(let i = 0 ; i< this.tree.length; i++){
            if(rep(x)){
                if(this.tree[0][i] != null ){ //&& i <2
                
                    if (x > this.tree[0][i]){
                        this.p+=1
                        if(this.p === 4){
                            
                            this.acomo(x)
                        }
                    }
                    else {
                       // this.p = i + 2
                        //this.acomo(x)
                       
                        
                        this.acomo(x)
                        break
                        
                    } 
                }
                /*if(this.tree[0][i] != null && i === 2){

                    if (x > this.tree[0][i]){
                        this.p = i+1
                        this.acomo(x)
                    }

                }*/
            }
        }
        function rep (r){
            let t = null
            for(let i = 0; i<v.length; i++){
                if(r != v[i]){
                    t = true
                }else{
                    t = false
                    break
                }
            }
            if(t){
                return true
            }else {return false}
        }
        
    }
    orde(){
        let m = null
        let pi = this.p
        if(this.tree[this.p][1] != null || this.tree[this.p][2] != null || this.tree[this.p][0] != null){
            for(let i = 0; i<2;i++){
                if(this.tree[this.p][i] > this.tree[this.p][i+1] ){
                m = this.tree[this.p][i]
                this.tree[this.p][i] = this.tree[this.p][i+1]
                this.tree[this.p][i+1] = m
                }

            }
            this.p = 1
            //return
        }
        if(this.tree[pi][0] != null && this.tree[pi][1] != null && this.tree[pi][2] != null){
            if(pi != 0){
                m = this.tree[pi][1]
                this.tree[pi][1] = null
                this.p = 0
                this.acomo(m)
                this.reorden(m)
            }
        }

    }
    acomo(x){
        let t = null
        for(let i =0; i<=2;i++){
             if(this.tree[this.p][i] === x){
                console.log("ese valor ya esta en el arbol")
                t = false
                break
            }else{t = true}
        }
        if(t){
            for(let i = 0; i<=2;i++){
                if(this.tree[this.p][i] === null){
                    this.tree[this.p][i] = x 
                    this.valores[this.valores.length] = x
                    this.orde()
                    break
                }
            }
        }
        
    }
    reorden(x){
        let li = this.valores
        li.splice(li.indexOf(x),1)
        li.splice(li.indexOf(x),1)
        this.re = li
        this.valores = [0]
        this.tree[1] = [null,null,null,"|"]
        this.tree[2] = [null,null,null,"|"]
        this.tree[3] = [null,null,null,"|"]
        this.tree[4] = [null,null,null,"|"]
        for(let i = 0; i< this.re.length; i++){
            this.add(this.re[i])
        }
        this.re = [0]
    }
}
 

    let a = new two_three_four()
    a.add(20)
    a.add(80)
    a.add(65)
   // console.log(a.tree)

    a.add(90)
    console.log(a.tree)

    a.add(50)
    
    a.add(30)
    console.log(a.tree)
    
    a.add(35)
    a.add(32)
    console.log(a.tree)
    
    console.log(a.valores)
   // a.reorden()
    console.log(a.tree)