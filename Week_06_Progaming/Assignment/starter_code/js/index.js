//wait for code to load
jQuery(document).ready(function(){
	
	// prevent the submit link to refresh the page
	jQuery('#submit-btn').click(function(e){
    e.preventDefault();

    	//get the value of the #city-type as lower case
    	var cityname = jQuery('#city-type').val();
    	jQuery('#city-type').val('');
    	cityname = cityname.toLowerCase().trim();

			//if user writes austin, tx, or Austin then show the austin.jpg
			//.austin { background-image: url(../images/austin.jpg)
			if (cityname == 'austin' || cityname == 'aus' ) {
      		jQuery('body').attr('class','austin');
      		jQuery('.container p').css('color','#000080');
    		}

			//if not then user writes boston then show boston.jpg
			//.bos {background-image: url(../images/boston.jpg)
			else if (cityname == 'boston' || cityname == 'bos') {
      		jQuery('body').attr('class','bos');
      		jQuery('.container p').css('color','#5BBBB7');
    		}

			//it user writes la, los angeles show la.jpg
			//.la  background-image: url(../images/la.jpg)
			else if (cityname == 'los angeles' || cityname == 'lax' || cityname == 'la') {
      		jQuery('body').attr('class','la');
      		jQuery('.container p').css('color','#BD3632');
    		}

			// if user writes nyc, new york, New York, then show nyc.jpg
			//.nyc {background-image: url(../images/nyc.jpg)
			else if (cityname == 'new york' || cityname == 'nyc' || cityname == 'ny') {
      		jQuery('body').attr('class','nyc');
      		jQuery('.container p').css('color','white');
    		}

			// if user writes sf, San Fran, San Francisco, then show sf.jpg
			//.sf {  background-image: url(../images/sf.jpg)
			else if (cityname == 'san francisco' || cityname == 'san fran' || cityname == 'sf') {
      		jQuery('body').attr('class','sf');
      		jQuery('.container p').css('color','#5BBBB7');
    		}

			//if user writes sydney, Sydney, Australia, then show sydney.jpg
			//.sydney background-image: url(../images/sydney.jpg)*/
			else if (cityname == 'sydney' || cityname == 'syd' || cityname == 'australia') {
      		jQuery('body').attr('class','sydney');
      		jQuery('.container p').css('color','#BD3632');
    		}


	});

});




