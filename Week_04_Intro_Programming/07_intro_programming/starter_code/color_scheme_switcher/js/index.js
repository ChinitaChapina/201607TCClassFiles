
//functions are re-usable coden - functions cannot start with a number, and do not re use functions 
//that already being used by default  


document.getElementById('grayButton').onclick = setToGrey;
document.getElementById('whiteButton').onclick = setToWhite;

function setToWhite(){
	// Change the body to white
	document.body.style.color = "black";

	/*change the text to black*/
	document.body.style.backgroundColor = "white";

}

function setToGrey(){
	// change body to gray
	document.body.style.backgroundColor = "grey";

	//change text to white
	document.body.style.color = "white";
}



