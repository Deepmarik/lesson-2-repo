"use strict";
//Задание 1.
//пример 1
// alert("Задание 1");
/*let a=1,  b=1, c, d;
c=++a;
alert(c); //c=2
/* c=2  , тк к переменной с применяется префиксный инкремент, который увеличивает ее значение на "1".*/

//пример 2

//d=b++;
//alert(d); //d=1
/*результат: d=1, тк к операнду применен постфиксный инкремент, который увелиичивает операнд на 1, но результатом будет первоначальное значение d.*/

// пример 3
//c = 2 + ++a; 
//alert(c);// c=5
/* тк в примере 1 к операнду a уже применялся префиксный инкремент, то его значение  a=2, затем опять применяется префиксный инкремент, увеличивая значение а на 1, а=3 и прибавляется 2, в результате с=5;*/

//пример 4
//d = 2 + b++; 
//alert(d); //d=4
/* в примере 2 к b постфиксный инкремент и значение b=2,
b+2 , d=4*/
//alert(a);// а=3 в примере "3" а увеличили на 1 .
//alert(b);// b=3 в примере 2  и 4 к операнду b применилась операция постфиксного инкремента

//Задание 2.
//alert("Задание 2");
//a = 2; 
//let x = 1 + (a *= 2);
//alert(a);
//alert(x);
/* 1. сначала выполняется действие в скобках а=2*2 , a=4
    2. х=1+4 х=5*/

//Задание 3.
/*alert("Задание 3");
let e = 1,
	f = 1,
	c = 1;
e = parseInt(prompt("Введите первое число: "));
f = parseInt(prompt("Введите второе число: "));
if (e >= 0 && f >= 0) {
	c = e - f;
	alert("Разность равна  " + c);
} else if (e * f < 0) {
	c = parseInt(e + f);
	alert("Сумма равна  " + c);
} else {
	c = e * f;
	alert("Произведение равно  " + c);
};
//Задание 4.
alert("Задание 4");
let x, m, n;
m = parseInt(prompt("Введите первое число: "));
n = parseInt(prompt("Введите второе число: "));
//Сумма
function Summa(m, n) {
	return (m + n);
};
x = Summa(m, n);
alert("Сумма равна  " + x);
//Разность
function difference(m, n) {
	return (m - n);
};
x = difference(m, n);
alert("Разность равна  " + x);
//Произведение
function composition(m, n) {
	return (m * n);
};
x = composition(m, n);
alert("Произведение равно  " + x);
//Деление
function division(m, n) {
	return (m / n);
};
x = division(m, n);
alert("Частное равно  " + x);
*/
//Задание 5
alert("Задание 5");
let arg1, arg2, result, operation;
arg1 = parseInt(prompt("Введите первое число: "));
arg2 = parseInt(prompt("Введите второе число: "));
operation = prompt("Выберите одно из арифметических действий (сложение, вычитание, деление, умножение):  ");

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case 'сложение':
			return (arg1 + arg2);
			break;
		case 'вычитание':
			return (arg1 - arg2);
			break;
		case 'деление':
			return (arg1 / arg2);
			break;
		case 'умножение':
			return (arg1 * arg2);
			break;
	}
}
result = mathOperation(arg1, arg2, operation);
alert(result);
