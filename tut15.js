$(function(){
//we have copid the following line of code from the tab API documentation of jquery site
//$( "#tabs" ).tabs();
//suppose we want to add a new tab to our page using above jquery
//it takes around four parameters inside of it
//one for adding,another one is file name which we want to add and other is for give the tab a name
$( "#tabs" ).tabs().tabs("add","tut14.html","Four");
$( "#datepicker" ).datepicker();
});