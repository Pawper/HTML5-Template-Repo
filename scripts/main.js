let page1Button = document.querySelector('.page1Button');
let page2Button = document.querySelector('.page2Button');
let page3Button = document.querySelector('.page3Button');
let page1 = document.querySelector('#page1');
let page2 = document.querySelector('#page2');
let page3 = document.querySelector('#page3');
page1Button.addEventListener('click', function() {
  page1.classList.remove('closed');
  page2.classList.add('closed');
  page3.classList.add('closed');
})
page2Button.addEventListener('click', function() {
  page1.classList.add('closed');
  page2.classList.remove('closed');
  page3.classList.add('closed');
})
page3Button.addEventListener('click', function() {
  page1.classList.add('closed');
  page2.classList.add('closed');
  page3.classList.remove('closed');
})