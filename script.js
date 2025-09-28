document.getElementById('form-contato').addEventListener('submit', function (e) {
e.preventDefault();

const nome = document.getElementById('nome').value.trim();
const telefone = document.getElementById('telefone').value.trim();

if (nome && telefone) {
    const tabela = document.getElementById('lista-contatos');
    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
    <td>${nome}</td>
    <td>${telefone}</td>
    `;

    tabela.appendChild(novaLinha);

    // Para limpar os camposs
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
} else {
    alert('Preencha todos os campos.');
}
});
