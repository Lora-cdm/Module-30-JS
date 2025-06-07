var x = 5;
if (x > 2) {
    console.log("X eshte me i madh se 2");
} else {
    console.log("X eshte me i vogel se 2");
}

var y = 1;
if (y > 2) {
    console.log("Y eshte me i madh se 2");
} else {
    console.log("Y eshte me i vogel se 2");
}

var input = document.getElementById('inputid');
var btn = document.getElementById('btnid');
var text = document.getElementById('textid');

btn.onclick = function() {
    if(input.value>10){
        text.innerHTML = "Input value is bigger than 10"
    } else if(input.value=10){
        text.innerHTML = "Input value is equal to 10"
    } else {
        text.innerHTML = "Input value is smaller than 10"
    }
}

var input2 = document.querySelector('#input2');
var input3 = document.querySelector('#input3'); 
var btn2 = document.querySelector('#btn2id');
var answer = document.querySelector('#answer');

btn2.addEventListener("click", function() {
    answer.innerHTML = parseInt(input2.value) + parseInt(input3.value); 
});

function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM"
    
    if(hours>=noon){
        meridian = "PM";

    }
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    clock.innerText = clockTime;

};

var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);

// Declare these at the top so they're accessible everywhere
var wakeuptime = document.getElementById('WakeUpTimeSelector').value;
var dstime = document.getElementById('ClassTimeSelector').value;
var sleeptime = document.getElementById('SleepTimeSelector').value;

// Fix image element ID
function changeImage() {
    var time = new Date().getHours();
    var image = "img/ds_clock.png";
    var imageHTML = document.getElementById("Clockimage"); // Corrected ID

    if (time == wakeuptime) {
        image = "img/morning.gif";
    } else if (time == dstime) {
        image = "img/class.gif";
    } else if (time == sleeptime) {
        image = "img/night.gif";
    }

    imageHTML.src = image;
}

// Update the selected times and image when Save is clicked
function saveTimesAndUpdateImage() {
    wakeuptime = document.getElementById('WakeUpTimeSelector').value;
    dstime = document.getElementById('ClassTimeSelector').value;
    sleeptime = document.getElementById('SleepTimeSelector').value;
    changeImage();
}

// Set up the event listener ONCE
document.getElementById("SaveButton").addEventListener("click", saveTimesAndUpdateImage);

// Optionally, update image every second with the clock
setInterval(changeImage, 1000);