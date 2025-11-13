const buttonEl = document.querySelectorAll('button');

const inputFieldEl = document.querySelector('#result');

for(let button of buttonEl){
  button.addEventListener("click", ()=>{
    const buttonValue = button.textContent;
    if(buttonValue === "C"){
      clearResult();
    } else if(buttonValue === "="){
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  })
}

function clearResult(){
  inputFieldEl.value = "";
}

function calculateResult(){
  inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue){
  inputFieldEl.value += buttonValue;
}
