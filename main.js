// Задачи на основы языка JavaScript

// 1
// let num = 3;
// alert(num);

// 2
// let a = 10;
// let b = 2;
// alert(a + b);
// alert(a - b);
// alert(a * b);
// alert(a / b);

// 3
// let c = 15;
// let d = 2;
// let result = c + d;
// alert(result);

// 4
// let a = 10;
// let b = 2;
// let c = 5;
// let sum = a + b + c;
// alert(sum);

// 5
// let a = 17;
// let b = 10;
// let c = a - b;
// let d = 7;
// let result = c + d;
// alert(result);

// 6
// let str = "Привет, Мир!";
// alert(str);

// 7
// let str1 = "Привет, ";
// let str2 = "Мир!";
// let sumStr = str1 + str2;
// alert(sumStr);

// 8
// let str = "Привет, ";
// let name = "Vlad!";
// let sumStr = str + name;
// alert(sumStr);

// 9
// let age = 26;
// alert("Мне " + age + " лет");

// 10
// let name = prompt("Введіть ім'я користувача: ");
// alert(`Ваше ім\'я: ${name} !`);

// 11
// let str = prompt("Введіть будь-яке число: ");
// let str1 = str ** 2;
// alert("Квадрат числа: " + str + ` = ${str1}`);

// 12
// let str = "abcde";
// alert(str[0]); //выведем букву 'a'
// alert(str[2]); //выведем букву 'c'
// alert(str[4]); //выведем букву 'e'

// 13
// let num = "12345";
// alert(num[0] * num[1] * num[2] * num[3] * num[4]);
// alert(num[0] + num[1] + num[2] + num[3] + num[4]);

// 14
// alert(60 * 60);
// alert(24 * 60 * 60);
// alert(30 * 24 * 60 * 60);

// 15
// let now = new Date();
// let hours = now.getHours();
// let minutes = now.getMinutes();
// let seconds = now.getSeconds();
// alert(now);

// 16
// let a = 12;
// let b = a ** 2;
// alert(b);

// 17
// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

// 18
// let num = 10;
// num++;
// num++;
// num--;
// alert(num);

// Задачи на основы работы с массивами и объектами

// 1
// let arr = ["a", "b", "c"];
// alert(arr);

// 2
// let arr = ["a", "b", "c"];
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

// 3
// let arr = ["a", "b", "c", "d"];
// alert(arr[0] + "+" + arr[1]);
// alert(arr[2] + "+" + arr[3]);

// 4
// let arr = [2, 5, 3, 9];
// alert(arr[0] * arr[1] + arr[2] * arr[3]);

// 5
// let obj = { a: 1, b: 2, c: 3 };
// alert(obj["c"]);
// console.log(Object.values(obj["c"]));

// 6
// let obj = { Коля: "1000", Вася: "500", Петя: "200" };
// alert(
//   "Заробітна плата Петі: " +
//     obj["Петя"] +
//     "," +
//     " Заробітна плата Колі: " +
//     obj["Коля"]
// );

// 7
// let arr = [
//   0,
//   "понедельник",
//   "вторник",
//   "среда",
//   "четверг",
//   "пятница",
//   "суббота",
//   "воскресенье",
// ];
// alert(arr[4]);

// 8
// let arr = [
//   0,
//   "понедельник",
//   "вторник",
//   "среда",
//   "четверг",
//   "пятница",
//   "суббота",
//   "воскресенье",
// ];
// let day = 3;
// alert(arr[day]);

// 9
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// alert(arr[1][0]);

// 10
// let obj = { js: ["jQuery", "Angular"], php: "hello", css: "world" };
// alert(obj["js"][0]);

// 11
// let arr = {
//   ru: [
//     "понедельник",
//     "вторник",
//     "среда",
//     "четверг",
//     "пятница",
//     "суббота",
//     "воскресенье",
//   ],
//   en: [
//     "monday",
//     "tuesday",
//     "wednesday",
//     "thursday",
//     "friday",
//     "saturday",
//     "sunday",
//   ],
// };
// alert(arr["ru"][0] + " " + arr["en"][2]);

