setInterval(() => {
    const skills1 = document.querySelector('#skills-web');
    const skills2 = document.querySelector('#skills-data');
    const container = document.querySelector('#secondary-web');

    container.insertBefore(skills2, skills1);
}, 5000);