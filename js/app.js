let listaAmigos = [];

function adicionar() {
    // Obter o nome do amigo
    let nomeAmigo = document.getElementById('nome-amigo').value.toUpperCase();

    // Adicionar na lista dos amigos
    if (nomeAmigo == '') {
        alert('Não pode adicionar nome vazio');
        return;
    }

    if (listaAmigos.includes(nomeAmigo)) {
        alert('Não pode adicionar nome repetido');
        return;
    }

    listaAmigos.push(nomeAmigo);
    console.log(listaAmigos);

    // Mostrar a lista dos amigos no parágrafo Amigos incluídos
    let listaAmigosP = document.getElementById('lista-amigos');
    listaAmigosP.textContent = listaAmigos.join(', ');

    // Limpar o campo de entrada do nome de amigo
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if (listaAmigos.length < 2) {
        alert('Deve haver pelo menos 2 amigos');
        return;
    }

    document.getElementById('lista-sorteio').textContent = '';

    // sortear os elementos da lista listaAmigos
    sortearLista();
    console.log(listaAmigos);
    
    // montar as associações dos amigos secretos
    let listaSorteioP = document.getElementById('lista-sorteio');
    for (let i = 0; i < listaAmigos.length - 1; i++) {
        const amigoA = listaAmigos[i];
        const amigoB = listaAmigos[i+1];
        listaSorteioP.innerHTML += `${amigoA} -> ${amigoB}<br>`;
    }
    listaSorteioP.innerHTML += `${listaAmigos[listaAmigos.length - 1]} -> ${listaAmigos[0]}`;
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}

function sortearLista() {
    if (listaAmigos.length < 1) {
        return;
    }

    let temp = [];
    let size = listaAmigos.length;
    for (let i = 0; i < size; i++) {
        let r = Math.floor(Math.random() * listaAmigos.length);
        let elem = listaAmigos[r];
        temp.push(elem);
        listaAmigos = listaAmigos.filter(n => n !== elem);
    }
    listaAmigos = Array.from(temp);
}