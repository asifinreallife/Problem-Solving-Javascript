//this is the slightly different way of constructor
//constructor is a kind of a function in javascript which object we can create and we can also send parameters inside that constructor function
//let's see how
function car(make,model,year){
//suppose we have created a function named car which receives theree parameters
this.make=make;//this is a pointer (this concept is not necessary) we are just assigning it to initialize the parameters
this.model=model;
this.year=year;
}
//now we will create the constructor object of the same name
 var myCar=new car("Dodge","Dart",1993);//we have created a car object for the contructor and sending in that three parameters
 //this will receive the parameters and will instantly assign it to the make,model,year respectively
 //we will create another object for car constructor
 var myOtherCar=new car("Mustang","GTX-30",1971);
 alert(myCar.make+" "+myCar.model+" "+myCar.year);
  alert(myOtherCar.make+" "+myOtherCar.model+" "+myOtherCar.year);