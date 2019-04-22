//we will access each memeber of the following class variable
var batwing={
status:"Ready",
rescuebatman:function(){
document.write("transponder ready....initializing....");//now each variables and methods will be accessed from outside by a loop
}
}
var utilities={
printAllMembers:function(targetObject){//by targetObject we will access the member one by one inside batwing
for(i in targetObject){
document.write(targetObject[i]);
document.write("<br/>");
}
}
}
utilities.printAllMembers(batwing);//we are sending batwing as an argument to printAllMembers' anonymous function
//what is exactly happening on the above code??!!
//status and the method rescuebatman are the two members of the batwing variable or lets say a class or collection of a variable
//now we will declare another class in line 8 called utilities and inside that there is a member function name printAllMembers
//printAllMembers receives a parameter called targetObject
//in line 16 we have passed the whole class or collection of batwing as the paramter to printAllMembers
//then we are accessing it by a for in loop
//the neat part is it will access every property including comment of the variable except the name of the variable
//so in above case status and rescuebatman will not be printed but everything inside it will be printed including the comment
//check it by running the program
	