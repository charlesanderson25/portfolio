// Selecionando itens da lista de skills data e transformando em um Array

const listaSkills = document.querySelectorAll('#data-list-skills li');
const arrayListaWeb = [];

listaSkills.forEach(item =>{
    arrayListaWeb.push(item.textContent.trim());
});

//Adicionando novo elemento a Li

const newLiData = document.createElement('li');
newLiData.textContent = 'MySQL';
document.getElementById('data-list-skills').appendChild(newLiData);

// Trocar/alternar conteúdo página skills a cada 5 segundos

setInterval(() => {
    const skills1 = document.querySelector('#skills-web');
    const skills2 = document.querySelector('#skills-data');
    const container = document.querySelector('#secondary-web');

    container.insertBefore(skills2, skills1);
}, 5000);





