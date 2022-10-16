function toggleselecionar(selecionarprato) {
    const pratoselecionado = document.querySelector(".selecionadop");
    if (pratoselecionado !== null) {
      pratoselecionado.classList.remove("selecionadop");
    }
    selecionarprato.classList.add("selecionadop");
  }
  function toggleselecionar2(selecionarbebida) {
    const bebidaselecionada = document.querySelector(".selecionadob");
    if (bebidaselecionada !== null) {
      bebidaselecionada.classList.remove("selecionadob");
    }
    selecionarbebida.classList.add("selecionadob");
  }
  function toggleselecionar3(selecionarsobremesa) {
    const sobremesaselecionada = document.querySelector(".selecionados");
    if (sobremesaselecionada!== null) {
        sobremesaselecionada.classList.remove("selecionados");
    }
    selecionarsobremesa.classList.add("selecionados");
  }