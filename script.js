/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// const numberOFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

// const personalMovieDB = {
//    count: numberOFilms,
//    movies: {},
//    actors: {},
//    genres: {},
//    privat: false
// };

// const a = prompt('Один из последних просмотренных фиильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фиильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies [a] = b;
// personalMovieDB.movies [c] = d;

// console.log(personalMovieDB);  

// 2.Условия (if,else)


// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num< 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// } 

// // Тернарный оператор (?)

// (num === 50) ? console.log('Ok!') : console.log('Error');


// switch Строгое соответствие 

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50: 
//         console.log('Правдивое');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// 2.Циклы

// let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);


// let num = 50;

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }    
    
//     console.log(i);
// }


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// let numberOFilms;

// function start() {
//     numberOFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    
//     while (numberOFilms == '' || numberOFilms == null || isNaN(numberOFilms)) {
//         numberOFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    
//     }
// }

// start();
 
// const personalMovieDB = {
//    count: numberOFilms,
//    movies: {},
//    actors: {},
//    genres: {},
//    privat: false
// };



// function rememberMyFilms() {
//     for(let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фиильмов?', ''),
//                b = prompt('На сколько оцените его?', '');
            
//         if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies [a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// // rememberMyFilms();

// function detectPersonaLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель"); 
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман"); 
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// // detectPersonaLevel ();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//         }
// }

// showMyDB(personalMovieDB.privat);


// function writeYourGenres() {
//     for (let i=1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
//  }

//  writeYourGenres();


// console.log(personalMovieDB);  


// // 3.Функции

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hello");
// };

// logger();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };


// 4.Методы и свойства строк и чисел


// const str = "teSt";

// // console.log(str.toUpperCase()); 
// console.log(str.toLowerCase()); 
// console.log(str);


// Поиск подстроки:

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

 
// const logg = "Hello world";

// console.log(logg.slice(6));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));


// const num = 12.2;
// console.log(Math.round(num));


// const test= "12.2px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/




// Callback -функции

// function first() {
//     // Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);


// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() { 
//         console.log("Test");
//     }
// };
 
// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name); 

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);





const arr = [2, 3, 6, 8, 10];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));
