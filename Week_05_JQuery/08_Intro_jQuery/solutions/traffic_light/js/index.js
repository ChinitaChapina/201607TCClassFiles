//Implement the red light using jQuery. Don't forget to add the script tags.

$("#stopButton").on("click",function(){
    $(".bulb").css("background-color","black");
    $("#stopLight").css("background-color","red");
});

$("#slowButton").on("click",function(){
    $(".bulb").css("background-color","black");
    $("#slowLight").css("background-color","yellow");
});

$("#goButton").on("click",function(){
    $(".bulb").css("background-color","black");
    $("#goLight").css("background-color","green");
});
