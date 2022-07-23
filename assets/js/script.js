let hoursDiv = document.querySelector('.hours');
let minutesDiv = document.querySelector('.minutes');
let secondDiv = document.querySelector('.second');
let situationDiv = document.querySelector('.situation');
let situationTime;

function digitalClock (){
    let onlineTime = new Date();
    let hours = onlineTime.getHours();
    let minutes = onlineTime.getMinutes();
    let second = onlineTime.getSeconds();
    situationTime = "AM"
    if(hours>11){
        hours = hours - 12;
        situationTime = "PM";
    }
    if(hours<10){
        hours = "0" + hours;
    }
    if(minutes<10){
        minutes = "0" + minutes;
    }
    if(second<10){
        second = "0" + second;
    }
    hoursDiv.innerHTML = hours;
    minutesDiv.innerHTML = minutes;
    secondDiv.innerHTML = second;
    situationDiv.innerHTML = situationTime;
    
    setTimeout(digitalClock,1000)
}
digitalClock()

function bodyColor(){
    let colors =[
    '#3498db',
    '#1abc9c',
    '#27ae60',
    '#e74c3c',
    '#f39c12',
    '#2c3e50',
    '#c23616',
    '#833471',
    '#006266',
    '#EE5A24'
]
    secondDiv.style.color = colors[Math.floor(Math.random()*10)]
    setTimeout(bodyColor,100);
}
bodyColor()
