// anonymous function called on window onload
window.onload = function(){
  var menu = document.getElementById('menu');
  var navLink = document.getElementsByClassName('navigation-bar')[0];

  // on menu click toggle the class
  menu.onclick = function(){
    navLink.classList.toggle('active');
  }
}
