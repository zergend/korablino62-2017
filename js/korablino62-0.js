// Yandex.Metrika counter
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter21113743 = new Ya.Metrika({
                id:21113743,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
            });
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");

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
    center: [53.969607, 40.062706], // Кораблино, Рязанская обл.
    zoom: 10
  }, {
    searchControlProvider: 'yandex#search'
  });
  myPlacemark = new ymaps.Placemark([53.969607, 40.062706], {
    hintContent: 'Кораблинский район, Рязанская область',
    balloonContent: 'Кораблинский муниципальный район, Рязанская область'
  });
  myMap.geoObjects.add(myPlacemark);
}
