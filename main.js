const form = document.getElementById("form-contato");
const nome = document.getElementById("nome");
const numero = document.getElementById("numero");
const contatos = document.getElementById("lista-contatos");
const contador = document.getElementById("contador");
const nomesAdicionados = [];
const numerosAdicionados = [];

let total = 0 

form.addEventListener("submit", function(e) {
    e.preventDefault();
    validacao();
    atualizaContador();
    
});

function confereDuplicado() {
    const nomeValido = nome.value.trim();
    const numeroValido = numero.value.trim();

    if (nomesAdicionados.includes(nomeValido) || numerosAdicionados.includes(numeroValido)) {
        document.getElementById("contato-existente").style.display = "block";
        return true;
    } else {
        nomesAdicionados.push(nomeValido);
        numerosAdicionados.push(numeroValido);
        document.getElementById("contato-existente").style.display = "none";
        document.getElementById("letra-detectada").style.display = "none";
        return false;
    }
}

function verificaQuantidade() {
    const numeroValido = numero.value.trim();
    return numeroValido.length === 11;
}

function letrasInputNumero() {
    const numeroValido = numero.value.trim();
    return /^[0-9]+$/.test(numeroValido)
}

function adicionaLinha() {
    const inputNome = nome.value.trim();
    const inputNumero = numero.value.trim();

        let linhas = "<tr>";
        linhas += `<td>${inputNome}`;
        linhas += `<td>${inputNumero}`;
        linhas += "</tr>"

        contatos.innerHTML += linhas;

    nome.value = "";
    numero.value = "";
}

function atualizaContador() {
    total = numerosAdicionados.length;
    contador.innerText = total;
}

function validacao() {
    document.querySelectorAll(".mensagens p").forEach(p => p.style.display = "none");

    if (!letrasInputNumero()) {
        document.getElementById("letra-detectada").style.display = "block";
        return;
    }

    if (!verificaQuantidade()) {
        document.getElementById("menos-digitos").style.display = "block";
        return;
    }

    if (confereDuplicado()) {
        document.getElementById("contato-existente").style.display = "block";
        return;
    }

    adicionaLinha();
}
