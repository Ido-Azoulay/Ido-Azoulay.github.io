//Switch between themes
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.querySelector('#theme-switch');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('dark-theme');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('dark-theme');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});


// rest form on pressing the send button
function restForm() {
  document.getElementById("contact-form").submit();
  document.getElementById("contact-form").reset();
}


function showMenu() {
  var menu = document.getElementById("header__nav");
  var open = document.getElementById("open");
  var close = document.getElementById("close");
  var navLink = document.getElementsByClassName(".header__nav-list-item")
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";
  } else {
    menu.style.display = "flex";
    close.style.display = "block";
    open.style.display = "none";
  }
}

  document.querySelectorAll('.header__nav .header__nav-list-item').forEach((el) => {
    el.onclick = () => {
      if (window.innerWidth < 889) {
        document.querySelector('.header__nav').style.display = 'none';
        document.getElementById("open").style.display =  "block";
        document.getElementById("close").style.display =  "none";
      }
    }
  })