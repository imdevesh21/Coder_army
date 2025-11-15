const starContainer = document.querySelectorAll('.fa');
const starNumCounter = document.querySelector('.selected-rating-value');

// console.log(starContainer)

let currTotalSelectedStars = -1;

starContainer.forEach((starItem, index)=>{
  starItem.dataset.rating = index + 1;
  starItem.addEventListener('mouseover', handleMouseOver);
  starItem.addEventListener('click', handleClick);
  starItem.addEventListener('mouseleave', handleMouseLeave);
})

function handleMouseOver(event){
  // console.log("============================")
  // console.log(event.target.dataset);
  // console.log("============================")

  const currRatingValue = event.target.dataset.rating;
  if(!currRatingValue){
    return;
  } else {
    handleUpdateRatingState(currRatingValue);
  }
}

function handleUpdateRatingState(getCurrentRatingValue){
  for(let i=0; i<starContainer.length; i++){
    if(i < getCurrentRatingValue){
      // console.log(getCurrentRatingValue);
      starContainer[i].classList.replace('fa-star-o', 'fa-star');
    } else  {
      starContainer[i].classList.replace('fa-star', 'fa-star-o');
    }
  }
}


function handleClick(event){
  currTotalSelectedStars = event.target.dataset.rating;
  starNumCounter.textContent = currTotalSelectedStars;
}

function handleMouseLeave(event){ 
  if(currTotalSelectedStars === -1){
    handleUpdateRatingState(0);
  } else {
    handleUpdateRatingState(currTotalSelectedStars);
  }
}
