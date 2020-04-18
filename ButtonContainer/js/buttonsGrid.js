var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");

btn5.onclick = function(){
    var bt1 = btn1.innerText;
    var bt2 = btn2.innerText;
    var bt3 = btn3.innerText;
    var bt4 = btn4.innerText;
    var bt6 = btn6.innerText;
    var bt7 = btn7.innerText;
    var bt8 = btn8.innerText;
    var bt9 = btn9.innerText;

    btn1.innerText = bt4;
    btn2.innerText = bt1;
    btn3.innerText = bt2;
    btn6.innerText = bt3;
    btn9.innerText = bt6;
    btn8.innerText = bt9;
    btn7.innerText = bt8;
    btn4.innerText = bt7;
};