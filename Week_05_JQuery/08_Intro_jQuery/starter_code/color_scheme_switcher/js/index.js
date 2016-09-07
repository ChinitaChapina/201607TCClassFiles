document.getElementById('grayButton').onclick = switchGray;
$("#grayButton").on("click", switchGray);

document.getElementById('whiteButton').onclick = switchWhite;
$("#whiteButton").on("click", switchWhite);

function switchGray() {
//  document.body.style.backgroundColor = 'gray';
 	$("body").css("backgroundColor","gray");

// document.body.style.color = 'white';
	$("body").css("color","white");

}

function switchWhite() {
  //document.body.style.backgroundColor = 'white';
  $("body").css("backgroundColor","white");

  //document.body.style.color = 'black';
  $("body").css("color","black");

}


