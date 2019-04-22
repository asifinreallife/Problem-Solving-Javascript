$(function(){
	//no we will see the example of the namespace
	/*
	//see we have declared a version variable outside of the method but we can access it globally by window
	alert(window.version);//it will display 1.2 though it has been declared outside
*/
/*
//now if we don't use ASIF.version in alert it will show the variable as undefined
//alert(ASIF.version);
*/

alert(ASIF.planet.name);
/*At the very end we should discuss one thing and that is if we declare a property inside of this ready method it does not get global*/
//lets examine it
var number=102;
alert(window.number);//it will not view 102, it will view undefined cause varible inside ready method does not get global

});

/*
//suppose we declare a varible outside of the ready method
var version=1.2;
*/

//to avoid this problem we will declare an object lets name it ASIF and declare all the properties inside  of it

var ASIF={};
ASIF.version=1.2;

//now we can also declare another object under ASIF object lets see how
ASIF.planet={
	id:34,
	name:"Impesta Nox"
	
}
//IMPORTANT NOTE: declaring all properties inside of a single object, this pattern is called singleton pattern,it keeps js from being polluted by other developers