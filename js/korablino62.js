// ИНТЕРАКТИВНАЯ КАРТА

var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map('map', {
    // При инициализации карты обязательно нужно указать
    // её центр и коэффициент масштабирования.
    center: [34.80128481, -111.75458011], // Седона, Калифорния
    zoom: 9
  }, {
    searchControlProvider: 'yandex#search'
  });
  myPlacemark = new ymaps.Placemark([34.85413348, -111.79557050], {
    hintContent: 'Кораблино, Рязанская область',
    balloonContent: 'Кораблинский муниципальный район'
  });
  myMap.geoObjects.add(myPlacemark);
}
