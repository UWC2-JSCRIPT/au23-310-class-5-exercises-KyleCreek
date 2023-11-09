// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
const moreInfo = document.getElementById('more-info');
moreInfo.addEventListener("click", (e) =>{
  e.preventDefault();
  alert("Here's some information");
});

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const barkButton = document.getElementById('dog');
barkButton.addEventListener("click", (e) =>{
  e.stopPropagation();
  alert('Bow Wow!');
});