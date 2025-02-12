// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//array para almacenar nombres
let amigos = [];
console.log(amigos);

function agregarAmigo() {
    // Capturar el valor del campo de texto
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios innecesarios

    // Validación: Si el campo está vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir de la función si el campo está vacío
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Actualizar la lista en la página
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = "";
}

function actualizarLista() {
    // Obtener el elemento UL donde se mostrarán los amigos
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar los nuevos amigos

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); // Crear un nuevo <li>
        item.textContent = amigos[i]; // Asignar el nombre al <li>
        lista.appendChild(item); // Agregar el <li> a la lista UL
    }
}


//funcion para hacer el sorteo

function sortearAmigo() {
    //validar que haya al menos 1 amigo en el array
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    //generar indice aleatorio 
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    
    //Obtener en nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    
    //mostrar resultado 
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}



