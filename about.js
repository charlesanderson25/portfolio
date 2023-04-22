// Menu About Me

const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Evento de click para retirecionar btn My Work para seu conteúdo no index.html

document
  .getElementById("my-work-link-page-about")
  .addEventListener("click", () => {
    window.location.href = "index.html#my-work";
  });

// Evento de click para retirecionar btn Contact para seu conteúdo no index.html

document
  .getElementById("contact-link-page-about")
  .addEventListener("click", () => {
    window.location.href = "index.html#contact";
  });

// Manipular a resposta de uma requisição HTTP e inserir esses dados no HTML da página

fetch("./profile.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let insertJsonHtml = document.getElementById("profile");
    insertJsonHtml.innerHTML =
      "<h1>" +
      data.profile[0].nome +
      "</h1>" +
      "<p>Email: " +
      data.profile[0].email +
      "</p>" +
      "<p>Telefone: " +
      data.profile[0].telefone +
      "</p>";
  })
  .catch(function (error) {
    console.error(error);
  });
