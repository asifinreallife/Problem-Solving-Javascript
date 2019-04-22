$(function(){
	
	
	/* there migth be some wrong with the commented section code
	$("#clickme").click(function(){
		//now we will use .getJSON method to request data from the webserver,since we don't have webserver we will request data from our hard drive
		$.getJSON("tut17.json",function(data){//in first parameter we gave the file url and second parameter we will fire of another function
		  //the function inside .getJSON is called a call back function
		  //inside the .getJSON method a function is called with a passed parameter called data,which will retrieve the data from tut17.json url
		  //now we will store the value into an array like collection,the value which we will retrieve
		  var items=[];//here is a declaration of array
		  //now we will use jQuery method called each which will iterate through the data in the url
		  //the passed parameter data works as a collection or map comprised of a key and associated value
		  $.each(data, function(key,val){//here we have called another call back function which will search through key and value pair of JSON file
			  items.push('<li id="'+ key+'">'+val+'</li>');
			  //The push method push the value from the last of the array items
			  //we will wrap up the data in html format called list <li> for this we will use key as list id and value will be visible inside the list
			  //look carefully inside items.push()
			  //we have key inside the quote cause id always remains inside the quote in HTML
			  //value will be showed in the HTML page so it remains outside, just remeber the format <li id="">something</li>
			  //just keep in mind the single quote and double quote matter, you just need to remeber this
			  
			  
			  
				  
			  });
			  //now we have got the list in the array,so we will form an unordered list from the list we got to do this lets see how
			  $("<ul/>",{//<ul/> will create the unordered list which is totally new and we can build it from here which is amazing
				  //now by the object literals we will give the property of this unordered list <ul>
				  //it is like giving the ul an id
				  "class":"movie-list",
				  //now we will work with inner HTML and we will join the items we have got from JSON by calling join method
				  html:items.join('')//we will join character by charactr from the item including space so we have used '' with no space in the quotation
		  }).appendTo("body");//where we will add the generated HTML,in this case we want to add it to the body of HTML
		});
	});
		*/
		
	
	
	
	
	
	alert("hi");
	$("#clickme").click(function(){//whenever clickme anchor is clicked it will fire off this function
	
	$.ajax({
		url:'tut17.json',//we are giving here the url of the file in object literals procedure
		dataType:'json',//dataype of the url file must be specified
		success: function(data){//calling an anonymous function with parameter data which indicates the data inside the JSON file
		//after this rest of the code is similar and described above, watch it
			var items=[];
			$.each(data,function(key,val){
				items.push('<li id="'+key+'">'+val+'</li>');
			});
			$('<ul/>',{
				'class':'interest-list',
				html:items.join('')
			}).appendTo('body');
		},
		statusCode:{//if success does not work then it will alert error
			404:function(){//in this case it will not give error cause we are actually loading JSON data from our har drive, there is no server
			//so 404 will technically not work
				alert("server failed");
			}
		}
		
	});
	
	
	
	});
	alert("bye");
	
});