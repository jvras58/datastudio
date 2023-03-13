//elementos do DOM
const landingPage = document.querySelector('#landing-page');
const alunosBtn = document.querySelector('#alunos-btn');
const docentesBtn = document.querySelector('#docente-btn');
const iframeAlunos = document.querySelector('#iframe-alunos');
const iframeDocentes = document.querySelector('#iframe-docentes');
const logo = document.querySelector('.logo');
const iframeContainer = document.querySelector('.iframe-container');
const backgroundImage = document.querySelector('.background-image');

// Carrega os iframes quando a página carregar
window.addEventListener('load', () => {
    iframeAlunos.setAttribute('src', iframeAlunos.getAttribute('data-src'));
    iframeDocentes.setAttribute('src', iframeDocentes.getAttribute('data-src'));
});
//some com a logo e o template de fundo
alunosBtn.addEventListener('click', () => {
    landingPage.classList.add('hidden');
    iframeContainer.classList.remove('hidden');
    logo.classList.add('hidden');
    backgroundImage.classList.add('hidden');
  });
  
  docentesBtn.addEventListener('click', () => {
    landingPage.classList.add('hidden');
    iframeContainer.classList.remove('hidden');
    logo.classList.add('hidden');
    backgroundImage.classList.add('hidden');
  });

// Adiciona o ouvinte de evento para cada botão
alunosBtn.addEventListener('click', () => {
    // Exibe o iframe de alunos e oculta o iframe de docentes
    iframeAlunos.style.display = 'block';
    iframeDocentes.style.display = 'none';
    landingPage.style.display = 'none';
});

docentesBtn.addEventListener('click', () => {
    // Exibe o iframe dos docentes e oculte o iframe de alunos
    iframeAlunos.style.display = 'none';
    iframeDocentes.style.display = 'block';
    landingPage.style.display = 'none';
});
// Exibe a página inicial quando o documento for carregado
window.onload = function() {
    landingPage.style.display = 'block';
    iframeAlunos.style.display = 'none';
    iframeDocentes.style.display = 'none';
}

// Obter o elemento iframe
const iframe = document.querySelector('#iframe-alunos');

// Adicionar um ouvinte de eventos de scroll à página
window.addEventListener('scroll', () => {
    // Obter a posição do scroll da página
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Atualizar a posição do scroll do iframe com a posição do scroll da página
    iframe.contentWindow.scrollTo(0, scrollTop);
    const contentHeight = iframe.contentDocument.body.scrollHeight;
    iframe.style.height = contentHeight + 'px';

});

// Função para sincronizar o scroll da página com o scroll do iframe
function syncScroll() {
    const iframe = document.querySelector('#iframe-alunos');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    iframe.contentWindow.scrollTo(0, scrollTop);
}

// Chamar a função de sincronização sempre que o iframe for carregado
iframe.addEventListener('load', () => {
    syncScroll();
});

// Adicionar um ouvinte de eventos de scroll à página
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Atualizar a altura do iframe para o tamanho do conteúdo
    const contentHeight = iframe.contentDocument.body.scrollHeight;
    iframe.style.height = contentHeight + 'px';

    // Atualizar a posição do scroll do iframe com a posição do scroll da página
    iframe.contentWindow.scrollTo(0, scrollTop);
});

// Chamar a função de sincronização sempre que o iframe for carregado
iframe.addEventListener('load', () => {
    syncScroll();
});

// Roteiro da apresentação 
var slideIndex = 1;
showSlides(slideIndex);

// Controles próximos/anteriores
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controles de imagem em miniatura
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
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
  


