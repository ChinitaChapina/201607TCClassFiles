// create a variable to store the score 
var score = 0;


	// on click add5, 
	//add 5 to score
	//update #result

jQuery("#add5").on("click",function(){
	score = score + 5; 
	jQuery("#result").text(score);
});

	// on click add10, 
	//add 10 to score
	//update #result

jQuery("#add10").on("click",function(){
	score = score + 10; 
	jQuery("#result").text(score);
});

	// on click sub1, 
	//sub 1 to score
	//update #result

jQuery("#sub1").on("click",function(){
	score = score - 1; 
	jQuery("#result").text(score);
});

// on click #zero, 
	//zero 1 to score
	//update #result

jQuery("#zero").on("click",function(){
	score = 0; 
	jQuery("#result").text(score);
});

//result is the display 



