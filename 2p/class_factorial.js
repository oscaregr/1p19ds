class Vector{
    constructor(v){
        this.vector = v
    }
}
class Factorial{
    constructor(n){
        this.fa= n
        this.costo = null
        this.vec_suc = []
        this.vec_tabl = []
    }
    value(r = this.fa){
    this.vec_suc[this.costo] = r
    this.costo +=1
    this.vec_tabl[this.costo]= this.costo
    return r < 2 ? r : r * this.value(r-1)
 
    /// factorial
    
    } ///el resultado int
    cost(){
        return this.costo
    } //// el costo para generar el resultado int 
    succession(){
        return new Vector(this.vec_suc)
    } /// Vector
    table(){
        return new Vector(this.vec_tabl)
    }
        ///Vector
}

const fac = (function(){
    let f = new Factorial(10)
    console.log("\n valor")
    console.log(f.value())
    console.log("\n costo")
    console.log(f.cost())
    console.log("\n sucesion")
    console.log(f.succession())
    console.log("\n tabla")
    console.log(f.table())
})()
///f.cost()