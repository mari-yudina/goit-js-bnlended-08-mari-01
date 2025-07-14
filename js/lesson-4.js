//Завдання 1:

// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector('body');
console.log('task-1 :', bodyEl);
// 2 - отримай елемент id="title" і виведи його в консоль;
const titleEl = document.querySelector('#title');
console.log('task-2 :', titleEl);
// 3 - отримай елемент class="list" і виведи його в консоль;
const listEl = document.querySelector('.list');
console.log('task-3 :', listEl);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopic = document.querySelectorAll('[data-topic]');
console.log('task-4 :', dataTopic);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const dataTopicFirstEl = document.querySelector('[data-topic]');
console.log('task-5 :', dataTopicFirstEl);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastEl = dataTopic[dataTopic.length - 1];
console.log('task-6 :', lastEl);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const nextAfterH1 = document.querySelector('h1').nextElementSibling;
console.log('task-7 :', nextAfterH1);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
const titleH1All = document.querySelectorAll('h3');
titleH1All.forEach((el, index) => {
  console.log('task-8-9 :', el.textContent);
  el.classList.add('active');
});
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
const elLi = document.querySelector('li[data-topic="navigation"]');
console.log('task-10-11 :', elLi);
if (elLi) {
  elLi.style.backgroundColor = 'yellow';
}
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const navTextEl = document.querySelector(
  '[data-topic="navigation"]',
).lastElementChild;
console.log('task-12 :', navTextEl);
navTextEl.textContent = 'Я змінив тут текст!';

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
const currentTopic = 'manipulation';
const oneTextEl = document.querySelector(`[data-topic=${currentTopic}]`);
console.log('task-13-14 :', oneTextEl);
oneTextEl.style.backgroundColor = 'blue';
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const classCompleted = document.querySelector('.completed');
console.log('task-15 :', oneTextEl);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const completedParent = classCompleted.parentElement;
completedParent.remove();
console.log('task-16 :', completedParent);
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const paragraphText = document.createElement('p');
paragraphText.textContent = "Об'єктна модель документа (Document Object Model)";
titleEl.after(paragraphText);
console.log('task-17 :', paragraphText);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const li = document.createElement('li');
const h3 = document.createElement('h3');
const p = document.createElement('p');
h3.textContent = 'Властивість innerHTML';
p.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.';
li.appendChild(h3);
li.appendChild(p);
const ul = document.querySelector('ul');
ul.appendChild(li);

const lastLi = ul.lastElementChild;
const heading = lastLi.querySelector('h3');

if (heading && heading.textContent === 'Властивість innerHTML') {
  console.log('task-18 : Елемент успішно додано у список!', ul);
} else {
  console.warn('task-18 : Щось пішло не так…');
}

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const ulTwo = document.querySelector('ul');

ulTwo.insertAdjacentHTML(
  'beforeend',
  `
    <li class="task-list-item">
      <h3>Властивість innerHTML</h3>
      <p>
        Ще один спосіб створити DOM-елементи і помістити їх в дерево — це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.
      </p>
    </li>
  `,
);
const lastItem = ul.lastElementChild;

if (
  lastItem &&
  lastItem.querySelector('h3')?.textContent === 'Властивість innerHTML'
) {
  console.log(
    'task-19 : Елемент успішно додано через insertAdjacentHTML!',
    ulTwo,
    ul,
  );
} else {
  console.log('task-19 : Щось не так...');
}

// 20 - очисти список

// 1 спосіб
/*
 listEl.innerHTML = '';
 console.log('task-20 : Список успішно очищено!', ulTwo, ul);
*/

// 2 спосіб

/*while (ul.firstChild) {
  ul.removeChild(ul.firstChild);
}
console.log('task-20 : Всі елементи видалені по одному!');
*/

