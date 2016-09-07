jQuery(document).ready(function(){ 

var flip = 0;

jQuery (".readmore").click(function () {
	event.preventDefault();	
	jQuery(".readmore").hide();
	jQuery("#show-this-on-click").slideDown();
	jQuery(".readless").show();

	});

jQuery (".readless").click(function () {
	event.preventDefault();	
	jQuery("#show-this-on-click").slideUp( 400, function (){
		jQuery(".readmore").slideDown();
			});
	jQuery(".readless").slideUp();
	});


jQuery (".learnmore").click(function () {
	event.preventDefault();	
	jQuery("#learnmoretext").slideDown();
	jQuery(".learnmore").hide();
	});

})