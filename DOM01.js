window.onload=function(){//created an anonymous function for onload to load the whole page first 
//var clickMeButton=document.getElementById('clickMe');//getElementById gets the Id of the HTML code which is in this case clickMe
//clickMeButton.onclick=runTheExample;//() the braces should not be used while calling a method without parameter in javaScript
//the 2 and 3 no. line code can be written in a single line like this
document.getElementById('clickMe').onclick=runTheExample;
}
//when clickMe button will be pressed it will call the function runTheExample
/*the above 2 and 3 line of the code will not be executed and because of that the rest of the javaScript code will not execute
the reason is when the clickMe Id will be parsed by the document line by line check that clickMe Id is at the very end-
so when that line will not be reached the event or the chunk of the code will not be fired
that is why we need to make sure that whole page is loaded,by that way we will be sure that till the line clickMe is parsed by the DOM 
that is why we need to use window.onload to load the whole page first then the javaScript code will execute
*/
function runTheExample(){
	alert("Running the Example");
}