//now we will manipulate the HTML with jQuery lets see how
//first we will manipulate the title part of the HTML
$(function(){
	$("#title").text("See,Now I am at the Title of the HTML");
	//by # sign we probably mean that we want to access in the tags
	//since we will change the text inside that's why we will use the method text()
	//lets now access into the first paragraph and manipulate it
	/*$("#first").html("<h2>Great Quotes</h2>");*/
	//since we will insert an element into html that's why we have used html() method and inside it we have passed a header
	//now we will add something before the first paragraph
	$("#first").prepend("<h2>Great Quotes</h2>");
	//after that we will add something after second paragraph
	$("#second").append("<h2>Life is beautiful</h2>");
	
	//append and prepend work outside of the given selection
	//before,after,insertBefore,insertAfter work outside of the given selection
	//now we will manipulate the anchor tag and add the web address
	$("#myAnchor").attr("href","http://www.xnxx.com");
	//to see the result of the above line just move the cursor to the link and the original and given link will pop up from the below of the browser
	
	//we have created a CSS file called tut12 and now we will add the file to the webpage as class
	//we will add it as title,since title is already created in html, we will use the CSS to design the title which is created in HTML
	$("#title").addClass("standout");//standout is not the file name, it is the type of CSS we are using.
});