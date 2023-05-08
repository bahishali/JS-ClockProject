var userName = prompt("Adınız nedir?");
var user = document.querySelector("#myName");
user.innerHTML = userName;

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

window.onload = displayClock();
function displayClock() {
  var display = new Date().toLocaleTimeString();

  setTimeout(displayClock, 1000);
  var today = new Date();
  var datetime = days[today.getDay()];

  document.querySelector("#myClock").innerHTML = `${display} ${datetime}`;
}
