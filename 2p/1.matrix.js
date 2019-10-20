/*1.
Matrix   ya que do
---------
---------
 constructor(r,c)//all-zero
 initRandom()/// lo que dios venga a llenar
Vector getRow(r)
Vector getCol(c)
bool isSquared()
bool isSymmetric()
bool isIdentity()      
*/

class Vector{
    constructor(a){
        this.vector =a
    }   
}

class Matris{
    constructor(f,c){
        this._fila = f
        this._columna = c
        this.Matryx =  this.initRandom() 
        
    }
    
   /* distinge(a){
        if (a[1][0] != null ){
            return  true
        }
        return "No es matris"
    }*/
    
    initRandom(){
        this.Matryx = []
        for(let i=0;i<this._fila;i++){
            this.Matryx[i] = new Array(this._fila)
            for(let a=0;a<this._columna;a++){
                this.Matryx[i][a] = Math.random()
            }
        }
        return this.Matryx
    }
    getRow(a){
         if(this.Matryx[a] != null){
               let v = []
             for(let i =0; i < this.Matryx[a].length; i++){
                v[i] = this.Matryx[a][i]
             }
             return new Vector(v)
         }
         return "Fila no existente/valida"

    } ///vecto
        
    getCol(a){
        if(this.Matryx[0][a] != null){
            let v = []
          for(let i =0; i < this.Matryx[a].length; i++){
             v[i] = this.Matryx[i][a]
          }
          return new Vector(v)
      }
      return "Fila no existente/valida"
    } ///vector
        
    isSquared(){
        let ma = this.Matryx
        
        if(ma.length === ma[0].length){
            this.tama = ma.length
            return true;
        }
        return false
        
    }///bool

    isSimmetric(){
         let ma = this.Matryx
        if(this.isSquared(ma)){
            for (let i =1; i<ma.length; i++){
                if(ma[0][i] != ma[i][0]){
                 
                    return false
                }
            }
            for (let i =ma.length -2 ; i>=0; i--){
                if(ma[ma.length-1][i] != ma[i][ma.length-1]){
                    
                    return false
                }
            }
                return true
        }
        return false
    }//bool

    isIdentity(){
        let ma = this.Matryx
        if( this.isSquared(ma)){
            for (let i =1; i< ma.length; i++){
                if((ma[0][i] != 0) || (ma[i][0] != 0)){
                    return false
                }
            }
            for (let i = ma.length -2 ; i>=0; i--){
                if((ma[ma.length-1][i] != 0) || (ma[i][ma.length-1] != 0)){   
                    return false
                }
            }
            for(let i =0; i< ma.length; i++){
                if(ma[i][i] != 1){
                    return false
                }
            }
            return true
        }
        return false

        //// debe cumplir que es cuadrada y
        ////si solamente la diagonal prinsipal esta en 1 y todos los demas es 0
    }///bool


}
const mat = (function(){
    /// test code 
    console.log("\n ***** valores random *****") 
    const matris = new Matris(4,4)
    console.log(matris.Matryx)
    console.log("\n obtener columna")
    console.log(matris.getCol(1))
    console.log("\n obtener fila")
    console.log(matris.getRow(2))
    console.log("\n is Squared?")
    console.log(matris.isSquared())
    console.log("\n is Simmetric?")
    console.log(matris.isSimmetric())
    console.log("\n is Identity?")
    console.log(matris.isIdentity())
    console.log("\n \n ***** valores fijos *****")
    matris.Matryx = [[1,0,0],[0,1,0],[0,0,1]];
    console.log(matris.Matryx)
    console.log("\n obtener columna")
    console.log(matris.getCol(1))
    console.log("\n obtener fila")
    console.log(matris.getRow(2))
    console.log("\n is Squared?")
    console.log(matris.isSquared())
    console.log("\n is Simmetric?")
    console.log(matris.isSimmetric())
    console.log("\n is Identity?")
    console.log(matris.isIdentity())    
})() 


