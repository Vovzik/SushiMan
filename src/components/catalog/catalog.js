function filter() {
    const filter = document.querySelectorAll('.js__catalog-click');

    for (let i = 0; i < filter.length; i++) {
      if(filter[i]) {
        filter[i].addEventListener('click', (e) => {
          e.preventDefault()
          document.querySelectorAll('.app-actions').forEach((Element => Element.classList.add('hidden')));
          document.querySelectorAll('[data-scene="preparation"]')[i].classList.remove('hidden');
        })
      }
    }
}
function menu() {
    const filter = document.querySelectorAll('.js__catalog-click1');

    for (let i = 0; i < filter.length; i++) {
      if(filter[i]) {
        filter[i].addEventListener('click', (e) => {
          e.preventDefault()
          document.querySelectorAll('.app-actions1').forEach((Element => Element.classList.add('hidden')));
          document.querySelectorAll('[data-scene="preparation1"]')[i].classList.remove('hidden');
        })
      }
    }
}
filter()
menu()

