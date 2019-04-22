$(function(){
	//we will create a function which will add a functionality to the image so that whenever we will click on that image score will be counted

	var score=0;//setting a local variable called score which is initiated by the 0
	$("#success").hide();//it will intitially at the start of the page hide the success tag
	$("#startover").addClass("hoverOut");//at the start hoverOut class added by CSS which will indicate mouse has not been dragged there yet
	$('#zombie').click(function(){
		score++;
		$('#score').text(score);//we are sending the updated score to the score id tag on HTML
		//in the same function we will show a paragraph tagged as success and make it fadeout after some time
		$('#success').show('slow').fadeOut(2000); //after 2000 mili second the para will be faded out
	});
	//hover function works when we will put the cursor on the particular html tag which is in this case startover
	/*
	hover method takes two function one for hovering the mouse to particular HTML and other for what will happen after take the mouse cursor away
	and the description example is below
	*/
	$("#startover").hover(function(){
		score=0;//whenever we will bring the cursor to the startover the score will be 0 automatically
		$("#score").text(score);//then we will send and set the score again
		$("#startover").addClass("hoverIn").removeClass("hoverOut");//this time we bring the mouse so we have to remove the hoverOut which we added at the top
	},function(){
		$("#startover").removeClass("hoverIn").addClass("hoverOut");//after taking the cursor away the again we should not forget to add the hoverOut
		//and remove the hoverIn to make it like before 
	});
});