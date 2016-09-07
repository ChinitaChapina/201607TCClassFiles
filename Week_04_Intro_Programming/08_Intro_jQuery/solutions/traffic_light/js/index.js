//Implement the red light using jQuery. Don't forget to add the script tags.

jQuery("#stopButton").on("click",function(){
    jQuery(".bulb").css("background-color","black");
    jQuery("#stopLight").css("background-color","red");
});



jQuery("#slowButton").on("click",function(){
    jQuery(".bulb").css("background-color","black");
    jQuery("#slowLight").css("background-color","yellow");
});
jQuery("#goButton").on("click",function(){
    jQuery(".bulb").css("background-color","black");
    jQuery("#goLight").css("background-color","green");



});


jQuery(".thumbnailImage").on("mouseover",function(){
    jQuery("#primaryProductImage").attr("src","images/newimage.jpg");
});