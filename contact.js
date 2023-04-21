// Validação form input textarea

const submitButton = document.getElementById("button-submit");

submitButton.addEventListener("click", function (event) {
  const textAreaField = document.getElementById("textarea");
  const textAreaFieldValue = textAreaField.value;

  if (textAreaFieldValue.trim() === "") {
    alert('Por favor, preencha o campo "Escreva Sua Mensagem" ');
  } else {
  }
});

// Limpeza dos campos do formulário após submit

const formContact = document.getElementById("form");

formContact.addEventListener("submit", async function (event) {
  event.preventDefault();
  alert("botão clicado!");

  const formFields = document.querySelectorAll("form-field");

  await Primise.all(
    Array.from(formFields).map(async function (field) {
      field.value = "";
    })
  );
});
