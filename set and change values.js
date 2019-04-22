var planet={
Id:34,
name:"Neptune",
faction:{
Id:3,
name:"Nex",
notification:function(){
document.write("Nex Allianve Unite<br/>");
}
},
cities:[
{locationID:16,name:"Vortex"},
{locationID:17,name:"Kortex"},
{locationID:18,name:"Mortex"}
]
};
//now we can set the new value inside the object from outside of the object
//suppose we want to change the name of the planet Neptune to Voltus
document.write(planet.name+"<br/>");
document.write("After Changing<br/>");
planet.name="Voltus";
document.write(planet.name+"<br/>");
//suppose we want to create another propery called defense inside the object planet
//but before that we need to check it by one matching parameter called "undefined", lets see how
if(typeof planet.defense==="undefined"){//typeof checks the defense variable, if it is undefined then add a variable inside it
planet.defense="Cannon Ball";
}
document.write(planet.defense+"<br/>");

//now if we want to check how many members are there in the object planet then we can use for in loop and iterate through all the members

for(member in planet){//member will access each of the property of the planet whether the property is a variable or a function 
document.write(member+" "+planet[member]+"<br/>");
}
//in above for in loop in case u are wondering that member will show 0,1,2.... then u r wrong
//it will show the name of the members
//0 number member is Id so it will not show 0,it will show the Id....that is one f the beauty of the javascript
//it will access the properties of the planet only but it will not access the properties of the faction object and the properties of the cities array