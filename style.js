// Seleção dos elementos DOM para campos de cartão de crédito
const cardNumber = document.querySelector("#number");
const cardName = document.querySelector("#name");
const cardMonth = document.querySelector("#month");
const cardYear = document.querySelector("#year");
const cardCvc = document.querySelector("#cvc");

// Seleção dos elementos DOM para campos de input do formulário
const numberInp = document.querySelector("#card-number");
const nameInp = document.querySelector("#card-name");
const monthInp = document.querySelector("#card-mm");
const yearInp = document.querySelector("#card-yy");
const cvcInp = document.querySelector("#card-cvc");

// Seleção dos demais elementos DOM
const btnConfirm = document.querySelector(".btn-confirm");
const thank = document.querySelector(".thank");
const form = document.querySelector(".form-card");
const btnContinue = document.querySelector(".btn-continue");
const input = document.querySelector(".input");

// Função para formatar o valor do campo de cartão de crédito
function format(value) {
  value = value.replace(/\s/g, "");
  const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");
  return formattedValue;
}

// Inserindo espaços invisíveis no input
function space() {
  const text = numberInp.value.replace(/\s/g, ""); // Remover espaços existentes
  const textSpace = text.replace(/(.{4})/g, "$1 "); // Adicionar espaço a cada 4 letras
  numberInp.value = textSpace;
}

// Funções para atualizar os campos de exibição com os valores formatados
function setCardNumber(a) {
  cardNumber.innerText = format(a.target.value);
}

function setCardName(a) {
  cardName.innerText = a.target.value;
}

function setCarMonth(a) {
  cardMonth.innerText = format(a.target.value);
}

function setCardYear(a) {
  cardYear.innerText = format(a.target.value);
}

function setCardCvc(a) {
  cardCvc.innerText = format(a.target.value);
}

// Array que contém os campos do formulário com suas configurações de validação
const formFields = [
  { input: nameInp, required: true },
  { input: numberInp, required: true, minLength: 16 },
  { input: monthInp, required: true, minLength: 2 },
  { input: yearInp, required: true, minLength: 2 },
  { input: cvcInp, required: true, minLength: 3 },
];

// Função de validação do formulário
function confirm(c) {
  c.preventDefault();

  // Loop para validar os campos do formulário
  formFields.forEach((field) => {
    const { input, required, minLength } = field;

    if (!input.value) {
      // Adicionar classes de erro e exibir mensagem para campos vazios
      input.classList.add("error");
      input.parentElement.classList.add("error_message");

      // Adicionar foco ao campo com erro
      input.focus();
    } else {
      // Remover classes de erro caso o campo não esteja vazio
      input.classList.remove("error");
      input.parentElement.classList.remove("error_message");
    }

    if (required && minLength && input.value.length < minLength) {
      // Adicionar classe de campo incompleto caso o campo não atenda aos requisitos mínimos de comprimento
      input.parentElement.classList.add("incomplete");
    } else {
      // Remover classe de campo incompleto caso o campo atenda aos requisitos mínimos de comprimento
      input.parentElement.classList.remove("incomplete");
    }
  });

  // Verificar se todos os campos são válidos (todos os campos obrigatórios foram preenchidos)
  const isFormValid = formFields.every(
    (field) =>
      !field.required ||
      !field.minLength ||
      field.input.value.length >= field.minLength
  );

  // Se o formulário for válido, exibir mensagem de agradecimento e ocultar o formulário
  if (isFormValid) {
    thank.classList.remove("hidden");
    form.classList.add("hidden");
  }
}

// Função para atualizar a página (recarregar) quando o botão "Continuar" for clicado
function refresh() {
  location.reload();
}

// Adicionar eventos de input aos campos de formulário para formatar os valores
numberInp.addEventListener("input", setCardNumber);
nameInp.addEventListener("input", setCardName);
monthInp.addEventListener("input", setCarMonth);
yearInp.addEventListener("input", setCardYear);
cvcInp.addEventListener("input", setCardCvc);

// Adicionar evento de clique ao botão "Confirmar" para validar o formulário
btnConfirm.addEventListener("click", confirm);

// Adicionar evento de clique ao botão "Continuar" para atualizar a página
btnContinue.addEventListener("click", refresh);

// Função para capturar o pressionamento da tecla "Enter" nos campos de input
function handleEnterKey(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Evita que o formulário seja submetido caso haja um botão de submit padrão

    // Dispara o evento de clique no botão "Confirmar"
    btnConfirm.click();
  }
}

// Adiciona o evento de "keydown" aos campos de input do formulário
numberInp.addEventListener("keydown", handleEnterKey);
nameInp.addEventListener("keydown", handleEnterKey);
monthInp.addEventListener("keydown", handleEnterKey);
yearInp.addEventListener("keydown", handleEnterKey);
cvcInp.addEventListener("keydown", handleEnterKey);
