// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
let counter = 0;

const plusEl = document.getElementById("Plus");
const minusEl = document.getElementById("minus");

function IncrementDecrement(inc) {
}



plusEl.addEventListener("click", incrementDecrement(true));
minusEl.addEventListener("click", incrementDecrement(false));
