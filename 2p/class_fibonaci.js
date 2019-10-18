class Vector{
    constructor(v){
        this.vector = v
    }
}
class Fibonaci{
    constructor(n){
        this.va = n
        this.costo = null
        this.vec_suc = []
        this.vec_tabl = []
    }
    value(n = this.va){
    this.vec_suc[this.costo] = n
    this.costo +=1
    this.vec_tabl[this.costo]= this.costo
    return n < 2 ? n : this.value(n-1) + this.value(n-2);

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
/// test code
const fib = (function(){
    let f = new Fibonaci(10)
    console.log("\n valor")
    console.log(f.value())
    console.log("\n costo")
    console.log(f.cost())
    console.log("\n sucesion")
    console.log(f.succession())
    console.log("\n tabla")
    console.log(f.table())
})()
