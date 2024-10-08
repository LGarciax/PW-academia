function switchTheme(){
    var stylesheet = document.getElementById("stylesheet");
    var themeIcon = document.getElementById("themeIcon");
    var logo = document.getElementById("logo");

    
    if (stylesheet.getAttribute("href") === "./css/light.css") {
        stylesheet.setAttribute("href", "./css/dark.css");
        themeIcon.setAttribute("src", "./img/sol.png");
        logo.setAttribute("src", "./img/logob.png");
        localStorage.setItem("theme", "dark");
        console.log("Theme set to dark");
        
    } else {
        stylesheet.setAttribute("href", "./css/light.css");
        themeIcon.setAttribute("src", "./img/lua.png");
        logo.setAttribute("src", "./img/logov.png");
        localStorage.setItem("theme", "light");
        console.log("Theme set to light");
    }
}

document.getElementById("toggleTheme").addEventListener("click", function(e) {
    e.preventDefault(); 
    switchTheme(); 
});

function loadTheme() {
    var savedTheme = localStorage.getItem("theme"); 
    var stylesheet = document.getElementById("stylesheet");
    var themeIcon = document.getElementById("themeIcon");
    var logo = document.getElementById("logo");

    console.log("Loaded theme from localStorage:", savedTheme);
    
    if (savedTheme === "dark" || !savedTheme) {
        stylesheet.setAttribute("href","./css/dark.css");
        themeIcon.setAttribute("src","./img/sol.png");
        logo.setAttribute("src","./img/logob.png");
    } else {
        stylesheet.setAttribute("href","./css/light.css");
        themeIcon.setAttribute("src","./img/lua.png");
        logo.setAttribute("src","./img/logov.png");
    }
}

window.onload = loadTheme;