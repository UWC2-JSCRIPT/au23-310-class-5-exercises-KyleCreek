// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

// Access via ID;
const h2Id = document.getElementById("weather-head");
h2Id.innerText = 'February 10 Weather Forecast, Seattle';
console.log(h2Id);
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
// New Array that will only return "Class = Sun";
for (j=0; j< listItems.length; j++){
	let counter = 0;
	if (listItems[j].className === 'sun' && counter === 1){
		listItems[j].className = 'cloudy';
		console.log('changing');
	}
	else if (listItems[j].className === 'sun' && counter != 1){
		counter += 1;
		console.log('sun 1');
	}
	else{
		console.log('pass');
	}
}

console.log(listItems);
