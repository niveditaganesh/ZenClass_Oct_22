//Date Manipulation

form.onsubmit=calc;

function calc(event){
    var temp=document.getElementById('dob');
    var date1=new Date(temp.value)
    // alert(date1)
    
var date2 = new Date();


var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
var days = Math.round(Math.abs((date1 - date2) / oneDay));

var years=Math.abs(date1.getFullYear()-date2.getFullYear())

var allMonths= date1.getMonth() - date2.getMonth() + (12 * (years));

var partialMonths = date2.getMonth() - date1.getMonth();
if (partialMonths < 0) {
    years--;
    partialMonths = partialMonths + 12;
}

var partialDays = date2.getDate() - date1.getDate();
if (partialDays < 0) {
    years--;
    partialDays = partialDays + 1;
}
var e=days/7
var week=Math.floor(e);
var extra=e-Math.floor(e);
var d=Math.round(extra*7)


var total = `${years} years and ${partialMonths} months and ${partialDays+1} days since your birth`
var weeks=`${week} weeks and ${d} days since birth`

var hours=days*24;//1day=24hr
var minutes=hours*60;//1hour=60min
var seconds=minutes*60;//1 mn=60sec
var milliseconds=seconds*1000;//1sec=1000msec
console.log(total);
console.log(weeks)
console.log('Months', (years*12)+partialMonths);
console.log('days', days);

console.log('hours', hours);
console.log('minutes', minutes);
console.log('seconds', seconds);
console.log('milliseconds', milliseconds);


    document.getElementById('sent').innerHTML=total;
    document.getElementById('week').innerHTML=weeks;
    document.getElementById('months').innerHTML=`Months:${(years*12)+partialMonths}`;
    document.getElementById('days').innerHTML=`days: ${days}`;
    document.getElementById('hours').innerHTML=`hours ${hours}`;
    document.getElementById('minutes').innerHTML=`minutes ${minutes}`;
    document.getElementById('seconds').innerHTML=`seconds: ${seconds}`;
    document.getElementById('millisec').innerHTML=`milliseconds: ${milliseconds}`;

    event.preventDefault();
    }