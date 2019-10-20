class Vector{
    constructor(v){
        this.vector = v
    }
}
class Factorial{
    constructor(n){
        this.fa= n
        this.res = null
        this.costo = null
        this.vec_suc = []
        this.vec_tabl = []
    }
    value(r = this.fa){
        let c = 0
        for(let i = 0; i <= r; i++){
            this.res = re(i)
            this.vec_suc[i] = this.res
            this.vec_tabl[i]= c 
            this.costo = c
            c=0           
        }
        function re(n){
            c ++
            return n < 2 ? n : n * re(n-1)
        }
        return this.res
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
    let f = new Factorial(6)
    console.log("\n valor")
    console.log(f.value())
    console.log("\n costo")
    console.log(f.cost())
    console.log("\n sucesion")
    console.log(f.succession())
    console.log("\n tabla")
    console.log(f.table())
})()
