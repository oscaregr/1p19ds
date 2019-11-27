/*
constructor(){}
  addVertex(o){}
  addEdge(v1,v2){}
  printGraph(){}
  isComplete(){}//<- boolean
  isMultigraph(){}//<- boolean
  isSubgraph(g){}//<- boolean
}*/
/// class matris
class Grafo{
	constructor(){
	///	this.matris = this.convert(x)
	this.grafo = {}
	}
	
	convert(a){
		
	}

	ligar(n1,n2){
		let v = 0
		for(let a in this.grafo){
			if(n1 === a || n2 === a){v+=1}
				
		}
		if(v===2){
			

			this.grafo[n1].add = "b";
			this.grafo[n2][this.grafo[n2].length] = n1;

		}else{
			return "uno de los nodos no existe"
		}
	}
    vertices_nodos_add(d){
		this.grafo[d]= {}
	}
	
	distinge(){
		let con = 0
		
		for(let i = 0; i< this.matris.length ; i++){
			for(let a = 0; a< this.matris[i].length; a++){
				con += this.matris[i][a]
				}
			if(con === 1 || con === this.matris.length){
				
				return "Multigrafo"
			}
			con = 0
			for(let a = 0; a< this.matris[i].length; a++){
				con += this.matris[a][i]
				}
			if(con === 1 || con === this.matris.length){
				
				return "Multigrafo"
			}
			con = 0
		}
		return "Grafo"
	}
	
	sub_grafo(){
		
	}
	
	grafo_completo(){
		
	}
}

let g = new Grafo()
g.vertices_nodos_add("a")
g.vertices_nodos_add("b")
g.ligar("a","b")