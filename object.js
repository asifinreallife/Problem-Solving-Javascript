//first we will create a varible name batwing

var batwing={
	status:"Ready",//this status is a variable inside batwing and we have assigned a string inside it calle Ready,it it a member variable
	//see we have use a comma "," operator cause we are gonna declare another member
	//it will be a member function and all the members will be separated by comma
	rescuebatman:function(){//this is another anonymous funciton and a member function inside batwing
               document.write("Locating his transponder.....Initializing....");	
	       }
}

if(batwing.status==="Ready"){
batwing.rescuebatman();
}