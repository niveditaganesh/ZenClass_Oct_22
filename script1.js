//Random NUmber Generator

button.onclick=random;
function random(event){
    do{
    var num = Math.floor(10000000 + Math.random() * 90000000);  
var digitOccurCount=0;
    num = num.toString();l=num.split('').length;
    for(i=0;i<l;i++){
        a=num.charAt(i);

    var digitCounter = function(num) {   
        if (num.length === 0) {
            return;
        }
        var currentNumber = num.charAt(0);
        if (currentNumber == a) {
            digitOccurCount++;
        }
        digitCounter(num.substring(1, num.length));
    }
  digitCounter(num); 
}}while(digitOccurCount!==8);
document.getElementById("div").innerHTML=num;

event.preventDefault();
 }