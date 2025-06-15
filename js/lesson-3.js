//Завдання 1:   map()

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

/*const numbers = [1, 2, 3, 4, 5]
 const newNumbers = numbers.map(num => num ** 2)
console.log(newNumbers); //(5) [1, 4, 9, 16, 25]
*/

/*const numbers = [1, 2, 3, 4, 5]
const getDoubleNumbers =  (array) => array.map(num => num ** 2);
console.log(getDoubleNumbers(numbers)); //(5) [1, 4, 9, 16, 25]
*/

// Завдання 2: flatMap()

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

/* const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
 ];
 const newData = data.flatMap(dat => dat.values);
console.log(newData); //(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

/*const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
 ];
const getDoubleNumbers =  (array) => array.flatMap(dat => dat.values);
console.log(getDoubleNumbers(data));//(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

// Завдання 3:  some()

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

/*const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
 ];
 const newPeople = people.some( person => person.age < 20);
console.log(newPeople); //true
*/

/*const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
 ];
const getDoubleNumbers =  (array) => array.some(person => person.age < 20);
console.log(getDoubleNumbers(people)); //true
*/

// Завдання 4:  every()

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

/*const numbers = [2, 4, 6, 8, 10];
 const newNumbers = numbers.every(num => num % 2 === 0);
 console.log(newNumbers); //true
*/

/*const numbers = [2, 4, 6, 8, 10];
const getDoubleNumbers =  (array) => array.every(num => num % 2 === 0);
console.log(getDoubleNumbers(numbers)); //true
*/

// Завдання 5: find()

// Знайдіть перше непарне число

/*const numbers = [2, 4, 4, 6, 8]//[2, 1, 6, 8, 9, 10, 12];
 const newNumbers = numbers.find(num => num % 2 !== 0);
if (newNumbers !== undefined) {
  console.log(newNumbers); // 1
} else {
  console.log("No num");
}
*/

/*const numbers = [2, 4, 4, 6, 8]//[2, 1, 6, 8, 9, 10, 12];
const getDoubleNumbers =  (array) => {
  const result = array.find(num => num % 2 !== 0);
  return result !== undefined ? result : "No num";
};
console.log(getDoubleNumbers(numbers)); // 1
*/

// Завдання 6:  toSorted()

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

/*const numbersArray = [4, 2, 5, 1, 3];
 const newNumbersArray = numbersArray.toSorted((a, b) => a - b);
 console.log(newNumbersArray); //(5) [1, 2, 3, 4, 5]
 */

/*const numbersArray = [4, 2, 5, 1, 3];
const getDoubleNumbers =  (array) => array.toSorted((a, b) => a - b);
console.log(getDoubleNumbers(numbersArray)); //(5) [1, 2, 3, 4, 5]
*/

// Завдання 7:  toSorted()

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

/* const stringArray = ['banana', 'orange', 'apple', 'pear'];
const newStringArray = stringArray.toSorted((a, b) => a.localeCompare(b));
 console.log(newStringArray); //(4) ['apple', 'banana', 'orange', 'pear']
 */

/*const stringArray = ['banana', 'orange', 'apple', 'pear'];
const getDoubleNumbers =  (array) => array.toSorted((a, b) => a.localeCompare(b));
console.log(getDoubleNumbers(stringArray));
*/

// Завдання 8:  toSorted()

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

/*const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
 ];

const newUsers = users.toSorted((a, b) => a.age - b.age);
 console.log(newUsers);
 //[{name: "Bob", age: 19}, 
 // {name: "John", age: 27}, 
 // {name: "Jane", age: 31}]
 */

/* const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
 ]
const getDoubleNumbers =  (array) => array.toSorted((a, b) => a.age - b.age);
console.log(getDoubleNumbers(users));
 //[{name: "Bob", age: 19}, 
 // {name: "John", age: 27}, 
 // {name: "Jane", age: 31}]
 */

// Завдання 9:  filter()

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

/*const user = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
 ]
const newUser = user.filter(use => use.age > 20);
 console.log(newUser);
 //[{name: "John", age: 27}, {name: "Jane", age: 31}]
 */

/*const user = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
 ]
 const getDoubleNumbers =  (array) => array.filter(use => use.age > 20);
console.log(getDoubleNumbers(user));
//[{name: "John", age: 27}, {name: "Jane", age: 31}]
*/

// Завдання 10:   reduce()

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

/*const numbers = [1, 2, 3, 4, 5];
  const newNumbers = numbers.reduce((total, num) => total += num, 0);
  console.log(newNumbers); // 15
*/

/*const numbers = [1, 2, 3, 4, 5];
const getDoubleNumbers =  (array) => array.reduce((total, num) => total += num, 0);
console.log(getDoubleNumbers(numbers)); // 15
*/

//Завдання 10-A:  flatMap(),  filter(), includes()

// 1. Створити функцію getNames(array), яка приймає масив об'єктів
// і повертає масив імен усіх користувачів (поле name).
// 2. Напишіть функцію getUsersWithJs(array), яка приймає масив об'єктів і повертає масив тільки тих користувачів,
// у кого є тег "js" (властивість tags)
// 3. Написати функцію getUsersWithGender(array, gender), яка приймає масив і стать
// і повертає масив імен користувачів по цій статі (властивість gender)

/*const tweets = [
   { id: "000", 
     name: "Alex",
     gender: "male",
     likes: 5, 
     tags: ["js", "nodejs"] 
    },
   {
     id: "001",
     name: "Kate",
     gender: "female",
     likes: 2,
     tags: ["html", "css"],
   },
   {
     id: "002",
     name: "Maria",
     gender: "female",
     likes: 17,
     tags: ["html", "js", "nodejs"],
   },
   {
     id: "003",
     name: "Borys",
     gender: "male",
     likes: 8,
     tags: ["css", "react"],
   },
   {
     id: "004",
     name: "Jhon",
     gender: "male",
     likes: 0,
     tags: ["js", "nodejs", "react"],
   },
   {
     id: "005",
     name: "Anna",
     gender: "female",
     likes: 0,
     tags: ["js", "nodejs", "react"],
   },
   {
     id: "006",
     name: "Jhon",
    gender: "male",
     likes: 0,
     tags: ["js", "nodejs", "react"],
   },
 ];
const getNames = (array) => array.flatMap(arr => arr.name);
console.log(getNames(tweets)); 
//(7) ['Alex', 'Kate', 'Maria', 'Borys', 'Jhon', 'Anna', 'Jhon']
const getUsersWithJs = (array) => array.filter(arr => arr.tags.includes("js"));
console.log(getUsersWithJs(tweets));
//  (5) [{…}, {…}, {…}, {…}, {…}]
// 0: {id: '000', name: 'Alex', gender: 'male', likes: 5, tags: Array(2)}
// 1: {id: '002', name: 'Maria', gender: 'female', likes: 17, tags: Array(3)}
// 2: {id: '004', name: 'Jhon', gender: 'male', likes: 0, tags: Array(3)}
// 3: {id: '005', name: 'Anna', gender: 'female', likes: 0, tags: Array(3)}
// 4: {id: '006', name: 'Jhon', gender: 'male', likes: 0, tags: Array(3)}
// length: 5
// [[Prototype]]: Array(0)
 const getUsersWithGender = (array, gender) => 
    array.filter(arr => arr.gender === gender);
console.log(getUsersWithGender(tweets, "female"));
//(3) [{…}, {…}, {…}]
// 0: {id: '001', name: 'Kate', gender: 'female', likes: 2, tags: Array(2)}
// 1: {id: '002', name: 'Maria', gender: 'female', likes: 17, tags: Array(3)}
// 2: {id: '005', name: 'Anna', gender: 'female', likes: 0, tags: Array(3)}
// length: 3
// [[Prototype]]: Array(0)
*/

// 1. Створити функцію getNames(array), яка приймає масив об'єктів
// і повертає масив імен усіх користувачів (поле name).
// 2. Напишіть функцію getUsersWithJs(array), яка приймає масив об'єктів і повертає масив тільки тих користувачів,
// у кого є тег "js" (властивість tags)
// 3. Написати функцію getUsersWithGender(array, gender), яка приймає масив і стать
// і повертає масив імен користувачів по цій статі (властивість gender)

//Завдання 10-B: !!!

