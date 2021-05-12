// กำหนดที่จะแสดง
function filterArray(arr) {
	var filteredArray = arr.filter(item => typeof item === "number");
	return filteredArray
}	
console.log(filterArray(['5',55]))	