// 12
// let arr = {
//   ru: [
//     "понедельник",
//     "вторник",
//     "среда",
//     "четверг",
//     "пятница",
//     "суббота",
//     "воскресенье",
//   ],
//   en: [
//     "monday",
//     "tuesday",
//     "wednesday",
//     "thursday",
//     "friday",
//     "saturday",
//     "sunday",
//   ],
// };
// let lang = arr["ru"];
// let day = 3;
// alert(lang[day]);
// // # 1
// let a = 0;
// if (a == 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }

// Задачи на конструкции if-else, switch-case в JavaScript

// 1
// let c = 1;
// if (c == 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }

// let b = -3;
// if (b == 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }

// 2
// let b = 1;
// if (b > 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }

// let a = 0;
// if (a > 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }

// let c = -3;
// if (c > 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }

// 3
// let c = -3;
// if (c < 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }
// let c = 0;
// if (c < 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }
// let c = 1;
// if (c < 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }

// 4
// let a = 1;
// if (a >= 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }
// let a = 0;
// if (a >= 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }
// let a = -3;
// if (a >= 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }

// 5
// let a = 1;
// if (a <= 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }
// let a = 0;
// if (a <= 0) {
//   alert("Врно");
// } else {
//   alert("Не вірно");
// }
// let a = -3;
// if (a <= 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }

// 6
// let a = 1;
// if (a != 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }
// let a = 0;
// if (a != 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }
// let a = -3;
// if (a != 0) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }

// 7
// let a = "test";
// if (a == "test") {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }
// let a = "тест";
// if (a == "test") {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }
// let a = 3;
// if (a == "test") {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }

// 8
// let a = "1";
// if (a === "1") {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }
// let a = 1;
// if (a === "1") {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }
// let a = 3;
// if (a === "1") {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }

// 9
// let test = true;
// if (test == true) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }
// let test = false;
// if (test == true) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }

// 10
// let test = true;
// if (test != true) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }
// let test = false;
// if (test != true) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }

// 11
// let a = 2;
// if (a >= 0 && a < 5) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }
// let a = 5;
// if (a >= 0 && a < 5) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }
// let a = 0;
// if (a >= 0 && a < 5) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }
// let a = -3;
// if (a >= 0 && a < 5) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }

// 12
// let a = 2;
// if (a == 0 || a == 2) {
//   alert(`a= ${a + 7}`);
// } else {
//   alert(`a= ${a / 10}`);
// }
// let a = 5;
// if (a == 0 || a == 2) {
//   alert(`a= ${a + 7}`);
// } else {
//   alert(`a= ${a / 10}`);
// }
// let a = 0;
// if (a == 0 || a == 2) {
//   alert(`a= ${a + 7}`);
// } else {
//   alert(`a= ${a / 10}`);
// }
// let a = -3;
// if (a == 0 || a == 2) {
//   alert(`a= ${a + 7}`);
// } else {
//   alert(`a= ${a / 10}`);
// }

// 13
// let a = 1;
// let b = 3;
// if (a <= 1 && b >= 3) {
//   alert(`a+b= ${a + b}`);
// } else {
//   alert(`a-b= ${a - b}`);
// }
// let a = 0;
// let b = 6;
// if (a <= 1 && b >= 3) {
//   alert(`a+b= ${a + b}`);
// } else {
//   alert(`a-b= ${a - b}`);
// }
// let a = 3;
// let b = 5;
// if (a <= 1 && b >= 3) {
//   alert(`a+b= ${a + b}`);
// } else {
//   alert(`a-b= ${a - b}`);
// }

// 14
// let a = prompt("Введіть число a: ");
// let b = prompt("Введіть число b: ");
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   alert("Вірно");
// } else {
//   alert("Не вірно");
// }

//15
// let num = 1;
// switch (num) {
//   case 1:
//     alert("зима");
//     break;
//   case 2:
//     alert("лето");
//     break;
//   case 3:
//     alert("осень");
//     break;
//   case 4:
//     alert("весна");
//     break;
//   default:
//     alert("Введите число от 1 до 4 ");
//     break;
// }

