$(function(){
	//first we will see the selectors by the id name
	
	//$('#first').addClass('highlight');//first is the id name of the first paragraph
	
	//now we will see select by HTML tags
	//we will highlight all the paragraph tag
	
	//$("p").addClass("highlight");
	
	//now remeber we have added some class named "chosen" in HTML code now we will select those
	
	//$(".chosen").addClass("highlight");//"." operator is mandatory in front of the class
	
	//now we will see that we can select both by id and class at the same time,lets see how
	
	//$("#first,.chosen").addClass("highlight");
	
	//now we will see contain selectors
	
	/*
	//$('li:contains("Three")').addClass("highlight");
	//note that we need to use single quote at outside and double quote at the inside cause we are passing two values
	//now that we have selected item Three by the last line of the code so we will traverse to its siblings and parents,lets see how
	//$('li:contains("Three")').siblings().addClass("highlight");
    //by the same way as siblings(), there are two others next() and prev() which selects the item nex and previous item of the lastly select
    //$('li:contains("Three")').next().addClass("highlight");//it will select the next item of the Three which is Four
    //$('li:contains("Three")').prev().addClass("highlight");//it will select the previous item of the Three which is Two
*/

//now we will see the parents of the last selected item
 	//$('li:contains("Three")').parent().addClass("highlight");
	//since unordered list ul has no parent so it will highlight all the siblings since it does not know which is the parent
	
	/*
	//now we will select the first child,lets see how
	//$('li:nth-child(1)').addClass("highlight");
	//notice very carefully, we are used with the arrays so we might think this will work as the 0 based index
	//but in this case the first element is the 1 based index
	*/
	
	/*
	//now we will select by the attribute
	//in HTML code we have a name attribute that means we named a paragraph as mysecond now we will select that
	//$('p[name="mysecond"]').addClass("highlight");
	*/
	
	/*
	//now we will see not equal to !=
	//$('p[name!="mysecond"]').addClass("highlight");//this will select first and second para cause it used != opearator
	//$('p').not('[name]').addClass("highlight");
	//above line will search for the tag which has no name attribute in it, that's why we used not
*/
/*
//now we will highlight the header,lets see how
$(":header").addClass("highlight");//since we have one header,it will find the header
*/
/*
//now if you recall that we have left one paragraph empty at the bottom, we will set something inside of it
$('p:empty').text("You were lonely, so I am giving you a text");
//since we have added a text that's why we have used text method
*/

//in list we will now highlight the even parts of the lists
//$("li:even").addClass("highlight");
//it works on a 0 based index so it will mark 0,2,4 etc...
$("li:odd").addClass("highlight");
});