// Reverse. Напишіть функцію, яка розгортає масив у зворотному порядку.
// Будь ласка, не використовуйте array.reverse(), щоб зробити завдання цікавішим.

/*const alphData = ["a", "b", "c", "d", "e"];
const data = [10, 20, 30, 40, 50, 60];
const newData = [10, 26, 13, 48, 11, 2];
const reverseArray = (array) => array.map((value, index) => ({ index, value }))
       .toSorted((a, b) => b.index - a.index)
       .map(item => item.value);;
console.log(reverseArray(alphData));
// (5) ['e', 'd', 'c', 'b', 'a']
console.log(reverseArray(data));
// (6) [60, 50, 40, 30, 20, 10]
console.log(reverseArray(newData));
// (6) [2, 11, 48, 13, 26, 10]
*/


// Завдання 11:

// Розроби клас Calculator, який дозволяє виконувати арифметичні
// операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:
// const calc = new Calculator();

// const result = calc
//.number(10) // Встановлюємо початкове значення 10
//.add(5) // Додаємо 5 (10 + 5 = 15)
//.subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//.multiply(4) // Множимо на 4 (12 * 4 = 48)
//.divide(2) // Ділимо на 2 (48 / 2 = 24)
//.getResult(); // Отримуємо результат: 24

// console.log(result); // 24

/*class Calculator {
  constructor() {
    this.num = 0;
  }
  number(value) {
    this.num = value;
    return this;
  }
  getResult() {
    return this.num;
  }
  add(value) {
    this.num += value;
    return this;
  }
  substruct(value) {
    this.num -= value;
    return this;
  }
  divide(value) {if(value !== 0){
    this.num /= value;
    }
    return this;
  }
  multiply(value){
    this.num *= value;
   return this;
}
}

const calculator = new Calculator();
console.log(calculator);
calculator.number(10).add(5).substruct(3).divide(2).multiply(4); // 24
console.log(calculator.getResult());
*/

// Завдання 12: 

// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

/*class Client {
   #login;
   #email;
   constructor(login, email){
    this.#login = login;
    this.#email = email;
   } 
   get email(){return this.#email;}
   set email(newEmail){ this.#email = newEmail;}
   get login(){return this.#login;}
   set login(newLogin){this.#login = newLogin;}
}
const client = new Client("Mary", "Mary@ukr.net");
console.log(client); // Client {#login: 'Mary', #email: 'Mary@ukr.net'}
const client1 = new Client("Petya", "Petya@ukr.net");
console.log(client1); // Client {#login: 'Petya', #email: 'Petya@ukr.net'}
const client2 = new Client("Vasya", "Vasya@ukr.net");
console.log(client2); // Client {#login: 'Vasya', #email: 'Vasya@ukr.net'}
*/

/*class Client {
  #login;
  #email;

  constructor(login, email) {
    if (!this.#validateEmail(email)) {
      throw new Error("❌ Некорректный email!");
    }
    if (!this.#validateLogin(login)) {
      throw new Error("❌ Логин должен содержать минимум 3 символа!");
    }

    this.#login = login;
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    if (this.#validateEmail(newEmail)) {
      this.#email = newEmail;
    } else {
      console.log("❌ Некорректный email!");
    }
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    if (this.#validateLogin(newLogin)) {
      this.#login = newLogin;
    } else {
      console.log("❌ Логин должен содержать минимум 3 символа!");
    }
  }

  #validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Проверяет, что email имеет правильный формат
  }

  #validateLogin(login) {
    return login.length >= 3; // Проверяет, что логин не короче 3 символов
  }
}

// ✅ Создание клиентов
try {
  const client = new Client("Mary", "Mary@ukr.net");
  console.log(client);
  // Client {#login: 'Mary', #email: 'Mary@ukr.net'}
  const client1 = new Client("Pe", "Petya@ukr.net"); // ❌ Ошибка (логин слишком короткий)
} catch (error) {
  console.log(error.message);
}

const client2 = new Client("Vasya", "Vasya@mail.com"); // ✅ Корректный клиент
console.log(client2);
// Client {#login: 'Vasya', #email: 'Vasya@mail.com'}

client2.email = "invalid-email"; // ❌ Ошибка
client2.email = "valid@mail.com"; // ✅ Email успешно изменен
client2.login = "Al"; // ❌ Ошибка (логин короче 3 символов)
client2.login = "Alex"; // ✅ Логин успешно изменен
*/

