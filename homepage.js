// SCROLL SUAVE
function scrollSection(id){
document.getElementById(id)
.scrollIntoView({behavior:"smooth"});
}

// ANIMAÇÃO AO DESCER
function reveal(){

const reveals = document.querySelectorAll(".reveal");

reveals.forEach(section => {

const windowHeight = window.innerHeight;
const elementTop = section.getBoundingClientRect().top;
const visible = 120;

if(elementTop < windowHeight - visible){
section.classList.add("active");
}

});
}

window.addEventListener("scroll", reveal);
reveal();


// WHATSAPP FORM
document
.getElementById("whatsappForm")
.addEventListener("submit", function(e){

e.preventDefault();

let nome =
document.getElementById("nome").value;

let email =
document.getElementById("email").value;

let mensagem =
document.getElementById("mensagem").value;

// ⚠️ TROQUE PELO SEU NÚMERO
let numero = "5591980493178";

let texto =
`Olá, meu nome é ${nome}%0AEmail: ${email}%0A${mensagem}`;

window.open(
`https://wa.me/${numero}?text=${texto}`,
"_blank"
);

});

//Carrossel de Projetos
document.addEventListener("DOMContentLoaded", () => {

const projects =
document.querySelectorAll(".project");

const btnLeft =
document.getElementById("arrow-left");

const btnRight =
document.getElementById("arrow-right");

let current = 0;

function updateCarousel(){

projects.forEach(p=>{
p.classList.remove(
"active",
"prev",
"next"
);
});

const prev =
(current - 1 + projects.length)
% projects.length;

const next =
(current + 1)
% projects.length;

projects[current].classList.add("active");
projects[prev].classList.add("prev");
projects[next].classList.add("next");

}

/* 👉 DIREITA */
btnRight.addEventListener("click", ()=>{

current =
(current + 1)
% projects.length;

updateCarousel();

});

/* 👉 ESQUERDA */
btnLeft.addEventListener("click", ()=>{

current =
(current - 1 + projects.length)
% projects.length;

updateCarousel();

});

updateCarousel();

});

//Nav Bar Scroll
window.addEventListener("scroll", () => {

const nav = document.querySelector("nav");

if(window.scrollY > 50){
nav.classList.add("scrolled");
}else{
nav.classList.remove("scrolled");
}

});

//bolhas
const container = document.getElementById("binaryBg");

function criarBinario() {
  const num = document.createElement("div");
  num.classList.add("binary");

  num.innerText = Math.random() > 0.5 ? "0" : "1";

  num.style.left = Math.random() * 100 + "vw";
  num.style.fontSize = (Math.random() * 20 + 10) + "px";

  const duracao = Math.random() * 10 + 10;
  num.style.animationDuration = duracao + "s";

  container.appendChild(num);

  setTimeout(() => {
    num.remove();
  }, duracao * 1000);
}

setInterval(criarBinario, 300);