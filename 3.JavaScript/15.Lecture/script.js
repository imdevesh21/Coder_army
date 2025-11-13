// function sayHello(){
//   alert("btn is click")
// }


// const btn = document.querySelector('#btn-click');
// console.log(btn);
// btn.onclick = function(){
//   alert("btn click!");
// }

// eventListener method

// btn.addEventListener("click", function(){
//   alert("btn is clicked!");
// })

// mouse event

// const mouseResponse = document.querySelector('#hoverbtn');
// mouseResponse.addEventListener("mouseover", ()=>{
//   console.log("mouse entered");
// })

// mouseResponse.addEventListener("mouseout", ()=>{
//   console.log("mouse left");
// })

// keyboard response

// const text = document.querySelector('#nameInput');
// text.addEventListener("keydown", function(event){
//   console.log(`key pressed: ${event.key}`)
// })


// user form submission

// const LoginForm = document.querySelector('#loginForm');
// // console.log(LoginForm);
// LoginForm.addEventListener("submit", (event)=>{
//   event.preventDefault();
//   setTimeout(()=>{
//     console.log(event.type);
//     console.log(event.target);
//     alert("form is submitted!");
//   }, 1000);
// })

// event bubbling

// const outer = document.querySelector('#outer');
// outer.addEventListener('click',(event)=>{
//   console.log("you click outside");
// })

// const inner = document.querySelector('#inner');
// inner.addEventListener("click", (event)=>{
//   console.log("You have click on a inner btn.")
// })

// const menu = document.querySelector('#menu');
// // console.log(menu)
// menu.addEventListener("click", (e)=>{
//   if(e.target.tagName === 'LI'){
//     console.log(`You clicked: ${e.target.textContent}`);
//   }
// })
// const text = document.querySelector("#heading");
// console.log(text);

// function changeHead(){
//   text.textContent = "Hey dev community."
// }

// const list = document.getElementById('myList');

// if(list){
//   list.addEventListener("click",function(e){
//     if(e.target.tagName === 'LI'){
//       console.log(e.target);
//       console.log(e.type);
//       document.querySelectorAll("#myList li").forEach(li=>li.classList.remove('active'));
//       e.target.classList.add('active');
//     }
//   })
// }

// const ipText = document.getElementById('text');

// method 1
// function handler(){
//   ipText.textContent = "this is the changed text content."
// }

// method 2
// ipText.onclick = function handler(){
//   ipText.textContent = "this is a changed text."
// }

// method 3

// if(ipText){
//   ipText.addEventListener("click", (e)=>{
//     ipText.textContent = "this is a changed text.";
//   })
// }

// ipText.addEventListener("click", (e)=>{
//   if(ipText){
//     ipText.textContent = "Again change.";
//   }
// })

// ipText.addEventListener("mouseenter", (e)=>{
//   e.target.style.backgroundColor = "red";
// })

// // If you want to handle mouse leaving, use "mouseleave" and remove preventDefault as it's unnecessary
// ipText.addEventListener("mouseleave", (e)=>{
//   // Optionally, reset the background color or handle as needed
//   e.target.textContent = "we changed";
//   e.target.style.backgroundColor = "";
// })

// const mainDiv = document.querySelector('#parent');
// // console.log(mainDiv);

// for (const e of mainDiv.children) {
//   // console.log(e);
//   e.addEventListener("click", ()=>{
//     e.textContent = "div is clicked.";
//   })
// }


// event bubbling

const grandDiv = document.querySelector('#grandparent');
// console.log(mainDiv);

const parentDiv = document.querySelector("#parent");
const childDiv = document.querySelector("#child");

function handleClick(e){
  e.target.textContent = "I am clicked"
}
// grandDiv.addEventListener("click", ()=>{
//   console.log("grandparent div is been clicked");
// }, true)

grandDiv.addEventListener("click", handleClick);
parentDiv.addEventListener("click", handleClick);
childDiv.addEventListener("click", handleClick);

// parentDiv.addEventListener("click", ()=>{
//   console.log("parent div clicked");
// }, true)

// childDiv.addEventListener("click", ()=>{
//   console.log("children div is clicked");
// }, true)
