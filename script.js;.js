var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();


var updateClock = function(){
  var message = document.getElementByID('timeEvent');
  var lolcat = document.getElementByID('lolcat');
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
  var messageText;

if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME…";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
    messageText = "Good morning!";
} else if (time > evening) {
    messageText = "Good Evening!";
} else {
    messageText = "Good afternoon!";
}

message.innerText = messageText; 
lolcat.src = image;
	
	showCurrentTime();
};


var showCurrentTime = function() {
     // display the string on the webpage
     var clock = document.getElementById('clock');
     
     var currentTime = new Date();
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
     var seconds = currentTime.getSeconds();
     var meridian = "AM";
 
     // Set Hours
     if (hours >= noon){
          meridian = "PM";
     }
 
     if (hours > noon){
          hours = hours - 12;
     }
 
     // Set Minutes
     if (minutes < 10){
          minutes = "0" + minutes;
     }
 
     // Set Seconds
     if (seconds < 10){
          seconds = "0" + seconds;
     }
 
     // put together the string that displays the time
     var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
     clock.innerText = clockTime;
};
 
updateClock();
showCurrentTime();
 
var oneSecond = 1000;
 
setInterval( updateClock, oneSecond);