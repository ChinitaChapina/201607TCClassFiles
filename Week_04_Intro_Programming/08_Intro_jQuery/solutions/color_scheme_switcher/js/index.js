
jQuery("#grayButton").on("click",grayScheme);
jQuery("#whiteButton").on("click",whiteScheme);

function grayScheme(){
    jQuery("body").css("background-color","gray");
    jQuery("body").css("color","white");
}

function whiteScheme(){
    jQuery("body").css("background-color","white");
    jQuery("body").css("color","black");
}
