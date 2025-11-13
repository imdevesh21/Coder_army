
// function changeBackgroundColor(color){
//   document.body.style.backgroundColor = color;
// }

// window.addEventListener("load", function(){
//   changeBackgroundColor('red');
// })

const colorBtn = document.querySelector('#parent');
console.log(colorBtn);

colorBtn.addEventListener("click", (e)=>{
  const child = e.target;
  const body = document.querySelector('body');
  body.style.backgroundColor = child.id;
})
