// Declare global variables at the top

// Should declare global variables for CSS selectors
// Singular element on page - thinger is the class of the element. Only returns 1st match for selector. Can use any CSS selector.  Escape ':' by putting '\\:'
let thinger = document.querySelector('.thinger');
// Multiple elements on page - set is the class of the parent element though you can use any CSS selector. Stores as an array. Escape ':' by putting '\\:'. Note the DOM list returned is not live (does not reflect changes in the DOM)
let setOfButtons = document.querySelectorAll('.set button');

// For live DOM list & better performance use .getElementsByTagName or .getElementsById or .getElementsByClass - this example class is on img elements
let imageOverlays = document.getElementsByClassName('.overlays');

//event listener for singular element on page
thinger.addEventListener('click', function() {
  thinger.classList.remove('open'); // removes open class from elements with class .thinger
});
// event listener for multiple elements on page; uses a for loop
for (var i = 0; i < setOfButtons.length; i++) {
  setOfButtons[i].addEventListener('click', function() {
    thinger.classList.add('open'); // adds open class to elements with class .thinger
    thinger.innerHTML = 'Opened!' // changes HTML content of thinger to 'Opened!'
  });
};

// It's better to add classes rather than modify styles directly in JS, but you may want to modify attributes:
for (var i = 0; i < imageOverlays.length; i++) {
  imageOverlays[i].addEventListener('click', function() {
    imageOverlays[i].setAttribute ('src','images/clicked.png'); // changes src of .overlays img elements
  });
};

// using localStorage with variables
let setNameButton = document.querySelector('button .setName');
let usernameHeading = document.querySelector('h1 .username');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    usernameHeading.innerHTML = 'Beaker is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  usernameHeading.textContent = 'Beaker is cool, ' + storedName;
}

setNameButton.onclick = function() {
  setUserName();
}