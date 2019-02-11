//input an array of numbers
//processing: scan the array, counting the even numbers
//output: the number of evens
function countEvens(list) {
	var evens = 0;
	for(var i=0; i<list.length; i++){ // according to the Internet, forEach is 95% slower than looping through
		if(list[i]%2 == 0) {
			evens++;
		}
	}
	return evens;
}

function multiply(list, multiplier) {
	var multiplied = new Array(list.length);
	for(var i=0; i<list.length; i++){
		multiplied[i] = list[i] * multiplier;
	}
	return multiplied;
}

function testFunction() {
	var displayArray;
	var howBigger = Math.floor(Math.random() * 10) + 2; // the multiplier will be between 2 and 12
	var howBig = Math.floor(Math.random() * 50) + 2;  // the test array will contain 2-52 values
	var builtArray = new Array(howBig);
	for (var i=0; i<=howBig; i++) {
		builtArray[i] = Math.floor(Math.random() * 500); // each value will be between 0 and 500
		displayArray += "<br>"+builtArray[i];
	}
	document.getElementById('outputArray').innerHTML = builtArray;	
	document.getElementById('outputEvens').innerHTML = countEvens(builtArray);	
	document.getElementById('multiplier').innerHTML = howBigger;
	document.getElementById('outputMultiplied').innerHTML = multiply(builtArray,howBigger);
}