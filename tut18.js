/*
$(function(){
	//alert("hi");
	function buildACat(){//in this function we will just set and initiate a variable
		var catName="Tuffy";//a variable initialized by a string
		//now we will create another function inside the function
		function catFactory(){
			alert(catName);
		}
		//just look closely instead of calling the function we are just simply returning its value
		return catFactory;//since we are not calling it so we will not need brackets
		//this function will just simply return the reference to the catFactory()
		
	}
	//now we have gone out of the all functions
	$("#buildcat").click(function(){
		var newcat=buildACat();//see buildACat has been called outside of the scope, so it should not work,but it will work
		//it will even work with its properties that is inside of it that means properties are private
		//despite that it will work
		newcat();
		
	)};
	//alert("bye");
});
*/

//the above and the below are same example but there ares some syntax error in above code so i have written the code again
//all the explanations are given in the above code
$(function(){
	function buildACat(){
		var catName="Tuffy";
		function catFactory(){
			alert(catName);
		}
		return catFactory;
	}
	
	$("#buildcat").click(function(){
		var mycat=buildACat();
		mycat();
	});
});

