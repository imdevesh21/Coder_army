// // dom manipulation

// const maincontainer = document.getElementById('main-container');
// console.log(maincontainer);

// maincontainer.style.border = '2px solid red';

// // selecting with tag name

// const selectTag = document.getElementsByTagName('p');
// console.log(selectTag);

// for(element of selectTag){
//   element.style.fontStyle = 'italic';
// }

// // selecting element with specified class name

// const selectEleClassName = document.getElementsByClassName('.content');
// console.log(selectEleClassName.length);

// // you can also select element with multiple classes

// const footerContainer = document.getElementsByClassName('container footer');
// console.log(footerContainer[0]);


// the modern and powerfull method querySelector


// const main = document.querySelector('#main-container');
// console.log(main);

// const firstContainer = document.querySelector('.container');
// console.log(firstContainer);

// const firstP = document.querySelector('p');
// console.log(firstP);

// const liItems = document.querySelector('.item.special');
// console.log(liItems);
// liItems.style.color = 'orange';

// const username = document.querySelector('input[name="username"]');
// console.log(username);


// querySelectorAll

// const allContainer = document.querySelectorAll('.container');
// console.log(allContainer);


// const allListItems = document.querySelectorAll('#item-list li');
// console.log(allListItems);


// allListItems.forEach(items=>{
//   console.log(items)
//   items.style.color = 'red';
// })


// const selectByTagName = document.getElementsByTagName('li');
// console.log(selectByTagName);
// const covertTag = [...selectByTagName];
// covertTag.forEach(item=>{
//   item.style.backgroundColor = "blue"
// })


const classBased = document.getElementsByClassName('third');
console.log(classBased);
classBased[0].id = "content";
console.log(classBased[0].dir);


