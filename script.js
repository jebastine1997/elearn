// function darkMode() {
//     var element = document.body;
//     var content = document.getElementById("DarkModetext");
//     element.className = "dark-mode";
//     content.innerText = "Dark Mode is ON";
//   }
//   function lightMode() {
//     var element = document.body;
//     var content = document.getElementById("DarkModetext");
//     element.className = "light-mode";
//     content.innerText = "Dark Mode is OFF";
//   }

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }