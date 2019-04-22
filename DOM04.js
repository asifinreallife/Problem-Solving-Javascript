window.onload=function(){
	document.getElementById('clickMe').onclick=runTheExample;
}
function runTheExample(){
	var myElement=document.getElementById('second');
	alert(myElement.parentNode.nodeName);
	//since the HTML document is parsed like tree, first it will search the parent node by parentNode method then it will show node name by nodeName method
	//in this case 'seond' paragraph's parent node is div 'second' paragraph is the child of the div
	//there are several other methods to work with the nodes of HTML documents,some are given below
	myElement.childNodes[0];//it will be array cause there can be severel childs of a parent node
	myElement.firstChild;//it will look for the first child
	myElement.lastChild;//it will look for the last child
	myElement.nextSibling;//it will look for the immediate next sibling  
	myElement.previousSibling;//it will go back to immediate previous sibling
}