//Завдання 2:

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const divBox = document.querySelector('.number-container');
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
for (let i = 0; i <= 100; i++) {
  const block = document.createElement('div');
  const value = randomNumber();
  block.textContent = value;
  block.classList.add('number');
  if (value % 2 === 0) {
    block.classList.add('even');
  } else {
    block.classList.add('odd');
  }
  divBox.appendChild(block); //додаєм на сторінку
  //console.log(block); //перевірка у косолі
}

//Завдання 3:

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

const input = document.querySelector('.js-username-input');
input.addEventListener('input', checkInputValue);
input.addEventListener('blur', checkInputValue);

function checkInputValue() {
  const inputValue = input.value.trim();
  if (inputValue.length >= 6) {
    input.classList.add(`success`);
    input.classList.remove('error');
  } else {
    input.classList.add(`error`);
    input.classList.remove(`success`);
  }

  input.addEventListener('blur', () => {
    if (inputValue === '') {
      input.style.outline = '3px solid red';
    } else {
      input.style.outline = '3px solid lime';
    }
  });
}

/*const form = document.querySelector('.js-form');
const input = document.querySelector('.js-username-input');
const checkbox = document.querySelector('.js-agree-checkbox');
const span = document.querySelector('.js-user-name');

// 1 - input event
input.addEventListener('input', checkInput);

// 2 - focus event
input.addEventListener('focus', checkInput);

// 3 - blur event
input.addEventListener('blur', () => {
  const value = input.value.trim();

  if (value === '') {
    input.style.outline = '3px solid red';
  } else {
    input.style.outline = '3px solid lime';
  }
});

// 4 - submit event
form.addEventListener('submit', handleSubmit);

function checkInput() {
  const value = input.value.trim();

  // Клас success / error
  if (value.length >= 6) {
    input.classList.add('success');
    input.classList.remove('error');
  } else {
    input.classList.add('error');
    input.classList.remove('success');
  }

  // Outline при focus
  if (document.activeElement === input) {
    input.style.outline = value === '' ? '3px solid red' : '3px solid green';
  }

  // Оновлення span
  if (value === '') {
    span.textContent = 'Anonymous';
  } else {
    span.textContent = value;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const userName = input.value.trim();
  const isChecked = checkbox.checked;

  if (userName !== '' && isChecked) {
    const userData = {
      userName,
    };
    console.log('✅ Дані користувача:', userData);
  } else {
    console.warn('⚠️ Введіть ім’я і підтвердіть згоду');
  }

  // Очистка форми
  input.value = '';
  checkbox.checked = false;
  span.textContent = 'Anonymous';
  input.classList.remove('success', 'error');
  input.style.outline = 'none';
}
  */

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

/*const form = document.querySelector('.js-contact-form');

form.addEventListener('submit', onFormSabmit);
function onFormSabmit(event) {
  event.preventDefault();
  const [userName, accept] = event.target.elements;
  const userNameValue = userName.value.trim();
  if (userNameValue === '') {
    alert('Input cannot be empty');
    return;
  }
  if (!accept.checked) {
    alert('Check checkbox!!');
    return;
  }

  console.log(userNameValue);
  form.reset();
}

const inputName = document.querySelector('.js-username-input');
const outputName = document.querySelector('.js-username-output');
inputName.addEventListener('input', () => {
  const value = inputName.value.trim();
  outputName.textContent = value === '' ? 'Anonymous' : value;
});
*/

//Завдання 4:

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
const small = document.querySelector('.js-decrease');
const big = document.querySelector('.js-increase');
const square = document.querySelector('.box');
small.addEventListener('click', decreaseSquare);
big.addEventListener('click', increaseSquare);

// Отримуємо поточну ширину і висоту (як числа)
function getSize(el) {
  return {
    width: el.offsetWidth,
    height: el.offsetHeight,
  };
}

// Зменшити квадрат
function decreaseSquare() {
  const { width, height } = getSize(square);
  square.style.width = `${width - 20}px`;
  square.style.height = `${height - 20}px`;
}

// Збільшити квадрат
function increaseSquare() {
  const { width, height } = getSize(square);
  square.style.width = `${width + 20}px`;
  square.style.height = `${height + 20}px`;
}
