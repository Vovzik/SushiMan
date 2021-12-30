//api карта
const map = document.querySelector('#map');




if (map) {
	ymaps.ready(init);
	console.log('true');
} else {
	console.log('false');
}



var myMap;

function init() {
	var i;
	var place;
	var pointer = [
		$(map).data('metka'),
		$(map).data('metka2'),
		$(map).data('metka3'),
		$(map).data('metka4'),
	];

	var myMap = new ymaps.Map("map", {

		center: [52.0361076689795,113.52558299316408],
		zoom: 12

	});

	for (i = 0; i < pointer.length; ++i) {
        console.log(pointer[i]);
        
		place = new ymaps.Placemark(pointer[i], {}, {
        iconLayout: 'default#image',
        iconImageHref: './images/marker.webp',
        iconImageSize: [60, 61],
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