// 16
// let day = 13;
// if (day <= 10) {
//   let decad = 1;
//   alert("Це число потряпляє в " + decad + " декаду місяця");
// }
// if (day >= 11 && day <= 20) {
//   let decad = 2;
//   alert("Це число потряпляє в " + decad + " декаду місяця");
// }
// if (day >= 21 && day <= 30) {
//   let decad = 3;
//   alert("Це число потряпляє в " + decad + " декаду місяця");
// }

// 17
// let month = 3;
// if (month == 12 || month <= 2) {
//   alert("Зима");
// }
// if (month >= 3 && month <= 5) {
//   alert("Весна");
// }
// if (month >= 6 && month <= 8) {
//   alert("Літо");
// }
// if (month >= 9 && month <= 11) {
//   alert("Осінь");
// }

// 18
// let str = "abcde";
// if (str.charAt(0) === "a") {
//   alert("Yes");
// } else {
//   alert("No");
// }

// 19
// let str = "12345";
// if (str.charAt(0) === "1" || str.charAt(0) === "2" || str.charAt(0) === "3") {
//   alert("Yes");
// } else {
//   alert("No");
// }

// 20
// let str = "257";
// let result =
//   Number(str.charAt(0)) + Number(str.charAt(1)) + Number(str.charAt(2));
// alert(result);

// 21
// let str = "173443";
// if (
//   Number(str.charAt(0)) + Number(str.charAt(1)) + Number(str.charAt(2)) ==
//   Number(str.charAt(3)) + Number(str.charAt(4)) + Number(str.charAt(5))
// ) {
//   alert("Yes");
// } else {
//   alert("No");
// }

// Задачи на циклы while, for в JavaScript

// 1
// let i = 1;
// while (i <= 100) {
//   document.write(i + "<br>");
//   i++;
// }

// 2
// let i = 11;
// while (i <= 33) {
//   document.write(i + "<br>");
//   i++;
// }

// 3
// let i = 1;
// while (i < 100) {
//   if (i % 2 == 0) {
//     document.write(i + "<br>");
//   }
//   i++;
// }

// 4
// let i = 1;
// let result = 0;
// for (i = 1; i < 100; i++) {
//   result = result + i;
// }
// document.write(result);

// 5
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   document.write(arr[i] + "<br>");
// }

// 6
// let arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   result = result + arr[i];
// }
// document.write(result + "<br>");

// 7
// let obj = { green: "зеленый", red: "красный", blue: "голубой" };
// for (key in obj) {
//   document.write(key + ", ");
// }
// for (key in obj) {
//   document.write(obj[key] + ", ");
// }
// document.write("<br/>");

//8
// let obj = { Коля: "200", Вася: "300", Петя: "400" };
// for (key in obj) {
//   document.write(
//     " " + key + " - заробітна плата" + " " + obj[key] + "доларів" + ","
//   );
// }

//9
// let arr = [2, 15, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i++) {
//   if (i > 3 && i < 10) {
//     document.write(arr[i] + "<br>");
//   }
// }

// // #10
// let arr = [-7, 15, 11, 5, -11, 13, 2, 7, -7];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 0) {
//     result = result + arr[i];
//   }
// }
// document.write(result);

