const form = document.getElementById('form-contatos');
let nomeContato = [];
let numeroContato = [];
let contatos = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContato();
    atualizaTabela();
    quantidadeContatos()
})


function adicionaContato() {   
    const nomeContatoInput = document.getElementById('nome-contato');
    const numeroContatoInput = document.getElementById('numero-contato');

    if(nomeContato.includes(nomeContatoInput.value)) {
        alert(`O contato ${nomeContato} já foi adicionado anteriormente.`)
    } else if (numeroContato.includes(numeroContatoInput.value)){
        alert(`O número ${numeroContato} já foi adicionado à outro contato.`)
    } else {
    nomeContato.push(nomeContatoInput.value);
    numeroContato.push(numeroContatoInput.value);
    
    let listaContatos = '<tr>';
    listaContatos += `<td>${nomeContatoInput.value}</td>`;
    listaContatos += `<td>${numeroContatoInput.value}</td>`;
    listaContatos += '</tr>';

    contatos += listaContatos;
    }

    nomeContatoInput.value = '';
    numeroContatoInput.value = '';
}


function atualizaTabela() {
    const tabelaBody = document.querySelector('tbody');
    tabelaBody.innerHTML = contatos;
}

function quantidadeContatos() {
    const tabelaFooter = document.querySelector('tfoot #contagem-contatos');
    tabelaFooter.innerHTML = nomeContato.length;
}