const botoes = document.querySelectorAll("button");

botoes.forEach(functio (botão) {
  let curtiu = false;
  botão.addEventlistener("click", botãoClicado);
  function botaoClicado() {
    console.log("fui clicado");
    let texto = botao.querySelector("span");
    if (curtiu === false) {
      texto.textContent = parseInt(texto.textContent) + 1;
      curtiu = true;
    } else {
      texto.textContent = parseInt(texto.textContent) - 1;
      curtiu = false;
    }
  }
}}
