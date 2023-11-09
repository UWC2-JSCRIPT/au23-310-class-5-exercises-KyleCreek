// If an li element is clicked, toggle the class "done" on the <li>
// If a delete link is clicked, delete the li element / remove from the DOM
// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
// -- All the Above was the Information that was provided by UW. -- //


// Create An Element for the Add Button
const addButton = document.getElementsByClassName('add-item')[0];

// -- Helper Function to Create a new Text Node
function newNodeCreate(inputText){
  // Create the New New Span
  const spanNode = document.createElement('span');
  // Add the text information into the New Span.
  const newTextNode = document.createTextNode(inputText);
  // Append the Span to the List. 
  spanNode.appendChild(newTextNode);

  // Create a List Item to encompass the Span Noce
  const listItem = document.createElement('li');
  listItem.className = 'Incomplete';
  // Append the Span to the List Item
  listItem.appendChild(spanNode);

  // Create the Delete Button
  const deleteButton = document.createElement('a');
  deleteButton.className = 'delete';
  deleteButton.innerText = 'Delete';

  // Make the Delete Box the Check for the List Item
  listItem.appendChild(deleteButton);

  // Return the node From the Function. 
  return listItem;
}

// -- Helper Function to Add the Node to the HTML

// Develop the Add List Item Function
const addListItem = function(e) {
  e.preventDefault();
  // Obtain the Input and Convert it to Text
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  // Create the New Node to Append to the HTML. 
  const newItem = newNodeCreate(text);
  // Place the Node into the HTML - Want to Append to the UL
  const uList = document.getElementsByTagName('ul')[0];
  uList.appendChild(newItem);  
};

// Apply the Event Listener to the Add Button
addButton.addEventListener('click', addListItem);

// Below this line is me testing how to navigate Events

const mainList = document.getElementsByTagName('ul')[0];
mainList.addEventListener('click', (e) =>{
  // Case Statement where LI has been clicked
  // Will Toggle the Class Name from "Incomplete" to "Complete" or Vice Versa.
  // This isn't entirely Clear per the Class Instructions, so I Added the Functionality
  // and revised the HTML Accordingly. 
  if (e.target.tagName === 'LI'){
    console.log('class name target first', e.target.className);
    if (e.target.className === 'Incomplete'){
      e.target.className = 'Complete'
      console.log('class name target second', e.target.className);
    }
    else{
      e.target.className = 'Incomplete';
      console.log('class name target second', e.target.className);
    }
  }
  // Case Statement where the Delete Button Has Been Clicked
  if (e.target.tagName === 'A'){
    console.log('Delete Button');
    // Obtain the List Item Node
    const parentNode = e.target.parentNode;
    // Remove the Parent Node
    parentNode.remove();
  }
});