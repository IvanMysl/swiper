// npm init - ініціалізує npm в проекті і створює файл package.json
// npm install - встановлює всі залежності, перелічені в package.json
// npm list --depth=0 - виведе в терміналі список локально встановлених пакетів з номерами їх версій, без залежностей
// npm install [package-name] - встановить пакет локально у папку node_modules
// npm uninstall [package-name] - видалить пакет, встановлений локально і оновить package.json
// npm start і npm test - запустить скрипт start або test, розташований в package.json
// npm run [custom-script] - запустить кастомний скрипт, розташований в package.json
// npm outdated - використовується для пошуку оновлень, виявить сумісні версії програмно і виведе список доступних оновлень
// npm update - оновить всі пакети до максимально дозволеної версії
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });