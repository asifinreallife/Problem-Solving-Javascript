/*
jQuery(document).ready(function(){
	alert("Hi from jQuery!");
});
*/
//jQuery takes document means HTML DOM as parameter
//ready method waits the page to be loaded and inside it we have created an anonymous function
//the above code is written as below

$(function(){
	alert("Hi from jQuery");
});
//so we can use dollar sign and replace the first code like the same code, both code works as same

//now lets see some more function we can create with jQuery
//following codes will create more and more alert boxes
$(function(){
	alert("Hi from jQuery 1");
});
$(function(){
	alert("Hi from jQuery 2");
});
$(function(){
	alert("Hi from jQuery 3");
});