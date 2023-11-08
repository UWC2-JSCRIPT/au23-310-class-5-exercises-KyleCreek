// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
let counter = 0;

const plusEl = document.getElementById("plus");
const minusEl = document.getElementById("minus");
const count = document.getElementById("count");
count.innerText = counter;

// Add the Event Listener to plusEl
plusEl.addEventListener('click', () => {
		counter++;
		count.innerText = counter;
});

// Add the Event Listener to MinusEl 
minusEl.addEventListener('click', () => {
	counter--;
	count.innerText = counter;
});
