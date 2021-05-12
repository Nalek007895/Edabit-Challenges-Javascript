//หาตัวที่ต้องการหา
function charCount(myChar, str) {
	var count = (str.split(myChar).length-1);
	return (count);	
}
console.log(charCount('k','lekkkkkkkkkkk'))