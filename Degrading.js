$(function(){
	//reminder: run this code in Internet Explorer so that you can block and on the javascript content easily
	
	
	//after main paragraph we will insert an image through jquery, a plus image
	
	$("#main").append("<img src='plus.png' alt='Click me to see the paragraph' id='clickMe'/>");
	//then inside of the image tagged clickMe we will toggle a function
	//toggle is a function that works between two states on and off so you need two functions
//this code will not work cause toggle was cancelled after 1.7 jquery library function
	$("#clickMe").toggle(function(){
		$("#message").show('fast');
		$("#clickMe").attr("src","minus.png");
	}, function(){
		$("#message").hide("slow");
		$("#clickMe").attr("src","plus.png");
	});
	$("#message").hide();//so if js allowed it will hide the paragraph tagged message by default
});

//we will show the message tagged paragraph by clicking the plus sign
//after clicking we will change the image of the click me with the minus image saved in the folder
//now this function is the opposite state of the toggle so when we will switch off again the state will be with plus sign
//it will slowly hide the message after clicking the minus sign
//again it will bring back the plus stage