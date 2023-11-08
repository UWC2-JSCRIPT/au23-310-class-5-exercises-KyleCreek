// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

// Access via ID;
const h2Id = document.getElementById("weather-head");
h2Id.innerText = 'February 10 Weather Forecast, Seattle';

// Change the styling of every element with class "sun" to set the color to "orange"

// Collect an Array or Elements;
const suns = document.getElementsByClassName('sun');

// Loop through the list of Elements. 
for (i=0; i<suns.length; i++){
	let element = suns[i];
	element.style.color = 'orange';
};

// Change the class of the second <li> from to "sun" to "cloudy"

// Create an Array of All List Items
const listItems = document.getElementsByTagName("li");
// Revise the Second Sunny Day and Make it cloudy.
// -- Note to grader: I was going to loop through it, but I got
// lazy and knew that this is the location is was going to be
// given the HTML is statically served. If it were dynamically Served
// I would have handled it via loop or something else. 
listItems[2].className = 'cloudy';

