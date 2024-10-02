const hamburger = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-xmark");
const ul = document.querySelector(".indices ul");
const indices = document.querySelector(".indices");
const nav = document.querySelector("nav");

hamburger.addEventListener("click",openSidebar);
close.addEventListener("click",closeSidebar);

function openSidebar(){
    // ul.style.transform = "translate(100vw)";
    ul.style.display = "flex";
    indices.style.display = "initial";
    hamburger.style.display = "none";
    close.style.display = "block";
    nav.style.marginBottom = "180px";
}
function closeSidebar(){
    // ul.style.transform = "translate(100vw)";
    ul.style.display = "none";
    indices.style.display = "flex";
    hamburger.style.display = "block";
    nav.style.marginBottom = "initial";
    // close.style.display = "block";
}