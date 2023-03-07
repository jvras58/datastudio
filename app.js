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

