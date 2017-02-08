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
	// input.innerHTML = current; Works, but no best practice
} //maybe find an alternative to onclick functions
