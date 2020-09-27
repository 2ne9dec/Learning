Треугольник
// let str = '#';

// for (let i = 1; i <= 7; i++) {
//     console.log(str);
//     str += '#';
// }

FizzBuzz
// const fizzbuzz = () => {
//     for (let i = 1; i <=100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz');
//         }
//         else if (i % 3 === 0) {
//             console.log('Fizz');
//         }
//         else if (i % 5 === 0) {
//             console.log('Buzz');
//         }
//         else {
//             console.log(i);
//         }
//     }
// }
// fizzbuzz();

Минимум
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(min(0, 10));
// console.log(min(0, -10));

Алгоритм-Bubble
// const arr = [1, 2, 4, 6, 8, 2, 1, 3, 7, 1];
// const bubble = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 const tmp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tmp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubble(arr));

Сортировка-массива-sort
// arr.sort((a, b) => b - a);
// console.log(arr);

Рандомное-число
// const randomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
// console.log(randomNum(1, 10));

Палиндром
// const str = 'racecar';
// const palindrome = str => {
//     str = str.toLowerCase();
//     return str === str.split('').reverse().join('');
// }
// console.log(palindrome(str));

Первая-бука-заглавная
// let str = 'vaDim';
// str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// console.log(str);

Замыкание
1-задача
// const fib = [0, 1, 1, 2, 3, 5, 8, 13];
// for (var i = 0; i < fib.length; i++) {
//     (function (j) {
//         setTimeout(() => {
//             console.log(`fib[${j}] = ${fib[j]}`);
//         }, 2000)
//     })(i)
// }

Замыкание
2-задача
// function funcOne(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(funcOne(1)(2));

IIFE-Immediate-Invoked-Function-Expression
// let result = [];
// for (var i = 0; i < 5; i++) {
//     (function () {
//         var j = i;
//         result.push(function () {
//         console.log(j);
//         });
//     })();
// }
// result[2]();
// result[4]();

Контекст-вызова-this
// const person = {
//     surname: "Старк",
//     knows: function (what, name) {
//         console.log(`Ты ${what} знаешь, ${name} ${this.surname}`);
//     },
//     };
//     const john = {
//     surname: "Сноу",
// };
// person.knows("все", "Бран");
// person.knows.call(john, "ничего не", "Джон");
// person.knows.apply(john, ["ничего не", "Джон"]);
// person.knows.call(john, ...["ничего не", "Джон"]);
// person.knows.bind(john, "ничего не", "Джон")();

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }
// const elena = new Person("Elena", 20);

Явныая-привязка-контекста
// function logThis() {
//   console.log(this);
// }
// const obj = { num: 42,};
// logThis.apply(obj);
// logThis.call(obj);
// logThis.bind(obj)();

Неявная-привязка-контекста-иплиссед
// const animal = {
//     legs: 4,
//     logThis: function () {
//         console.log(this);
//     },
// };
// animal.logThis();

// function Cat (color) {
//     this.color = color;
//     console.log('This', this);
//     (() => console.log('Arrow this', this))()
// }
// new Cat ('red');