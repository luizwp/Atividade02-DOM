function trocarTexto() {
    // Seleciona o elemento que você deseja alterar
    var elemento = document.getElementById("elemento2");
    
    // Verifica se o elemento foi encontrado
    if (elemento) {
        // Altera o texto do elemento
        elemento.textContent = "Novo Texto do Item 2";
    } else {
        console.log("Elemento não encontrado.");
    }
}