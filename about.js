const tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
  for(tabLink of tabLinks){
    tabLink.classList.remove('active-link');
  }
  for(tabContent of tabContents){
    tabContent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}

// Evento de click para retirecionar btn My Work para seu conteúdo no index.html

  document.getElementById('my-work-link-page-about').addEventListener('click', () =>{
    window.location.href = 'index.html#my-work'; 
  });

// Evento de click para retirecionar btn Contact para seu conteúdo no index.html

  document.getElementById('contact-link-page-about').addEventListener('click', () =>{
    window.location.href = 'index.html#contact'; 
  });



