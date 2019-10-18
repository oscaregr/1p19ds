array =[1,3,4,5,7,3,6,4,12,12,89,7,6,4,7,5]
function cuantos_repite(re){
	let intr= false
	let rep = 0
	for(i=0;i<re.length;i++){
		for(n=i+1;n<re.length;n++){
			if(re[i] === re[n]){
				intr = true
			}
		}
		if(intr){
				rep++
				intr= false					
		}
	}
	return rep
}



/// test code
console.log("cuantos numeros se repiten(numeros en cuestion) : " )
console.log(cuantos_repite(array))