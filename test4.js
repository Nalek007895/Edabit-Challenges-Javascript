
function canNest(arr1, arr2) {
	arr1.sort(function(a,b){return(a - b)});
	arr2.sort(function(a,b){return(a - b)});
	var arr1MinMax = [arr1[0], arr1[arr1.length -1]];
	var arr2MinMax = [arr2[0], arr2[arr2.length -1]];
	if (arr1MinMax[0] > arr2MinMax[0] && arr1MinMax[1] < arr2MinMax[1]){
		return true
	}
	else{
		return false
	}	
}
console.log(canNest([5,5],[1,10]))
console.log(canNest([1,1],[1,2]))