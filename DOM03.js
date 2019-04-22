//now we will change the element inside the HTML code by using inner HTML
//and this will happend after loading the page we will click the button and fire up an event and it will change the inside element of HTML
//lets see how
window.onload=function(){
	document.getElementById('clickMe').onclick=runTheExample;
}
function runTheExample(){
	document.getElementById('second').innerHTML="After Clicking the element will be changed";
	//by innerHTML we have changed the element of the HTML tags after the page has loaded
	//now at the same time we want to see how many paragraphs are in our HTML code,we can also see that,lets see how
	var listOfParagraphs=document.getElementsByTagName('p');//getElementsByTagName will search document by tags
	//and tags can be anything <head>,<body>....that's why we have mentioned 'p',that means search only paragraph tag
	alert(listOfParagraphs.length);//length method resuturns the number
	//now lets say we want to see what is inside the second paragraph
	//listOfParagraphs is working like an array it has stored all the elements of all paragraphs inside it,so we can use it like an array
	var secondParagraph=listOfParagraphs[1];//0 means first index so 0,1,2.....
	alert(secondParagraph.innerHTML);//it will show the inside element of the second paragraph <p>
}