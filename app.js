// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() {
    const nombreInput = document.getElementById('amigo'); 
    const nombre = nombreInput.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    nombreInput.value = '';
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = amigo;
        listaAmigos.appendChild(nuevoItem);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoElemento = document.getElementById('resultado'); 
    resultadoElemento.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`; 
}
