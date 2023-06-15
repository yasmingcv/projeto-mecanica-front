function exibirAlerta() {
    var resposta = confirm("Deseja sair?");
  
    if (resposta) {
      window.location.href = "outra_pagina.html";
    } else {
      // Aqui você pode adicionar qualquer outra lógica que desejar
    }
}

document.addEventListener('click',exibirAlerta);