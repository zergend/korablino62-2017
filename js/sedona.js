// ПРОЯВЛЯЮЩАЯСЯ ФОРМА
var link = document.querySelector(".search-form-open");
var popup = document.querySelector(".modal-content");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
    }
  }
});


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
    hintContent: 'Седона!',
    balloonContent: 'СЕДОНА - НЕБОЛЬШОЙ ГОРОДОК В АРИЗОНЕ, ЗАСЛУЖИВАЮЩИЙ БОЛЬШЕГО!'
  });
  myMap.geoObjects.add(myPlacemark);
}
