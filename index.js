const navBottom = document.querySelector('.nav-bottom');
const menuSwitcher = document.querySelector('#check-menu');
const back = document.querySelector('.back');
let i = 0;
menuSwitcher.addEventListener('click', () => {
  if (i == 0) {
    navBottom.style.height = '350px';
    back.style.height = '5500px';
    i = 1;
  } else {
    navBottom.style.height = '0';
    back.style.height = '5150px';
    i = 0;
  }
})

window.addEventListener('resize', () => {
  if (document.body.clientWidth > 667) {
    navBottom.style.height = '0';
    i = 0;
  } else {
    if (document.getElementById('check-menu').checked) {
      navBottom.style.height = '350px';
      i = 1;
      back.style.height = '5500px';
    } else back.style.height = '5150px';
  }
  if (document.body.clientWidth > 991) back.style.height = '3000px';
  if (document.body.clientWidth >= 667 && document.body.clientWidth < 991) back.style.height = '5430px';
}, false);

const header = document.querySelector('header');
header.addEventListener('click', () => {
  if (document.body.clientWidth <= 667) {
    document.getElementById('check-menu').checked = false;
    navBottom.style.height = '0';
    back.style.height = '5150px';
    i = 0;
  }
})

const main = document.querySelector('main');
main.addEventListener('click', () => {
  if (document.body.clientWidth <= 667) {
    document.getElementById('check-menu').checked = false;
    navBottom.style.height = '0';
    back.style.height = '5150px';
    i = 0;
  }
})

const footer = document.querySelector('footer');
footer.addEventListener('click', () => {
  if (document.body.clientWidth <= 667) {
    document.getElementById('check-menu').checked = false;
    navBottom.style.height = '0';
    back.style.height = '5150px';
    i = 0;
  }
})

console.log('Score: 150 / 150 (за выполнение всех пунктов требований - 160 баллов).');
console.log('Критерии оценки:');
console.log('1. Вёрстка валидная - 10 баллов.');
console.log('2. Вёрстка семантическая - 20 баллов.');
console.log(' - присутствуют семантические теги: aside, footer, header, main, nav, section, summary - 14 баллов,');
console.log(' - присутствуют уникальные заголовки: h1 (только один), h2, h4 - 6 баллов,');
console.log('3. Для оформления СV используются css-стили (более 10-ти стилизованных элементов) - 10 баллов.');
console.log('4. Контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет тянется во всю ширину страницы - 10 баллов.');
console.log('5. Вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется - 10 баллов.');
console.log('6. Есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным - 10 баллов.');
console.log('7. На странице СV присутствует изображение - фото автора CV, пропорции изображения не искажены, у изображения есть атрибут alt - 10 баллов.');
console.log('8. Контакты для связи и перечень навыков оформлены в виде списка - 10 баллов.');
console.log('9. CV содержит контакты, краткую информацию о себе, навыки, образование, уровень английского - 10 баллов.');
console.log('10. CV содержит пример моего кода (решение задачи с сайта codewars) с подсветкой кода - 10 баллов.');
console.log('11. CV содержит изображения-ссылки на выполненные мной проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий - 10 баллов.')
console.log('12. CV выполнено на английском языке - 10 баллов.');
console.log('13. Выполнены требования к репозиторию: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, указана дата дедлайна, выполнена самооценка - 10 баллов.');
console.log('14. Есть видеорезюме автора CV на английском языке. Видеорезюме встроено в страницу CV как видео. Продолжительность видео 5 минут. В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (в документе Google Docs). - 10 баллов.');
console.log('15. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию - 10 баллов.');