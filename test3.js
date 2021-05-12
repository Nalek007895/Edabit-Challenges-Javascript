//หาค่าน้อย มาก 

function minMax(arr) {
	arr.sort(function(a, b){return(a - b)})
	return [arr[0], arr[arr.length - 1]]
	
}
console.log(minMax([11,1,5,66,49]))