// 11
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i++) {
//   if ((arr[i] = 4)) {
//     document.write("Yes");
//   } else {
//     document.write("No");
//   }
// }

// 12
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//   let str = arr[i] + "";
//   if (str[0] == "1" || str[0] == "2" || str[0] == "5") {
//     document.write(arr[i] + ", ");
//   }
// }

// 13
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = "";
// for (let i = 0; i < arr.length; i++) {
//   str = str + "-" + arr[i];
// }
// document.write(str);

// 14
// let days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// for (i = 0; i < days.length; i++) {
//   if (i == 5 || i == 6) {
//     document.write("<strong>" + days[i] +"</strong>" + " ");
//   } else {
//     document.write(days[i] + " ");
//   }
// }

// 15
// let days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// let day = 4;
// for (i = 0; i < days.length; i++) {
//   if (i == day) {
//     document.write("<em>" + days[i] + "</em>" + " ");
//   } else {
//     document.write(days[i] + " ");
//   }
// }

// 16
// let n = 1000;
// let num = 0;
// while (n > 50) {
//   num++;
//   n = n / 2;
// }
// document.write(n + "  ");
// document.write("<strong>" + num + "</strong>");

// Задачи на математические функции JavaScript

// 1
// let a = 10;
// let b = 3;
// alert(a % b);
// document.write(a % b);

// 2
// let a = 10;
// let b = 2;
// var rest = a % b;
// if (rest != 0) {
//   alert("Делится с остатком " + rest);
// } else {
//   alert("Делится, результат деления: " + a / b);
// }

// 3
// alert("st =" + 2 ** 10);

// 4
// document.write(Math.sqrt(245));

// 5
// let arr = [4, 2, 5, 19, 13, 0, 10];
// let result = 0;
// for (i = 0; i < arr.length; i++) {
//   c = Math.sqrt((result = result + arr[i] ** 3));
// }
// document.write(c);

// 6
// let c = Math.sqrt(379);
// document.write(Math.round(c) + "<br>");
// document.write(c.toFixed(2) + "<br>");
// document.write(c.toFixed(3) + "<br>");

// 7
// let c = Math.sqrt(587);
// let b = Math.floor(c);
// let a = Math.ceil(c);
// alert(a + " " + b);

// 8
// document.write(Math.max(4, -2, 5, 19, -130, 0, 10) + "<br>");
// document.write(Math.min(4, -2, 5, 19, -130, 0, 10) + "<br>");

// 9
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// alert(getRandomInt(1, 100));

// 10
// let arr = [];
// for (i = 0; i < 10; i++) {
//   arr[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// }
// alert(arr);

// 11
// let a = -3;
// let b = 5;
// document.write(Math.abs(a - b));

// 12
// let a = 3;
// let b = 5;
// let c = a - b;
// alert(Math.abs(c));

// let a = 6;
// let b = 1;
// let c = a - b;
// alert(Math.abs(c));

// 13
// let arr = [12, 15, 20, 25, 59, 79];
// let result = 0;
// for (i = 0; i < arr.length; i++) {
//   result = result + arr[i];
// }
// document.write(result / 6);

// 14
// let a = 10;
// let b = 1;
// if (a == 0) {
//   alert("Факториал числа 0! = 1");
// } else {
//   for (i = 1; i <= a; i++) {
//     b *= i;
//   }
// }
// alert("Факториал числа " + a + "! = " + b);

// Задачи на функции работы со строками в JavaScript

// 1
// let str = "js";
// alert(str.toUpperCase());

// 2
// let str = "JS";
// alert(str.toLowerCase());

// 3
// let str = "я учу javascript!";
// alert(str.length);

// 4
// let str = "я учу javascript!";
// alert(str.substring(2, 5) + "  " + str.substring(6, 16));
// alert(str.slice(2, 5) + "  " + str.slice(6, 16));

// 5
// let str = "я учу javascript!";
// alert(str.indexOf("учу"));

// 6
// let str = "я учу javascript!";
// let n = 7;
// if (str.length > n) {
//   let result = str.slice(0, n + 1);
//   alert(result + "...");
// } else {
//   result = str;
//   alert(result);
// }

// 7
// let str = "Я-учу-javascript!";
// str = str.replace(/-/gi, "!");
// alert(str);

// 8
// let str = "я учу javascript!";
// let arr = str.split(" ");
// alert(arr);

// 9
// let str = "я учу javascript!";
// let arr = str.split("");
// alert(arr);

// 10
// let date = "2025-12-31";
// let date2 = date.split("-");
// alert(date2[2] + "-" + date2[1] + "-" + date2[0]);

// 11
// let arr = ["я", "учу", "javascript", "!"];
// let str = arr.join("+");
// alert(str);

// 12
// let str = "я учу javascript!";
// let str2 = str.slice(0, 1).toUpperCase() + str.slice(1);
// document.write(str2);

// 13
// let str = "я учу javascript!";
// let str2 = str.split("  ");
// let arr = str2;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[0] != arr[i]) {
//     arr[i] = arr[i].toUpperCase();
//   }
// }
// let result = arr.join("  ");
// alert(result);

// 14
// let str = "var_test_text";
// let str2 = str.split("_");
// let arr = str2;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[0] != arr[i]) {
//     arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
//   }
// }
// let result = arr.join("");
// document.write(result);

// Задачи на функции работы с массивами в JavaScript

// 1
// let arrA = [1, 2, 3];
// let arrB = [4, 5, 6];
// let c = arrA.concat(arrB);
// alert(c);

// 2
// let arrA = [1, 2, 3];
// arrA.reverse();
// console.log(arrA);
// document.write(arrA);

// 3
// let arrA = [1, 2, 3];
// arrA.push(4, 5, 6);
// console.log(arrA);

// 4
// let arrA = [1, 2, 3];
// arrA.unshift(4, 5, 6);
// console.log(arrA);

// 5
// let arr = ["js", "css", "jq"];
// let elem = arr.shift();
// console.log(elem);

// 6
// let arr = ["js", "css", "jq"];
// let elem = arr.pop();
// console.log(elem);

// 7
// let arr = [1, 2, 3, 4, 5];
// let sub = arr.slice(0, 3);
// console.log(sub);

// 8
// let arr = [1, 2, 3, 4, 5];
// let sub = arr.slice(3);
// console.log(sub);

// 9
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

// 10
// let arr = [1, 2, 3, 4, 5];
// arr.splice(0, 1);
// arr.splice(-1, 1);
// console.log(arr);

// 11
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, "a", "b", "c");
// console.log(arr);

