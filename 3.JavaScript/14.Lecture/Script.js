// dom operations on element and tags

// const welcomeBox = document.getElementById('welcome-box');
// alert(welcomeBox);
// console.log(welcomeBox);
// welcomeBox.textContent = "This is a changed welcome message.";


// textContent for avoidance of malicious code behaviour

// const welcomeBox = document.querySelector('#welcome-box');
// const maliciousInput = "<script>alert('hacked!')</script>";
// welcomeBox.textContent = maliciousInput;

// creating an element

// const h1 = document.querySelector('#welcome-box');
// const h2 = document.createElement("h2");
// h2.textContent = "this is h2 element";
// h2.id =("second");
// console.log(h2)
// h2.before(h1);


// const newElement = document.createElement('h2');
// newElement.textContent = "second text";
// newElement.id = "second";
// const element = document.querySelector('#welcome-box');
// element.before(newElement);


// const newElement2 = document.createElement('p');
// newElement2.innerHTML = "this is a new paragraph";
// newElement2.className = "third";
// console.log(newElement2);
// newElement.before(newElement2);


// const button = document.querySelector('button');
// button.setAttribute("name", "helloBtn");
// console.log(button)

/* 
const listItem = document.createElement('li');
listItem.textContent = "milk";
const listItem2 = document.createElement('li');
listItem2.textContent = "coffee"; 
item3.textContent = "tea"; */

const itemList = document.querySelector('#ul-list');
// console.log(itemList);
// itemList.append(listItem);
// itemList.append(listItem2)

// itemList.append(listItem, listItem2, item3);
// const fragments = document.createDocumentFragment();
const arrList = [];
const arr = ["mango", "lichi", "banana", "apple", "orange"];
for (const element of arr) {
  const list = document.createElement('li');
  list.textContent = element;
  // fragments.append(list);
  arrList.push(list);
}
// itemList.append(fragments);
itemList.append(...arrList);
