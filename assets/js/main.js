// Loader Script

function pageLoaded() {
    let loaderSection = document.querySelector('.loader-section');
    loaderSection.classList.add('loaded');
}

document.onload = pageLoaded();

// Bar Menu Mobile

var boton = document.getElementById('boton-menu');
var menu = document.getElementById('container-links');
var icono = document.getElementById("icono-menu");
var enlaces = document.getElementsByClassName("navbar-link");

boton.addEventListener("click", function() {
    menu.classList.toggle("abierto");
    icono.classList.toggle("fa-rotate-90");
});

for (var i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener("click", function() {
        menu.classList.toggle("abierto");
    });
}

// Evaluamos si el click se hizo afuera del menu
document.addEventListener("click", function(e) { 
    var fuera = !menu.contains(e.target) && !boton.contains(e.target); 
    if (fuera) { 
        menu.classList.remove("abierto");
        icono.className = "fa-solid fa-bars-staggered";
    } 
});

// Up Button
var subir = document.getElementById('up-button');
subir.addEventListener("click", function() {
    window.scrollTo(0, 0);
});
window.addEventListener("scroll", function() {
    var distancia = window.scrollY || document.documentElement.scrollTop;
    if (distancia > 100) {
        subir.style.visibility = 'visible'
    } else {
        subir.style.visibility = 'hidden'
    }
});

// Chat-whatsapp
var chat_whatsapp = document.getElementById('chat-whatsapp');
chat_whatsapp.addEventListener("click", function() {
    window.open('https://wa.me/573236034290/?text=Hola%20Streamy%20Colombia,%20deseo%20mas%20informaci%C3%B3n%20de%20los%20planes%20y%20precios.', "_blanck");
});