'use sctrict'

const iconBurger = document.querySelector('.icon-burger');
const iconBurgerOpened = document.querySelector('.btn-menu-burger');
const menu = document.querySelector('.menu-body');
const darkBack = document.querySelector('.opened-menu-back');
const body = document.querySelector('body');


function menuOpen(){
  iconBurger.classList.add('icon-burger_active');
  iconBurgerOpened.classList.add('icon-burger_active');
  menu.classList.add('menu-body_open');
  darkBack.classList.add('opened-menu-back_active');
  body.classList.add('hidden-body');
}

function menuClose(){
  iconBurger.classList.remove('icon-burger_active');
  iconBurgerOpened.classList.remove('icon-burger_active');
  menu.classList.remove('menu-body_open');
  darkBack.classList.remove('opened-menu-back_active');
  body.classList.remove('hidden-body');
}

iconBurger.addEventListener('click', menuOpen);
iconBurgerOpened.addEventListener('click', menuClose);
// darkBack.addEventListener('clcik', menuClose);

darkBack.addEventListener('click', () => {
  iconBurger.classList.toggle('icon-burger_active');
  iconBurgerOpened.classList.toggle('icon-burger_active');
  menu.classList.remove('menu-body_open');    
  darkBack.classList.remove('opened-menu-back_active');
  body.classList.remove('hidden-body');
  // targetCard.remove('target-card-testinials');
})

const linksInMenu = document.querySelectorAll('.nav-item__link');

linksInMenu.forEach(link => {
  link.addEventListener('click', menuClose);
})


const leftBtnPets = document.querySelector('.button-box .circle-btn');
const rightBtnPets = document.querySelector('.button-box_rigth .circle-btn');
const blockPets = document.querySelector('.pets_block');
const cardsPets = document.querySelectorAll('.pets_card');

const arrCardPets = [];

for(let card of cardsPets){
  let elem = card.cloneNode(true)
  arrCardPets.push(elem)
}
// cardsPets.cloneNode(true);

console.dir(arrCardPets)
console.dir(cardsPets)

function sortArr(arr){
  arr.sort(() => Math.random() - 0.5);
}

function changeCards(){
  const cardsPets = document.querySelectorAll('.pets_card');
  sortArr(arrCardPets);
  
  for(let i = 0; i < 6; i++){
    cardsPets[i] = blockPets.replaceChild(arrCardPets[i], cardsPets[i]);   
    // cardsPets[i].remove();
    // blockPets.prepend(arrCardPets[i]);
   
    // cardsPets[i].style.opacity = 0;
    // setTimeout(()=> {
    //   cardsPets[i].remove();
    //   blockPets.prepend(arrCardPets[i]);
    //   cardsPets[i].style.opacity = 1;
    // }, 1000)
    // arrCardPets.pop()
  }
  console.dir(arrCardPets)
  console.dir(cardsPets)
}

// leftBtnPets.addEventListener('click', changeCards);

// console.log(arrCardPets, cardsPets)
// console.log(arrCardPets == cardsPets)
// // cardsPets.remove()
// for(let card of cardsPets){
//   card.remove()
// }
// console.log(arrCardPets, cardsPets);






// let steFeedback = 0;

const rangeInput = document.querySelector('.range-btn');
const testinimolsBlock = document.querySelector('.testimonials_cards-block');

rangeInput.addEventListener('input', ()=>{
  if(rangeInput.value == 1){
    testinimolsBlock.style.left = 0 + '%';
    for(let i = 0; i < testinialsCard.length; i++){
      if(i > 4){
        testinialsCard[i].style.opacity = 0;
      } else {
        testinialsCard[i].style.opacity = 1;
      }
    }
  }

  if(rangeInput.value == 2){
    testinimolsBlock.style.left = -25.7 + '%';
    for(let i = 0; i < testinialsCard.length; i++){
      if(i == 0 || i > 4){
        testinialsCard[i].style.opacity = 0;
      }
      else {
        testinialsCard[i].style.opacity = 1;
      }
    }
  }

  if(rangeInput.value == 3){
    testinimolsBlock.style.left = -51.4  + '%';
    for(let i = 0; i < testinialsCard.length; i++){
      if(i < 2 || i > 5){
        testinialsCard[i].style.opacity = 0;
      }
      else {
        testinialsCard[i].style.opacity = 1;
      }
    }
  }

  if(rangeInput.value == 4){
    testinimolsBlock.style.left = -77.1 + '%';
    for(let i = 0; i < testinialsCard.length; i++){
      if(i < 3 || i > 6){
        testinialsCard[i].style.opacity = 0;
      }
      else {
        testinialsCard[i].style.opacity = 1;
      }
    }
  }

  if(rangeInput.value == 5){
    testinimolsBlock.style.left = -102.8 + '%';
    for(let i = 0; i < testinialsCard.length; i++){
      if(i < 4 || i > 7){
        testinialsCard[i].style.opacity = 0;
      }
      else {
        testinialsCard[i].style.opacity = 1;
      }
    }
  }

  if(rangeInput.value == 6){
    testinimolsBlock.style.left = -128.5 + '%';
    for(let i = 0; i < testinialsCard.length; i++){
      if(i < 5 || i > 8){
        testinialsCard[i].style.opacity = 0;
      }
      else {
        testinialsCard[i].style.opacity = 1;
      }
    }
  }

  if(rangeInput.value == 7){
    testinimolsBlock.style.left = -154.2 + '%';
    for(let i = 0; i < testinialsCard.length; i++){
      if(i < 6 || i > 10){
        testinialsCard[i].style.opacity = 0;
      }
      else {
        testinialsCard[i].style.opacity = 1;
      }
    }
  }

  if(rangeInput.value == 8){
    testinimolsBlock.style.left = -179.9 + '%';
  }
})

const testinialsCard = document.querySelectorAll('.testimonials_card');
// console.log(testinialsCard)

darkBack.addEventListener('click', ()=>{
  let targetCard = document.querySelector('.target-card-testinials');
  targetCard.classList.remove('target-card-testinials');
})

const popup = document.querySelector('.popup');

testinialsCard.forEach(card => {
  card.addEventListener('click', (e)=>{
    // popup.classList.toggle('.popup_active');
    let targetCard = e.currentTarget.cloneNode(true);
    let popupBlock = popup.querySelector('.popup_card');
    popupBlock.append(targetCard);
    targetCard.style.width = 293 + 'px';
    targetCard.style.height = 400 + 'px';
    body.classList.add('hidden-body');
    popup.classList.add('popup_active');
    
    let btnBox = document.createElement('div');
    btnBox.className = 'btn-box_feedback-card';
    let btnX = document.createElement('span');
    btnX.className = 'btn_feedback-card';
    btnBox.append(btnX);
    targetCard.append(btnBox);
    // btnBox.className = 'btn-menu-burger';
    // btnBox.append(btnX);
    // targetCard.append(btnBox);
    // buttonIN();
  })
})

popup.addEventListener('click', (e)=> {
  
  const popupChild = popup.querySelector('.popup_card');
  const cardInPopup = popupChild.querySelector('.testimonials_card');
  const btnBox = popupChild.querySelector('.btn-box_feedback-card');
   
  function leavePopup(){
    body.classList.remove('hidden-body');
    popup.classList.remove('popup_active');
    cardInPopup.remove();
  }

  btnBox.addEventListener('click', leavePopup);

  if(e.target !== popup) return;
  else {
    leavePopup();
  }
})





