var current = "0"; //display
	memory = "0"; //previous number
	operation = ''; //i.e. * / + -
	MaxLength = 30; //so we don't have infinite numbers
	input = document.querySelector('.steps');

function addDigit(digit){ //adds the number to the display
	if (current.length > MaxLength){
		alert("Number is too long")
	} else if (current === '0' && current.indexOf(".") === -1) { //to prevent loading the zero, and also make sure there is no decimal point
		current = digit; //displays pressed button
	} else {
		current += digit; //must both be strings, so that 6 + 7 = 67, not 13
	}
	while (input.firstChild)
		input.removeChild(input.firstChild);
		input.appendChild(document.createTextNode(current));
	// input.innerHTML = current; Works, but not best practice
} //maybe find an alternative to onclick functions
 
function decimal() { //to handle decimals and make sure there is always a number in front of the decimal
	if (current.length == 0){
		current = "0.";
	} else {
		if (current.indexOf('.') == -1) { //i.e. if . is not there
			current += '.';
		};
	};
	while (input.firstChild)
		input.removeChild(input.firstChild);
		input.appendChild(document.createTextNode(current));
}

function exponent(){ //to handle really big numbers
	if (current.indexOf('e') == -1) {
		current += 'e0';
	}
	while (input.firstChild)
		input.removeChild(input.firstChild);
		input.appendChild(document.createTextNode(current));
}

// function negativeOrPos() { //makes the number negative if you press + and - //THIS NEEDS SORTING OUT
// 		if (current.indexOf('e') != -1){ //if there is an exponent
// 			var exponent = current.indexOf('e-');
// 			if (exponent != -1){
// 				current = current.substring(0, 1 + exponent) + current.substring(2 + exponent);
// 			} else { 
// 				exponent = current.indexOf('e');
// 				current = current.substring(0, 1 + exponent) + '-' + current.substring(1 + exponent);
// 			}
// 		} else { // ie if there is no exponent
// 			if ( current.indexOf('-') == 0){
// 				current = current.substring(1);
// 			} else {
// 				current = '-' + current;
// 			}
// 		}
// }

function clearLast(){
	current = '0';
		while (input.firstChild)
		input.removeChild(input.firstChild);
		input.appendChild(document.createTextNode(current));
}

function clearAll(){
	current = '0';
	memory = '0';
	operation = '';
	while (input.firstChild)
	input.removeChild(input.firstChild);
	input.appendChild(document.createTextNode(current));
}

function Operations(op) { //adds +-*/ Store current in memory, store the operation, clear the display
	operation = op;
	memory = current;
	current = '0';
	while (input.firstChild)
	input.removeChild(input.firstChild);
	input.appendChild(document.createTextNode(current));
}

