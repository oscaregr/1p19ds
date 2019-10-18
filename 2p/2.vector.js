class Vector{
    constructor(v){
        if(this.distinge(v)){this.vector = v}
       
    }
    distinge(a){
        if (a[1][0] != null ){
            return  "matris"
        }
        return true
    }
    ///Vector
     sum(b){
         
        if(this.distinge(this.vector) && this.distinge(b)){
            if(this.vector.length === b.length){
                let a = new Array(b.length-1)
                for(let i = 0; i<b.length; i++){
                    a[i] = this.vector[i] + b[i]
                }
                return new Vector(a)
            }
        }
     }
    ///Vector 
    subt(b){
        if(this.distinge(this.vector) && this.distinge(b)){
            if(this.vector.length === b.length){
                let a = new Array(b.length-1)
                for(let i = 0; i<b.length; i++){
                    a[i] = this.vector[i] - b[i]
                }
                return new Vector(a)
            }
        }
    }
    ///Vector 
    mul(b){
        if(this.distinge(this.vector) && this.distinge(b)){
            if(this.vector.length === b.length){
                let a = new Array(b.length-1)
                for(let i = 0; i<b.length; i++){
                    a[i] = this.vector[i] * b[i]
                }
                return new Vector(a)

            }
        }
    }
}
const ve = (function(){
    let v = [1,2,3,4]
    let nop = [5,4,7,8]
    vec = new Vector(v)
    console.log("Suma")
    console.log(vec.sum(nop))
    console.log("Resta")
    console.log(vec.subt(nop))
    console.log("Multiplicación")
    console.log(vec.mul(nop))
}) ()
