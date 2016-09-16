// on Page Load/Ready

jQuery(document).ready(function(){

	//on click of id="submit"
	jQuery("#submit").on("click",function() {

		// Get value of id="a"
		var a = parseFloat(jQuery("#a").val());

		// Get value of id="b"

		var b = parseFloat(jQuery("#b").val());

		if(a > b){
		// if a > b
			jQuery("#comparison").text(">");
		}else if (a == b){ 
		// if a == b
		jQuery("#comparison").text("=");
		
		}else if (a < b){
		// if b < a
		jQuery("#comparison").text("<");

		}else {
			// not applicable
			jQuery("#comparison").text("N/A");
		}


	});


});



