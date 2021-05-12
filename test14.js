// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

function societyName(friends) {
	var nameArr = friends.map(x => x.split(''));
	var letterArr= "";
	for (i=0; i<nameArr.length; i++){
		letterArr += nameArr[i][0]
	}
	return letterArr	
}
console.log(societyName(['Lek','NAn']))
