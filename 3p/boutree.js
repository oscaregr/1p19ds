/*constructor()
insert(n)
remove(n)
yours()//traversal
bft()//breadth-first*/

class Node{
    constructor(a){
        this.data =  a
        this.left = null
        this.rigth = null
    }
    
   
}

class Tree{
    constructor(a){
       this.node = new Node(a)
       this.l = 0
       this.m = []
    }
    insert(x){
        let y = this.node
        resul(y)
        function resul(c){  
            if(c != null){
                if(x < c.data){
                    if(c.left != null){
                        resul(c.left)
                    }else{
                        c.left = new Node(x)
                    }
                }else if(x>c.data){
                    if(c.rigth != null){
                        resul(c.rigth)
                    }else{
                        c.rigth = new Node(x)
                    }
                }
          }
        } 

        this.node = y
    }

    remove(a,c = this.node) {
        if(c != null){  
            if(  c.rigth !=null){
             if(c.rigth.data === a ){
                c.rigth =null
                
                return c
            }}else if(c.left != null){
            if(c.left.data === a){
                c.left = null
                
                return c
            }}
            this.remove(a,c.left)
            this.remove(a,c.rigth)
            ///console.log(c.data)
        }
        return
    }

    yours(c=this.node){
        if(c != null){  
            this.yours(c.left)
            this.yours(c.rigth)
            console.log(c.data)
            }
    }
        //traversal
    bft(c=this.node,l=this.l,m=this.m){
        let n = -1
        res(c,l)
        this.l=-1
        niv(c)
        console.log(m)
        function res(c,l){        
            if(c != null){  

                m[l] = new Array
                l++
                res(c.left,l)
            }   
            return
        }
        
        function niv(a=this.node) 
        { 
            if (a != null){
                n++;
                m[n] = m[n] + ", "+ a.data; 
                
                niv(a.left)
                niv(a.rigth)
                
            }
            for(let i=0;i<m.length;i++){
                if(n=== m.length-i){
                    n=m.length-(i+1)
                    break
                } 
            }
            
            return;   
        }
       
    }
    //breadth-first
}

let a = (function(){
    let t = new Tree(10)

    t.insert(8)
    t.insert(5)
    t.insert(7)
    t.insert(4)
    t.insert(6)
    t.insert(1)
   /// console.log(t.node.left.data)
    console.log("grafo")
    t.yours()
    console.log("\n remove")
    t.remove(1)

    t.yours()
    console.log("\n bft")

    t.bft()

    console.log(t.node)
}) ()