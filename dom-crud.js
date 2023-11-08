// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const newElement = document.createElement('a');
const newElementTextNode = document.createTextNode("Buy Now!");
newElement.appendChild(newElementTextNode);
newElement.id = 'cta';

// -- Go Do: Insert the Element after the Last P. 
document.body.appendChild(newElement);

// Access (read) the data-color attribute of the <img>,
// log to the console
const imageList = document.querySelectorAll('img');
const image = imageList[0];
console.log(image.dataset.color);


// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const listBullets = document.getElementsByTagName("li");
const item = listBullets[2];
item.setAttribute("className", "Highlight");




// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const paragraphList = document.querySelectorAll('p');
//const lastParagraph = paragraphList[paragraphList.length -1]
paragraphList[paragraphList.length -1].remove();