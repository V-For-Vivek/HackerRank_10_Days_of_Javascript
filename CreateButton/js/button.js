var count = 0;
var clickme = document.createElement('button');
clickme.id = "btn";
clickme.innerHTML = count;
document.body.appendChild(clickme);
var clickEvent = document.getElementById("btn");
clickEvent.onclick = function(){
    count = count+1;
    clickEvent.innerHTML = count
}