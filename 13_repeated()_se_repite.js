array = [1,2,3,4,5,6,4,7,9,8,10]

function repite(re){
	let serepite = false;
	for(i=0;i<re.length;i++){
		for(n=i;n<re.length;n++){
			if(re[i]===re[n]){
				serepite = true
				break
			}
		}
	}
	return serepite
	console.log(serepite)
}

///// test of code \\\\\

console.log(array + "\n se repite?")
console.log(repite(array))