// Завдання 13:
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

/*class Person {
  constructor(name, age, gender, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }
  getDetails() {
    return this;
  }
}
const person = new Person('Mary', 25, 'mail', 'Mary@ukr.net');
console.log(person);
// Person {name: 'Mary', age: 25, gender: 'mail', email: 'Mary@ukr.net'}

class Employee extends Person {
    constructor(name, age, gender, email, salary, department){
    super(name, age, gender, email);
     this.salary = salary;
     this.department = department;
    }
    getEmployeeDetails(){return this;}
}

const employee = new Employee('Mary', 25, 'mail', 'Mary@ukr.net', 5000, "accounting");
console.log(employee);
//Employee {name: 'Mary', age: 25, gender: 'mail', email: 'Mary@ukr.net', salary: 5000, …}
*/

/*const user = {
name: 'Mary', 
age: 25, 
gender: 'mail', 
email: 'Mary@ukr.net'
} 
const userAdd = {
salary: 5000, 
department: "accounting"
}

class Person {
  constructor(user) {
    this.name = user.name;
    this.age = user.age;
    this.gender = user.gender;
    this.email = user.email;
  }
  getDetails() {
    return this;
  }
}
const person = new Person(user);
console.log(person);
// Person {name: 'Mary', age: 25, gender: 'mail', email: 'Mary@ukr.net'}

class Employee extends Person {
    constructor(user, userAdd){
    super(user);
     this.salary = userAdd.salary;
     this.department = userAdd.department;
    }
    getEmployeeDetails(){return this;}
}

const employee = new Employee(user, userAdd);
console.log(employee);
//Employee {name: 'Mary', age: 25, gender: 'mail', email: 'Mary@ukr.net', salary: 5000, …}
*/

// Завдання 13-A:
// Напиши класс Notes який управляє коллекцієй нотаток у
// властивості items.
// Нотатка це  об'єкт з властивостями text, priority
// Додай класу статичну властивість Priority,
// в якій буде зберігатись об'єкт з пріорітетами ("high", "middle", "low").
// Додай методи getNotes(), addNote(note), removeNote(noteText)
// updatePriority(noteText, newPriority)

/*class Notes {
  static Priority = {
    HIGH: 'high',
    MIDDLE: 'middle',
    LOW: 'low',
  };

  constructor() {
    this.items = [];
  }

  getNotes() {console.table(this.items);
    return this.items;
    
  }
  addNote(note) {
    if (!note.text || !note.priority) {
      console.log('Error: Note have no `text` and `priority`!');
      return;
    }
    this.items.push(note);
    console.log(`Added note: ${note.text} (${note.priority})`);
  }
  removeNote(noteText) {
    const initialLength = this.items.length;
    this.items = this.items.filter(note => note.text !== noteText);
    if (this.items.length < initialLength) {
      console.log(`Note deleted: ${noteText}`);
    } else {
      console.log(`Note '${noteText}' not found!`);
    }
  }

  updatePriority(noteText, newPriority) {
    const note = this.items.find(note => note.text === noteText);
    if (note) {
      note.priority = newPriority;
      console.log(`Update priority note '${noteText}' → ${newPriority}`);
    } else {
      console.log(`Note '${noteText}' not found!`);
    }
  }
}
const note = new Notes();
note.addNote({ text: 'Note1', priority: Notes.Priority.LOW });
// Added note: Note1 (low)
note.addNote({ text: 'Note2', priority: Notes.Priority.LOW });
// Added note: Note2 (low)
note.addNote({ text: 'Note3', priority: Notes.Priority.HIGH });
// Added note: Note3 (high)

note.updatePriority('Note2', Notes.Priority.MIDDLE);
// Update priority note 'Note2' → middle
note.updatePriority('Note3', Notes.Priority.MIDDLE);
// Update priority note 'Note3' → middle
note.removeNote('Note1');
// Note deleted: Note1
note.getNotes();
*/