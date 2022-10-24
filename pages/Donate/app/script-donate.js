'use sctruct';

const darkBack = document.querySelector('.opened-menu-back');
const menu = document.querySelector('.menu-body');
const iconBurger = document.querySelector('.icon-burger');
const iconBurgerOpened = document.querySelector('.btn-menu-burger');
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
  })
  
  const linksInMenu = document.querySelectorAll('.nav-item__link');
  
  linksInMenu.forEach(link => {
    link.addEventListener('click', menuClose);
  })
  

const label = document.querySelectorAll('.label-radio');
const sumBox = document.querySelector('.cash_list');
const sumList = sumBox.querySelectorAll('h3');
const donateForm = document.querySelector('.choose-sum input');

// console.log(donateForm)

function removeClassChecked(){
  for(let elem of sumList){
    elem.classList.remove('checked_label');
  }
  for(let item of label){
    item.classList.remove('checked_label');
  }
}

function changeLabel(indexEl){
  let currentTegH = sumList[indexEl];
  let currentCash = currentTegH.innerHTML;
  
  label[indexEl].classList.add('checked_label');
  currentTegH.classList.add('checked_label');
  
  let justSum = Number(currentCash.slice(14));
  donateForm.value = justSum;
}

changeLabel(5);

donateForm.addEventListener('input', function() {
  let maxChars = 4;

  if(donateForm.value.length > maxChars){
    donateForm.value = donateForm.value.substr(0, maxChars);
  }

  let arr = [5000, 2000, 1000, 500, 250, 100, 50, 25];

  const currentSum = arr.findIndex(elem => elem == donateForm.value);

  if(+currentSum){
    removeClassChecked();
    let currentTegH = sumList[currentSum];
    currentTegH.classList.add('checked_label');
    label[currentSum].classList.add('checked_label');   
  }
})

label.forEach(elem => {
  elem.addEventListener('click', ()=>{

    removeClassChecked();
        
    let index;
    for(let i = 0; i < label.length; i++){
      if(elem === label[i]){
        index = i;
      }
    }
    
    changeLabel(index);
  })
})


const formRadio = document.querySelector('.radio-form');
const labelRadio = document.querySelectorAll('.label_choose-one');

formRadio.addEventListener('click', (e) => {
  if(e.target == labelRadio[0]){
    labelRadio[0].classList.add('checked_input');
    labelRadio[1].classList.remove('checked_input');
  } else if (e.target == labelRadio[1]){
    if(labelRadio[1].classList.contains('checked_input')) return;
    labelRadio[0].classList.remove('checked_input');
    labelRadio[1].classList.add('checked_input');
  }
})
 
