array =[1,3,4,5,7,3,6,4,12,12,89,7,6,4,7,5]
function cual_repite(re){
	let arr =[]
	let index = 0
	let rep = 0
	let p =0
	for(i=0;i<re.length;i++){
		p = re[i]
		for(n=i+1;n<re.length;n++){
			if(p === re[n]){
				/////re[n].delete
				rep ++
			}
		}
		if(rep > 0 && intro(arr,p)){
			for(t=0;t<=rep;t++){
				arr.push = 0
				arr[index] = p
				index++					
			}		
		}
		rep=0
	}
	return arr
}

function intro(x,y){
	let vali = true
	for(o=0;o<x.length;o++){
		if(y === x[o]){
			vali = false
		}
	}
	return vali
}

///// test code \\\\\
console.log(array)
console.log(cual_repite(array))
    

    