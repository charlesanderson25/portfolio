// Evento para redirecionar para Home após clicar em Portfolio no cabeçalho

const direcionaParaHome = document.querySelector('.portfolio');

direcionaParaHome.addEventListener('click', redireciona =>{
    window.location.href="index.html";
})

// Inclusão do termo " e Analista de Dados" no span h3, contatenando strings

const getTextSecondaryTextH3 = document.getElementById('secondary-text-h3');

const addTextSecondaryTextH3 = ' e Analista de Dados';

const insertTextSecondaryTextH3 = `${getTextSecondaryTextH3.textContent} ${addTextSecondaryTextH3}!`;
getTextSecondaryTextH3.textContent = insertTextSecondaryTextH3;