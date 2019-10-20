class Vector{
    constructor(v){
        this.vector = v
    }
}
class Fibonaci{
    constructor(n){
        this.va = n
        this.res = null
        this.costo = 0
        this.vec_suc = []
        this.vec_tabl = []
    }
    value(n = this.va){
        let c = 0
        this.costo
        for(let i = 0; i <= n; i++){
            this.res = re(i)
            this.vec_suc[i] = this.res
            this.vec_tabl[i]= c 
            this.costo = c
            c=0           
        }
        function re(r){
            c ++
            return r < 2 ? r : re(r-1) + re(r-2);
        }
        return this.va
        
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
    let f = new Fibonaci(6)
    console.log("\n valor")
    console.log(f.value())
    console.log("\n costo")
    console.log(f.cost())
    console.log("\n sucesion")
    console.log(f.succession())
    console.log("\n tabla")
    console.log(f.table())
})()
