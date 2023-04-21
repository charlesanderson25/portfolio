// Cria modal ao clicar no botão Learn More

const learMoreWeb = document.getElementById('btn-web-developer'); 

learMoreWeb.addEventListener('click', () => {
        const modalWeb = document.createElement('div');
        modalWeb.classList.add('modal-web');
        const modalWebText = document.createElement('p');
        modalWebText.classList.add('modal-content');
        modalWebText.innerHTML = 'Um bom desenvolvedor web é aquele que possui uma combinação única de habilidades técnicas, criatividade e habilidades interpessoais. Algumas das qualidades que um bom desenvolvedor web deve ter incluem: conhecimento técnico, capacidade de resolução de problemas, criatividade, habilidades para trabalhar em equipe, capacidade de aprender, boa comunicação e atenção aos detalhes. Em resumo, um bom desenvolvedor web é aquele que possui um equilíbrio de habilidades técnicas e interpessoais, é criativo, pró-ativo e sempre em busca de aprender e melhorar suas habilidades.';

        modalWeb.appendChild(modalWebText);
        document.body.appendChild(modalWeb);
        console.log(modalWeb);
        
        modalWeb.addEventListener('click', () => {
            modalWeb.remove();
        });
    });
