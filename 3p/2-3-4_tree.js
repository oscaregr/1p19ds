class two_three_four{
    constructor(){
        this.tree = [[40,null,null,"|"],
        [20,null,null,"|"],
        [80,null,null,"|"],
        [null,null,null,"|"],
        [null,null,null,"|"]]
        this.p =0
        this.valores = [0,0,0]
        this.re = [null]
    }
    add(x){
        let v = this.valores
        for(let i = 0 ; i< this.tree.length; i++){
            if(rep(x)){
                if(this.tree[0][i] != null ){ //&& i <2
                
                    if (x < this.tree[0][i]){
                        this.p = i+1
                        this.acomo(x)
                        
                    }
                    else if ( x > this.tree[0][i]){
                        this.p = i + 2
                        this.acomo(x)
                        
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
            for(let i = 0; i<=v.length-1; i++){
                if(r != v[i]){
                    t = true
                }else{
                    t = false
                }
            }
            if(t){
                v[v.length] = r
                return true
            }else {return false}
        }
        this.valores = v
    }
    orde(){
        let m = null
        if(this.tree[this.p][1] != null || this.tree[this.p][2] != null){
            for(let i = 0; i<2;i++){
                if(this.tree[this.p][i] > this.tree[this.p][i+1] ){
                m = this.tree[this.p][i]
                this.tree[this.p][i] = this.tree[this.p][i+1]
                this.tree[this.p][i+1] = m
                }

            }
        }
        if(this.tree[this.p][0] != null &&this.tree[this.p][1] != null &&this.tree[this.p][2] != null){
            m = this.tree[this.p][1]
            this.tree[this.p][1] = null
            this.p = 0
            this.acomo(m)
        }

    }
    acomo(x){
        let t = null
        for(let i =0; i<2;i++){
             if(this.tree[this.p][i] === x){
                console.log("ese valor ya esta en el arbol")
                t = false
                break
            }else{t = true}
        }
        if(t){
            for(let i = 0; i<2;i++){
                if(this.tree[this.p][i] === null){
                    this.tree[this.p][i] = x 
                    this.orde()
                }
            }
        }
        
    }
}

(function(){
    let a = new two_three_four()
    a.add(20)
    a.add(80)
    a.add(65)
    a.add(90)
    a.add(10)
    console.log(a.tree)
})()