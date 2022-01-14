function contact() {
	const js__contactClick = document.querySelectorAll('.js__contact-click');
	
	for (let i = 0; i < js__contactClick.length; i++) {
	  if(js__contactClick[i]) {
		js__contactClick[i].addEventListener('click', (e) => {
            e.preventDefault()
			document.querySelectorAll('.app-actions').forEach((Element => Element.classList.add('hidden')));
			document.querySelectorAll('[data-scene="preparation"]')[i].classList.remove('hidden'); 
		 })
	  }
	}
	
}

contact();