// 12
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, "a", "b");
// arr.splice(5, 0, "c");
// arr.splice(-1, 0, "e");
// console.log(arr);

// 13
// let arr = [3, 4, 1, 2, 7];
// console.log(arr.sort());

// 14
// let obj = { js: "test", jq: "hello", css: "world" };
// console.log(Object.keys(obj));

// Практика на комбинации стандартных функций JavaScript
// 1
// let str = "hello world!";
// str = str[0].toUpperCase() + str.substr(1);
// alert(str);

// let str = "hello world!";
// str = str.split("");
// str[0] = str[0].toUpperCase();
// let result = str.join("");
// alert(result);

// 2
// let str = "123456";
// b = str.split("").reverse().join("");
// alert(b);

// 3
// let str =
//   "http://old.code.mu/tasks/javascript/base/praktika-na-kombinacii-standartnyh-funkcij-javascript.html";
// if (str.substr(0, 7) == "http://") {
//   alert("Да");
// } else {
//   alert("Нет");
// }

// 4
// let str = "index.html";
// if (str.substr(-5) == ".html") {
//   alert("Да");
// } else {
//   alert("Нет");
// }

// Задачи на основы работы с пользовательскими функциями в JavaScript

// 1
// let num = 3;
// function sqr(num) {
//   return num * num;
// }
// alert(sqr(num));

// 2
// let num = 3;
// function sum(num) {
//   return num + num;
// }
// alert(sum(num));

// 3
// let a = 2;
// let b = 10;
// let c = 4;
// function sumMult() {
//   return (a + b) / c;
// }
// alert(sumMult());

// 4
// function day(num) {
//   let day = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
//   return day[num - 1]; //потому-что с 0 отчет
// }
// let days = day(3);
// alert(days);

// function week(day) {
//   let obj = { 1: "пн", 2: "вт", 3: "ср", 4: "чт", 5: "пт", 6: "сб", 7: "вс" };
//   return obj[day];
// }
// let days = week(3);
// console.log(days);

// Задачи на приемы работы с флагами на JavaScript

// 1
// let flag = true;
// let a = [1, 8, 11, , 5, 5, 6, 5, 7, 8, 6, 5];
// for (i = 0; i < a.length; i++) {
//   if (a[i] == 5) {
//     flag = true;
//     break;
//   }
// }
// if ((flag = true)) {
//   alert("Yes");
// } else {
//   alert("No");
// }

