/*class Node{
	constructor(a){
		this.data = a
		this.liga = []
	}
}*/
/// class matris
class Grafo{
	constructor(){
	///	this.matris = this.convert(x)
	this.grafo = {}
	this.ma = -1
	this.matris = [[0,1,1,0],[1,0,0,1],[1,0,0,1],[0,1,1,0]]
	///this.d = [[0,1,1,0],[1,0,0,1],[0,0,1,1],[1,1,0,0]]
	}
	
	convert(a=this.grafo){
		for(t in a){

		}
		this.grafo.forEach(function (elemento, indice, array) {
			console.log(elemento, indice);
		});
	}

	ligar(n1,n2){
		let v = 0
		for(let a in this.grafo){
			if(n1 === a || n2 === a){v+=1}
				
		}
		if(v===2){
			/*if(!this.grafo[n1]){
				this.grafo[n1] = [ ]
			}
			if(!this.grafo[n2]){
				this.grafo[n2] = [ ]
			}*/

			this.grafo[n1][this.grafo[n1].length] = n2;
			this.grafo[n2][this.grafo[n2].length] = n1;
			//this.grafo[n2][this.grafo[n2].length] = n1;

		}else{
			return "uno de los nodos no existe"
		}
	}
    vertices_nodos_add(d){
		this.ma+=1
		this.grafo[d]= []
	}
	
	imprime(){
		console.log(this.grafo)
	}


	multigraph(){
		let con = 0
		let iy = false
		for(let i = 0; i< this.matris.length ; i++){
			for(let a = 0; a< this.matris[i].length; a++){
				con += this.matris[i][a]
				}
			if(con === 1 || con === this.matris[i].length){
				
				iy =  true
			}else{iy=false; break}
			con = 0
			for(let a = 0; a< this.matris[i].length; a++){
				con += this.matris[a][i]
				}
			if(con === 1 || con === this.matris[a].length){
				
				iy= true
			}else{iy=false; break}
			con = 0
		}
		console.log(iy)
	}
	
	sub_grafo(){
		
	}
	
	grafo_completo(){
		
	}
	isDirected(ma=this.matris){
		///let ma = this.Matryx
	   if(this.isSquared(ma)){
		   for (let i =1; i<ma.length; i++){
			   if(ma[0][i] != ma[i][0]){
				console.log("false")
				   return 
			   }
		   }
		   for (let i =ma.length -2 ; i>=0; i--){
			   if(ma[ma.length-1][i] != ma[i][ma.length-1]){
				console.log("false")
				   return 
			   }
		   }
		   console.log("true")
			   return 
	   }
	   console.log("false")
	   return 
   }//bool
   isSquared(ma){
	//let ma = this.Matryx
	
	if(ma.length === ma[0].length){
		this.tama = ma.length
		return true;
	}
	return false
	
	}///bool

	/*isIsomorfico(x,y){
		for(let a = 0;a<= a.length;a++){
			for(let b = 0;b<= a[0].length;b++){
				if(x[a][b] != y[a][b]){
					console.log("false")
					return
				}
			}
		}
		
		console.log("true")
	}*/

}
let a = (function(){


let g = new Grafo()
g.vertices_nodos_add("a")
g.vertices_nodos_add("b")
g.vertices_nodos_add("c")
g.vertices_nodos_add("d")
g.vertices_nodos_add("e")
g.ligar("a","b")
g.ligar("a","c")
g.ligar("d","b")
g.ligar("d","e")
g.ligar("e","a")
g.ligar("a","d")
g.imprime()
g.multigraph()
//console.log(a)
g.isDirected()
//console.log(b)



})()

