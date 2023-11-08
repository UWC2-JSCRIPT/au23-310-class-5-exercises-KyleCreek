// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
let main = body.children[0];
console.log(main);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
let body1 = ul.parentNode.parentNode;
console.log(body1);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
// To Do - Finish this assignment. 
const p = document.querySelector('p');
let main1 = p.parentNode;
