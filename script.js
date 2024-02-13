document.addEventListener("DOMContentLoaded", () => {
    const novoItemInput = document.getElementById("input-novo-item")

    const botaoAdicionarItem = document.getElementsByClassName("botao-adicionar")[0]
    
   botaoAdicionarItem.addEventListener("click", (evento) => {
    evento.preventDefault()
    console.log("Botão Clicado")
   })
})



