//api карта
const map = document.querySelector('.js__address-map');

if (map) {
	ymaps.ready(init);
} 


function init() {
	let i;
	let place;
	let pointer = [
		[51.97516107208106, 113.27185299999995],
	   [52.03228357208567, 113.44739299999996],
	   [52.05879857203995,113.48445749999999],
	   [52.07708507205848,113.37122449999997]
	];

  let myMap = new ymaps.Map(map, {
		center: [52.030072706573115,113.53862925781252],
		zoom: 12
	});

	for (i = 0; i < pointer.length; ++i) {
		console.log(pointer[i]);
		
		place = new ymaps.Placemark(pointer[i], {}, {
		  iconLayout: 'default#image',
		  iconImageHref: './images/marker.webp',
		  iconImageSize: [60, 65],
		  iconImageOffset: [-35, -80]
		  });
		myMap.geoObjects.add(place);
	}

	 myMap.controls.remove('geolocationControl'); // удаляем геолокацию
	 myMap.controls.remove('searchControl'); // удаляем поиск
	 myMap.controls.remove('trafficControl'); // удаляем контроль трафика
	 myMap.controls.remove('typeSelector'); // удаляем тип
	 myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	 myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
	 myMap.controls.remove('rulerControl'); // удаляем контрол правил
	 myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
};


function address() {
	const js__addressClick = document.querySelectorAll('.js__address-click');
	
	for (let i = 0; i < js__addressClick.length; i++) {
	  if(js__addressClick[i]) {
		js__addressClick[i].addEventListener('click', () => {
			document.querySelectorAll('.app-actions').forEach((Element => Element.classList.add('hidden')));
			document.querySelectorAll('[data-scene="preparation"]')[i].classList.remove('hidden'); 
		 })
	  }
	}
	
}

address();
