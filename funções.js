function toggleselecionar(selecionarprato) {
  const pratoselecionado = document.querySelector(".selecionadop");
  if (pratoselecionado !== null) {
    pratoselecionado.classList.remove("selecionadop");
  }
  selecionarprato.classList.add("selecionadop");
  habilitaBotaoRodape();
}

function toggleselecionar2(selecionarbebida) {
  const bebidaselecionada = document.querySelector(".selecionadob");
  if (bebidaselecionada !== null) {
    bebidaselecionada.classList.remove("selecionadob");
  }
  selecionarbebida.classList.add("selecionadob");
  habilitaBotaoRodape();
}

function toggleselecionar3(selecionarsobremesa) {
  const sobremesaselecionada = document.querySelector(".selecionados");
  if (sobremesaselecionada!== null) {
      sobremesaselecionada.classList.remove("selecionados");
  }
  selecionarsobremesa.classList.add("selecionados");
  habilitaBotaoRodape();
}

function habilitaBotaoRodape (fecharpedido){
  const pedidofechado = document.querySelector(".finalizar");

  const pratoselecionado = document.querySelector(".selecionadop");
  const bebidaselecionada = document.querySelector(".selecionadob");
  const sobremesaselecionada = document.querySelector(".selecionados");

  if ( pratoselecionado && bebidaselecionada && sobremesaselecionada !== null){
      pedidofechado.classList.remove("finalizar");
      pedidofechado.classList.add("finalizado");
      pedidofechado.innerHTML = "Finalizar";
  }
}