"use strict";
//Задание 1.
//пример 1

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
//a = 2; 
//let x = 1 + (a *= 2);
//alert(a);
//alert(x);
/* 1. сначала выполняется действие в скобках а=2*2 , a=4
    2. х=1+4 х=5*/

//Задание 3.
let e=1, f=1, result=0;
e=prompt("Введите первое число: ");
f=prompt("Введите второе число: ");
if e>=0 || f>=0 
result=e-f;
alert("Разность =: "+result);

