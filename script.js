function adicionarTarefa(){

    let input = document.getElementById("tarefa");

    let texto = input.value;

    if(texto == ""){
        alert("Digite uma tarefa!");
        return;
    }

    let lista = document.getElementById("lista");

    let item = document.createElement("li");

    item.innerHTML = `
        ${texto}
        <span class="excluir" onclick="remover(this)">🗑️</span>
    `;

    lista.appendChild(item);

    input.value = "";
}

function remover(botao){

    botao.parentElement.remove();

}