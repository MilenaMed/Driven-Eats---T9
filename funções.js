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

function redirecionar (botaofinalizar){
  let textoBotao = botaofinalizar.textContent
  if (textoBotao === 'Finalizar'){
 
    const $pratoselecionado = document.querySelector(".selecionadop");
    const nomeComidaPrato = $pratoselecionado.querySelector(".titulo-comida").textContent.trim();

    const $bebidaselecionada = document.querySelector(".selecionadob");
    const nomeBebida = $bebidaselecionada.querySelector(".titulo-comida").textContent.trim();

    const $sobremesaselecionada = document.querySelector(".selecionados");
    const nomeSobremesa = $sobremesaselecionada.querySelector(".titulo-comida").textContent.trim();

    const $valorfinalp = document.querySelector(".selecionadop");
    const valorprato = $valorfinalp.querySelector(".valor").textContent;
    const valorprato1 = valorprato.trim().replace(",",".").split(" ");
    let nvalorprato1 = Number(valorprato1[1]);

    const $valorfinalb = document.querySelector(".selecionadob");
    const valorbebida = $valorfinalb.querySelector(".valor").textContent;
    const valorbebida1 =  valorbebida.trim().replace(",",".").split(" ");
    let nvalorbebida1 = Number( valorbebida1[1]);

    const $valorfinals = document.querySelector(".selecionados");
    const valorsobremesa = $valorfinals.querySelector(".valor").textContent;
    const valorsobremesa1 =  valorsobremesa.trim().replace(",",".").split(" ");
    let nvalorsobremesa1 = Number( valorsobremesa1[1]);

  let meuTexto = 
  "Olá, gostaria de fazer o pedido:" +
  "\n- Prato:"+ nomeComidaPrato + 
  "\n- Bebida:"+ nomeBebida+ 
  "\n- Sobremesa:" + nomeSobremesa +
  "\nTotal: R$" + (nvalorprato1 + nvalorbebida1 + nvalorsobremesa1);
  
  window.location.href = `https://wa.me/?text=${encodeURIComponent(meuTexto)}`;
  }
}