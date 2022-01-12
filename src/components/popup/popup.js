function popup() {
    const js__popupLink = document.querySelectorAll('.js__popup-link');
    const js__popupClose = document.querySelectorAll('.js__popup-close');
    const body = document.querySelector('body');


    let unlock = true;

    const timeout = 400;




    for (let i = 0; i < js__popupLink.length; i++) {
        js__popupLink[i].addEventListener('click', (event) => {
            const popup__name = js__popupLink[i].dataset.modal;
            const popupCurent = document.querySelector(`[data-popup="${popup__name}"]`);
            popupOpen(popupCurent);
            event.preventDefault();
        });
    };


    for (let i = 0; i < js__popupClose.length; i++) {
        js__popupClose[i].addEventListener('click', (event) => {
            popupClose(js__popupClose[i].closest('.popup'));
            event.preventDefault();
        });
    };



    function popupOpen(popupCurent) {
        if (popupCurent && unlock) {
            const popupActive = document.querySelector('.popup.open');

            if (popupActive) {
                popupClose(popupActive, false);
            } else {
                bodylock();
            }


            popupCurent.classList.add('open');
            popupCurent.addEventListener('click', (event) => {
                if (!event.target.closest('.js__popup-content')) {
                    popupClose(event.target.closest('.popup'));
                };
            });
        };
    }


    function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
            popupActive.classList.remove('open');

            if (doUnlock) {
                bodyUnlock();
            };
        };
    };


    function bodylock() {
        const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px'; //Получили ширину scrolla

        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');

    };


    function bodyUnlock() {
        setTimeout(function () {
            body.style.paddingRight = '0px';
            body.classList.remove('lock');
        }, timeout)
    };

}
popup()


function tabs() {
   const js__popupBtn = document.querySelectorAll('.js__popup-btn');
   const js__popupBody = document.querySelector('.js__popup-body');
   const js__popupInnerbtn = document.querySelector('.js__popup-innerbtn');
   
   for (let i = 0; i < js__popupBtn.length; i++) {
      js__popupBtn[i].addEventListener('click', function () {
      js__popupInnerbtn.querySelector('.active').classList.remove('active');
      js__popupInnerbtn.querySelectorAll('.js__popup-btn')[i].classList.add('active');
   
       js__popupBody.querySelector('.active').classList.remove('active');
       js__popupBody.querySelectorAll('.js__popup-item')[i].classList.add('active'); 
     })
   }
}

tabs()




