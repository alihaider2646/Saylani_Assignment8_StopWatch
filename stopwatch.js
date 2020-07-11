// // function timer() {
// //   console.log("Running.....");
// // }
// // setInterval(timer, 1000);
// // ***************************  OR  ***************************
// setInterval(function () {
//   console.log("Running.....");
// }, 1000);
// // set interval function do argument leta hai pehla jo function hamain run karwana hai or dosra time in miliseconds
// // or ya function jab tak chalta raha ga jab tak hum isa khud dsa na rokain

// How to stop set interval function

// var count = 0;
// var interval;
// function timer() {
//   count++;
//   console.log(count);
// }
// interval = setInterval(timer, 1000);
// setTimeout(function () {
//   clearInterval(interval);  // we use this function to stop our set interval function
// }, 5000);

// function timeOut() {
//   console.log("Running!");
// }
// setTimeout(timeOut, 3000);
// // ***************************  OR  ***************************
// setTimeout(function () {
//   console.log("Running!");
// }, 3000); // here 3000 is 3 seconds

// // set interval function do argument leta hai pehla jo function hamain run karwana hai or dosra time in miliseconds
// // or ya function sirf aak baar chalta hai call karna ka baad ya farq hai setTimeInterval ma or setTimeOut ma
// // is function main ma jitna time define karonga ya function utna time ka baad run hoga bas aak bar

// StopWatch Code
var interval;
var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hourContent = document.getElementById("hour");
var minContent = document.getElementById("min");
var secContent = document.getElementById("sec");
var msecContent = document.getElementById("msec");
function timer() {
  msec++;
  msecContent.innerHTML = msec;
  if (msec >= 100) {
    sec++;
    secContent.innerHTML = sec;
    msec = 0;
  } else if (sec >= 60) {
    min++;
    minContent.innerHTML = min;
    sec = 0;
  } else if (min >= 60) {
    hour++;
    hourContent.innerHTML = hour;
    min = 0;
  }
}
function start() {
  interval = setInterval(timer, 10);
  document.getElementById("start").disabled = true;
  document.getElementById("pause").disabled = false;
  document.getElementById("reset").disabled = false;
}
function pause() {
  clearInterval(interval);
  document.getElementById("pause").disabled = true;
  document.getElementById("start").disabled = false;
  document.getElementById("reset").disabled = false;
}
function reset() {
  var hour = 0;
  var min = 0;
  var sec = 0;
  var msec = 0;
  hourContent.innerHTML = hour;
  minContent.innerHTML = min;
  secContent.innerHTML = sec;
  msecContent.innerHTML = msec;
  pause();
  document.getElementById("reset").disabled = true;
  document.getElementById("pause").disabled = false;
  document.getElementById("start").disabled = false;
}

