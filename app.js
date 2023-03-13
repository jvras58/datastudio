// Armazenar os elementos do DOM em variáveis
const landingPage = document.querySelector('#landing-page');
const alunosBtn = document.querySelector('#alunos-btn');
const docentesBtn = document.querySelector('#docente-btn');
const iframeAlunos = document.querySelector('#iframe-alunos');
const iframeDocentes = document.querySelector('#iframe-docentes');
const logo = document.querySelector('.logo');
const iframeContainer = document.querySelector('.iframe-container');
const backgroundImage = document.querySelector('.background-image');
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");


// Carregar os iframes quando a página carregar
window.addEventListener('load', () => {
iframeAlunos.setAttribute('src', iframeAlunos.getAttribute('data-src'));
iframeDocentes.setAttribute('src', iframeDocentes.getAttribute('data-src'));
});

// Esconder a landing page, o logo e o template de fundo ao clicar nos botões de alunos ou docentes
function hideElements() {
landingPage.classList.add('hidden');
iframeContainer.classList.remove('hidden');
logo.classList.add('hidden');
backgroundImage.classList.add('hidden');
}

alunosBtn.addEventListener('click', hideElements);
docentesBtn.addEventListener('click', hideElements);

// Exibir o iframe de alunos e ocultar o iframe de docentes ao clicar no botão de alunos
alunosBtn.addEventListener('click', () => {
iframeAlunos.style.display = 'block';
iframeDocentes.style.display = 'none';
landingPage.style.display = 'none';
});

// Exibir o iframe de docentes e ocultar o iframe de alunos ao clicar no botão de docentes
docentesBtn.addEventListener('click', () => {
iframeAlunos.style.display = 'none';
iframeDocentes.style.display = 'block';
landingPage.style.display = 'none';
});

// Exibir a página inicial quando o documento for carregado
window.onload = function() {
landingPage.style.display = 'block';
iframeAlunos.style.display = 'none';
iframeDocentes.style.display = 'none';
}

// Sincronizar o scroll da página com o scroll do iframe
function syncScroll() {
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
iframe.contentWindow.scrollTo(0, scrollTop);
}

// Adicionar um ouvinte de eventos de scroll à página e atualizar a altura do iframe
window.addEventListener('scroll', () => {
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const contentHeight = iframe.contentDocument.body.scrollHeight;
iframe.style.height = contentHeight + 'px';
iframe.contentWindow.scrollTo(0, scrollTop);
});

// Chamar a função de sincronização sempre que o iframe for carregado
iframeAlunos.addEventListener('load', syncScroll);
iframeDocentes.addEventListener('load', syncScroll);

// Controles próximos/anteriores dos slides
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

// Controles de imagem em miniatura dos slides
function currentSlide(n) {
showSlides(slideIndex = n);
}

// Exibir os slides e os pontos correspondentes
function showSlides(n) {
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (let i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

// Apresentação de slides automática
var slideTimer = setInterval(function() { plusSlides(1) }, 4000);

// Pausar apresentação de slides ao passar o mouse sobre ela
var slideshow = document.getElementsByClassName("slideshow-container")[0];
slideshow.addEventListener("mouseover", function() { clearInterval(slideTimer) });

// Retomar a apresentação de slides quando não estiver passando o mouse sobre ela
slideshow.addEventListener("mouseout", function() { 
    slideTimer = setInterval(function() { plusSlides(1) }, 4000);
});


