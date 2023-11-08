// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const table = document.getElementsByTagName('tbody')[0];

// add the Event Listener to The table
table.addEventListener('click', e => {
		//onsole.log(e);
		// Capture the X and Y Coordinates. 
		let x = e.clientX;
		let y = e.clientY;
		//console.log(e.target);
		// Obtain the Target 
		let tdObject = e.target;
		tdObject.innerHTML = `${x}, ${y}`

})
// This will remove the Location when I move the mouse from the Area. 
table.addEventListener('mouseout', e => {
		let tdObject = e.target;
		tdObject.innerHTML = '';
})
