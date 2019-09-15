//Node.js 6.5
//Plain Javascript and Node.js is supported
// html/css is not supported he
array = [1,2,3,4,5,6,7,9,8,10]

function menor(a){
	let m = a[0]
	for(i=0;i<a.length -1;i++){
		if(a[i]<m){
			m=a[i]
		}
	}
	return m
}

function ordenado(arr){
	let first = (menor(arr))
	let order = true
	for(i=0;i<arr.length -1;i++){
		if(arr[i] < first){
			order = false;
			break;
		}
		first = arr[i];
	}
	return order;
}

///// test of code \\\\\
console.log(array)
console.log("Esta ordenado? ")
console.log(ordenado(array))
