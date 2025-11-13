// random quote generator
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Believe you can and you're halfway there. - Theodore Roosevelt"
];

const button = document.querySelector('button');
const text = document.querySelector('h1');
console.log(text)

// console.log(button)
button.addEventListener("click",()=>{
  const index = Math.floor(Math.random()*3);
  console.log(index)
  text.textContent = quotes[index];
})
