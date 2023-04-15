// Selecionando itens da lista de skills data e transformando em um Array

    const listaSkillsData = document.querySelectorAll('#data-list-skills li');
    const arrayListaData = [];

    listaSkillsData.forEach(item =>{
        arrayListaData.push(item.textContent.trim());
    });

        //Adicionando novo elemento a Li

        const newLiData = document.createElement('li');
        newLiData.textContent = 'MySQL';
        document.getElementById('data-list-skills').appendChild(newLiData);

// Selecionando itens da lista de skills Web e transformando em um Objeto

    const listaSkillWeb = document.querySelectorAll('web-list-skills li');
    const objetoListaWeb = {};

    listaSkillWeb.forEach(item => {
        const itemName = item.textContent.trim();
        objetoListaWeb[itemName] = true;
    });

        //Adicionando novo elemento no Objeto
        const newLiWeb = document.createElement('li');
        newLiWeb.textContent = 'MySQL';
        objetoListaWeb['MySQL'] = newLiWeb;
        document.getElementById('web-list-skills').appendChild(newLiWeb);

// Trocar/alternar conteúdo página skills a cada 5 segundos

    setInterval(() => {
        const skills1 = document.getElementById('skills-web');
        const skills2 = document.getElementById('skills-data');
        const container = document.querySelector('#secondary-web');

        container.insertBefore(skills2, skills1);
    }, 5000);





