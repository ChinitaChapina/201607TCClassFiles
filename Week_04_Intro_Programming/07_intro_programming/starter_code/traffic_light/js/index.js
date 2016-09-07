document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('goButton').onclick = illuminateGreen;
document.getElementById('slowButton').onclick = illuminateYellow;



function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}


function illuminateGreen(){
	clearLights();
	document.getElementById('goLight').style.backgroundColor = "green";

}

function illuminateYellow(){
	clearLights();
	document.getElementById('slowLight').style.backgroundColor = "yellow";

}


function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
}