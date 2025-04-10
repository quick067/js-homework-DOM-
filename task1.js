// На HTML-сторінці є ненумерований список з id="list", який містить 5 елементів <li>
// Використовуючи засоби DOM, отримай доступ до всіх елементів списку та виведи їх вміст в консоль (console.log) в такому порядку:
// перший елемент → останній елемент → другий елемент → третій елемент → четвертий елемент
// *Додатково: кількість елементів може бути довільною і невідомою наперед
// *Додатково: на сторінці можуть бути інші списки, всередині потрібного списку можуть бути інші елементи, крім <li>.
// Вважайте, що скрипт підключено в кінці body, тести не генерують подію `DOMContentLoaded`.

const list = document.querySelector("#list");

function logThruConsole(text){
    if(text===undefined){
        return;
    }
    console.log(text);
}

if(list){
    const items = document.querySelectorAll("#li");
    logThruConsole(items[0].textContent.trim());
    logThruConsole(items[items.length - 1].textContent.trim());
    logThruConsole(items[1]?.textContent.trim());
    logThruConsole(items[2]?.textContent.trim());
    logThruConsole(items[3]?.textContent.trim());
}