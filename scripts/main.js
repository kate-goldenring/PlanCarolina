var myHeading = document.querySelector('h1');
myHeading.textContent = 'Plan Your College Career!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mosaic.png') {
      myImage.setAttribute ('src','images/planner.jpg');
    } else {
      myImage.setAttribute ('src','images/mosaic.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Start planning your college career, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Start planning your college career, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}