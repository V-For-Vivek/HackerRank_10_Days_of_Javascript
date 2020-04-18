var num0 = document.getElementById("btn0");
var num1 = document.getElementById("btn1");
var clr = document.getElementById("btnClr");
var eql = document.getElementById("btnEql");
var sum = document.getElementById("btnSum");
var sub = document.getElementById("btnSub");
var mul = document.getElementById("btnMul");
var div = document.getElementById("btnDiv");


num0.onclick = function(){
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + num0.innerHTML;
};
num1.onclick = function(){
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + num1.innerHTML;
};
sum.onclick = function(){
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + sum.innerHTML;
};
sub.onclick = function(){
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + sub.innerHTML;
};
mul.onclick = function(){
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + mul.innerHTML;
};
div.onclick = function(){
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + div.innerHTML;
};
clr.onclick = function(){
    document.getElementById("res").innerHTML = "";
};
eql.onclick = function(){

    var dataset = document.getElementById("res").innerHTML;
    var size = dataset.length;
    var opt = "";
    var binNum1 = "";
    var binNum2 = "";

    for(var i=0;i<size;i++)
    {
        if((dataset[i]=='1'||dataset[i]=='0') && opt =="")
        {
            binNum1 = binNum1 + dataset[i];
        }
        else if(dataset[i]=='+'||dataset[i]=='-'||dataset[i]=='*'||dataset[i]=='/')
        {
            opt = dataset[i];
        }
        else if((dataset[i]=='1'||dataset[i]=='0') && opt !="")
        {
            binNum2 = binNum2 + dataset[i];
        }
    }

    var no1 = parseInt(binNum1,2);
    var no2 = parseInt(binNum2,2);
    var result;
    
    if(opt==='+')
    {
        result = no1 + no2 ;
    }
    else if(opt==='-')
    {
        result = no1 - no2 ;
    }
    else if(opt==='*')
    {
        result = no1 * no2 ;
    }
    else if(opt==='/')
    {
        result = no1 / no2;
    }
    
    alert("result = "+result);

    document.getElementById("res").innerHTML = parseInt(result,10).toString(2);
};
