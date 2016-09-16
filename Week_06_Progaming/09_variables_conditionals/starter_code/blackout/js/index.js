//light status
var myLights = 1;

jQuery(document).ready(function(){

		//on click "light_switch"
	jQuery("#light_switch").on("click",function(){

		// is light turned on?
		if(myLights == 1){
		// turn off if on
		jQuery("body").css("background","black");
		// set background css to black
		// set my lights to 0
		myLights = 0;

		}else{
		//else
		//turn on
		// Set body background to white
		// set my lights to 1

		jQuery("body").css("background","white");

		myLights = 1;
		}

	});


});










