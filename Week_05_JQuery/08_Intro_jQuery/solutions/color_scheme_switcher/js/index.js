
$("#grayButton").on("click",grayScheme);
$("#whiteButton").on("click",whiteScheme);

function grayScheme(){
    $("body").css("background-color","gray");
    $("body").css("color","white");
}

function whiteScheme(){
    $("body").css("background-color","white");
    $("body").css("color","black");
}
