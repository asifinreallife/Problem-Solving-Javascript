window.onload=function(){
	document.getElementById('clickMe').onclick=runTheExample;
}
function runTheExample(){
	//in HTML <a> means anchor,so anchor HTML is defined in javaScript
	var anchor=document.getElementById('myAnchor');//we have given the Id of the anchor tag "myAnchor",check HTML
    var anchorDestination=anchor.href;//we have assigned the URL of the anchor to a variable named anchorDestination
    alert(anchorDestination);	
	//now lets change the URL of the anchor from this javaScript code
	anchor.href="http://www.bing.com";
	//now if we move the coursor after clicking "clickMe",the anchor tag's element which is Google,u will see that Google's address has been changed to bing
}
