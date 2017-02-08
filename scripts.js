var current = "0"; //display
	memory = "0"; //previous number
	operation = 0; //i.e. * / + -
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

}