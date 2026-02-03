// Função principal que só é iniciada após o devido carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Carregado!");

  const formulario = document.getElementById("calc-form");
  const nome = document.getElementById("nome");
  const altura = document.getElementById("altura");
  const peso = document.getElementById("peso");
  const categoria = document.getElementById("categoria");
  const mensagem = document.getElementById("mensagem");
  const paragrafo1 = document.createElement("p");
  const paragrafo2 = document.createElement("p");
  const limpar = document.getElementById("limpar");

  limpar.addEventListener("click", limparDados);

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Prevent Default ativado");

    const IMC = calculaIMC(altura.value, peso.value);
    const resultado = mostraCategoria(IMC);
    categoria.value = resultado;

    mensagem.innerHTML = `
    <p>${nome.value}, o seu índice <strong>IMC</strong> é <strong>${IMC.toFixed(2)}</strong>.</p>
    <p>Você está na categoria: <strong>${resultado.categoria}</strong>.</p>
    `;
    mensagem.style.background = resultado.cor;
  });
});
// Função para realizar o cálculo do IMC
function calculaIMC(altura, peso) {
  console.log("Calculando IMC...");
  console.log(`A sua altura é ${altura}`);
  console.log(`O seu peso é ${peso}`);

  const IMC = peso / (altura * altura).toFixed(2);
  console.log(`O valor de IMC é ${IMC}`);

  return IMC;
}

// Função para mostrar a categoria e a sua devida cor
function mostraCategoria(IMC) {
  let resultado = {
    categoria: "",
    cor: "",
  };

  if (IMC <= 18.5) {
    resultado = { categoria: "Baixo Peso", cor: "#FFFF00" };
  } else if (IMC <= 24.99) {
    resultado = { categoria: "Normal", cor: "#00FF00" };
  } else if (IMC <= 29.99) {
    resultado = { categoria: "Sobrepeso", cor: "#FFA500" };
  } else if (IMC <= 99) {
    resultado = { categoria: "Obesidade", cor: "#FF0000" };
  } else {
    resultado = { categoria: "", cor: "" };
  }

  console.log(`A categoria do seu IMC é ${resultado.categoria}`);
  return resultado;
}

// Função para limpar os dados do formulário
function limparDados() {
  console.log("Limpando formulário");

  nome.value = "";
  altura.value = "";
  peso.value = "";
  categoria.value = "";
  mensagem.innerHTML = "";
  mensagem.style.background = "inherit";
}
