//burger menu
const js__headerBurger = document.querySelectorAll('.js__header-burger')
const js__headerBurgerPolosa1 = document.querySelectorAll('.js__header-burgerpolosa1');
const js__headerBurgerPolosa = document.querySelectorAll('.js__header-burgerpolosa');
const js__headerBurgerPolosa3 = document.querySelectorAll('.js__header-burgerpolosa3');
const js__menuHeaderModail = document.querySelectorAll('.js__menu-headermodail');
const js__headermodailText = document.querySelector('.js__headermodail-text');
const body = document.querySelector('body');


    js__headerBurger[0].addEventListener('click', burger);
    js__headerBurger[1].addEventListener('click', burger1);

    function burger1(e) {
      e.preventDefault();
      text()
      console.log('click1');
      
      js__headerBurgerPolosa1[1].classList.toggle('open');
      js__headerBurgerPolosa[1].classList.toggle('open');
      js__headerBurgerPolosa3[1].classList.toggle('open');
      js__menuHeaderModail[1].classList.toggle('open');
    }

    function burger(e) {
      console.log('click0');
      e.preventDefault();
      js__headerBurgerPolosa1[0].classList.toggle('open');
      js__headerBurgerPolosa[0].classList.toggle('open');
      js__headerBurgerPolosa3[0].classList.toggle('open');
      js__menuHeaderModail[0].classList.toggle('open');
      body.classList.toggle('open')
    }


function text() {
   if(js__headermodailText.innerHTML === 'Открыть меню') {
      js__headermodailText.innerHTML = 'Закрыть меню'
   } else {
      js__headermodailText.innerHTML = 'Открыть меню'
   }
}