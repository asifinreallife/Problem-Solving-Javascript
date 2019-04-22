//now we will see that by javaScript we can access the DOM element and HTML nodes and we can change those with javaScript

window.onload=function(){
	document.getElementById('clickMe').onclick=runTheExample;//to see what this line does see DOM01
}

function runTheExample(){
	var myElement=document.getElementById('second');//there is a paragraph in HTML which Id is second
	//now we will see what is that thing whether that element is a paragraph or head or body or what??!!
	var myNodeName=myElement.nodeName;//nodeName is a method returns the type of the node,in this case it will return <p>
	alert(myNodeName);
	//now lets say we want to see what is the element inside the second paragraph <p>,we can also do that by javaScript
if(myElement!=null){//it will check whether the paragraph has any element inside it
alert(myElement.innerHTML);//innerHTML will be used to see the element inside the HTML tags
//it is highly recommended that innerHTML should not be used, cause it is not the proper way to see the element
}	
}
/* so at the above code first it will be shown to type od the element or node or tag in this case it is paragraph <p>
then the element inside that paragraph will be shown*/