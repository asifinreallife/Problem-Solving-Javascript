var planet={
Id:34,
name: "Neptune",//declaring one simple variable and initializing with the name Neptune
faction:{//here we are declaring another object inside the object planet
//so inside an object there is another object and it has also its members
Id:3,
name: "Nex",
notification:function(){
document.write("Nex Alliance....Unite...!!!");
}
},
//now we will declare an array and inside it we will include all the cities name and id of Neptune
//this is how we declare array literals
cities:[
{locationID:16,name:"Vortex"},
{locationID:17,name:"Kortex"},
{locationID:18,name:"Mortex"},
]
};//this semi colon is not mandatory but it is better to use, javascript ignores some semi colons whatever
planet.faction.notification();

//now we will access one element inside the array lets see how, we are going to print it
document.write("<br/>");
document.write("We are showing one city<br/>");
document.write(planet.cities[1].locationID+"  "+planet.cities[1].name);

//we can reference the whole object inside of the variable and access that object trhough that variable
var z=planet;
document.write("<br/>");
document.write(z.name);