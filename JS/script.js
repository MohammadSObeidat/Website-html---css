let menu = document.querySelector('#menu');
let links = document.querySelector('#links');

menu.onclick = function() {
    links.classList.toggle('active')
}