// 2
// let a = 31;
// let flag = false;
// for (var i = 2; i < a; i++) {
//   if (a % i == 0) {
//     flag = true;
//     break;
//   }
// }
// if (flag == true) {
//   alert("true");
// } else {
//   alert("false");
// }

// 3
// let arr = [4, 9, 8, 56, 32, 4, 8, 8, 93, 2, 12, 3, 5, 6, 5, 7, 8];
// let flag = false;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] == arr[i - 1]) {
//     flag = true;
//     break;
//   }
// }
// if (flag == true) {
//   alert("true");
// } else {
//   alert("false");
// }

// Приемы работы с логическими значениями

// 1
// let a = prompt("Введіть число а: ");
// let b = prompt("Введіть число b: ");
// function c(a, b) {
//   if (a == b) {
//     alert("true");
//   } else {
//     alert("false");
//   }
// }
// alert(c(a, b));

// 2
// let a = prompt("Введіть число а: ");
// let b = prompt("Введіть число b: ");
// function c(a, b) {
//   if (a + b > 10) {
//     alert("true");
//   } else {
//     alert("false");
//   }
// }
// alert(c(a, b));

// let a = prompt("Введіть число а: ");
// let b = prompt("Введіть число b: ");
// function c(a, b) {
//   return a + b > 10;
// }
// alert(c(a, b));

// 3
// let c = prompt("Введіть число c: ");
// function func() {
//   return c < 0;
// }
// alert(func());

// Задачи на приемы работы с циклами на JavaScript

// 1
// let str = "";
// for (i = 1; i < 10; i++) {
//   str = str + i;
// }
// alert(str);

// 2
// let str = "";
// for (i = 9; i > 0; i--) {
//   str = str + i;
// }
// alert(str);

// 3
// let str = "";
// for (i = 1; i < 10; i++) {
//   str = str + i + "-";
// }
// alert(str);

// 4
// let str = "";
// for (i = 0; i < 20; i++) {
//   str = str + "x";
//   document.write(str + "<br>");
// }

// 5
// for (i = 1; i <= 9; i++) {
//   for (j = 1; j <= i; j++) {
//     document.write(i);
//   }
//   document.write("<br>");
// }

// 6
// let str = "";
// for (i = 0; i < 5; i++) {
//   str = str + "xx";
//   document.write(str + "<br>");
// }

// Задачи на приемы работы с массивами на JavaScript

// 1
// let arr = [];
// let str = "x";
// for (i = 0; i < 15; i++) {
//   arr.push(str);
//   str = str + "x";
//   document.write(arr + "<br>");
// }

// 2
// let arr = [];
// let str = "";
// for (i = 1; i < 15; i++) {
//   for (j = 0; j < i; j++) {
//     str = str + i;
//     arr.push(str);
//   }
//   document.write(arr + "<br>");
// }

// 3
// function arrayFill(value, length) {
//   let arr = [];
//   for (i = 0; i < length; i++) {
//     arr.push(value);
//   }
//   return arr;
// }
// document.write(arrayFill("xy", 15));

// 4
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function func(arr) {
//   sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum > 10) {
//       return i + 1;
//     }
//   }
// }
// document.write(func(arr));

// 5
// let arr = [1, 3, 5, 6, 7, 9];
// let result = [];
// for (i = arr.length - 1; i >= 0; i--) {
//   result.push(arr[i]);
// }
// document.write(result);

// 6
// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (i = 0; i < arr.length; i++) {
//   for (j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
// }
// alert(sum);

// 7
// let arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// let sum = 0;
// for (i = 0; i < arr.length; i++) {
//   for (j = 0; j < arr[i].length; j++) {
//     for (k = 0; k < arr[i][j].length; k++) {
//       sum += arr[i][j][k];
//     }
//   }
// }
// alert(sum);

// let arr = [];
// for (i = 1; i < 10; i++) {
//   let str = "";
//   for (j = 0; j < i; j++) {
//     str += i;
//   }
//   arr.push(str);
//   document.write(arr + "<br>\n");
// }
