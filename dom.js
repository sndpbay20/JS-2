// TRAVERSNG THE DOM //
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f16f15f7';
// console.log(itemList.parentNode.parentNode.parentNode);

// // parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#c06cB4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = '#ffcd01';

// // First Child
// console.log(itemList.firstChild);
// // FirstElementChild //
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';
// itemList.firstElementChild.style.backgroundColor = 'lightblue';

// // lastchild
// console.log(itemList.lastChild);
// // lastElementChild //
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// // nextSibling //
// console.log(itemList.nextSibling);
// // NextElementSibling //
// console.log(itemList.nextElementSibling);

// // previousSibling //
// console.log(itemList.previousSibling);
// // PreviousElimentSibling //
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';


console.log(itemList.previousSibling);
itemList.previousElementSibling.style.color = 'Red';

// Create Element //

// create a div 
var newDiv = document.createElement('div');

//Add Class
newDiv.className = 'Hello';

// Add id
newDiv.id = 'hello 1';

// Add attribute
newDiv.setAttribute('title', 'Hello Div');

// create text node
var newDivText = document.createTextNode('Hello World!');

console.log(newDiv);

newDiv.style.fontSize = '30px';
newDiv.style.color = 'yellow';

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);