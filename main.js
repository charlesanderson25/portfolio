// Evento para redirecionar para Home após clicar em Portfolio no cabeçalho

const direcionaParaHome = document.querySelector('.portfolio');

direcionaParaHome.addEventListener('click', redireciona =>{
    window.location.href="index.html";
})

// Inclusão do termo " e Analista de Dados" no span h3, contatenando strings

const getTextSecondaryTextH3 = document.getElementById('secondary-text-h3');

const addTextSecondaryTextH3 = ' e Analista de Dados';

const insertTextSecondaryTextH3 = `${getTextSecondaryTextH3.textContent} ${addTextSecondaryTextH3}`;
getTextSecondaryTextH3.textContent = insertTextSecondaryTextH3;

// Validação form input textarea 

const submitButton = document.getElementById('button-submit');

submitButton.addEventListener('click', function(event) {
    const textAreaField = document.getElementById('textarea');
    const textAreaFieldValue = textAreaField.value;

    if(textAreaFieldValue.trim() === ''){
        alert('Por favor, preencha o campo "Escreva Sua Mensagem" ');
    }else{

    }
});

// Evento ao clicar em Contact => rolagem automática para a área do formulário 

const getContactLink = document.getElementById('contact-link');
const getFormArea = document.getElementById('contact');

getContactLink.addEventListener('click', () => {
    getFormArea.scrollIntoView({ behavior: 'smooth' });
});

// Evento ao clicar em My Work => rolagem automática para a área My Work

const getMyWorkLink = document.getElementById('my-work-link');
const getMyWorkArea = document.getElementById('my-work');

getMyWorkLink.addEventListener('click', () =>{
    getMyWorkArea.scrollIntoView({ behavior: 'smooth' });
});

// Botão 'See More' redireciona para o github

const seeMoreRedirectToGitHub = document.getElementById('see-more-my-work');

seeMoreRedirectToGitHub.addEventListener('click', redirect =>{
    window.open("https://github.com/charlesanderson25", "_blank");
});
