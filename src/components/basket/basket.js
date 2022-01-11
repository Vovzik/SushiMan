function inputPLusMinus() {
    const basket__minus = document.querySelectorAll('.js__basket-minus');
    const basket__plus = document.querySelectorAll('.js__basket-plus');
    const basket__input = document.querySelectorAll('.js__basket-value');


    for (let i = 0; i < basket__plus.length; i++) {
        basket__plus[i].addEventListener('click', () => {
            basket__input[i].value++;
        })

        basket__minus[i].addEventListener('click', () => {
            if (basket__input[i].value > 1) {
                basket__input[i].value--;
            }
        })
    }
}
inputPLusMinus()
