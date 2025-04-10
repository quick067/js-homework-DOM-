// Простилізуйте елементи, як показано на зображенні task2.png.
// - Фон заголовка має бути "lightgreen", шрифт — жирний (font-weight: 700).
// - Колір другого параграфа — "red".
// - Третій параграф має бути підкреслений (underline).
// - Четвертий параграф має бути курсивним (italic).
// - Список має бути без маркерів і відображатися в одну лінію за допомогою flex.
// - На сторінці є елемент <span>, який потрібно приховати, встановивши властивість display: none.

const el = document.querySelector('.style_elements');
const title = el.querySelector('#title');
title.style.backgroundColor = 'lightgreen';
const myDiv = el.querySelector('#myDiv');

const firstPar = myDiv.children[0];
firstPar.style.fontWeight = '700';

const secondPar = myDiv.children[1];
secondPar.style.color = 'red';

const thirdPar = myDiv.children[2];
thirdPar.style.textDecoration = 'underline';

const fourthPar = myDiv.children[3];
fourthPar.style.fontStyle = 'italic';

const myList = el.querySelector('#myList');
myList.style.listStyle = 'none';
myList.style.display = 'flex';
myList.style.flexDirection = 'row';

const spanToHide = el.querySelector('span');
spanToHide.style.display = 'none';