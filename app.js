// Array global para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un nuevo amigo a la lista.
 * Se ejecuta al hacer clic en el botón "Añadir".
 */
function agregarAmigo() {
  // Obtenemos el campo de entrada y su valor, eliminando espacios innecesarios
  const inputAmigo = document.getElementById("amigo");
  const nombre = inputAmigo.value.trim();

  // Validamos que se haya ingresado un nombre
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregamos el nombre al array
  amigos.push(nombre);

  // Actualizamos la visualización de la lista en la página
  actualizarListaAmigos();

  // Limpiamos y enfocamos el campo de entrada para un nuevo ingreso
  inputAmigo.value = "";
  inputAmigo.focus();
}

/**
 * Función que actualiza el elemento de la lista (<ul>) con los nombres ingresados.
 */
function actualizarListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  
  // Limpiamos la lista para evitar duplicados
  lista.innerHTML = "";

  // Recorremos el array de amigos y creamos un <li> para cada nombre
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

/**
 * Función para sortear aleatoriamente el "amigo secreto".
 * Se ejecuta al hacer clic en el botón "Sortear amigo".
 */
function sortearAmigo() {
  // Verificamos que exista al menos un nombre en la lista
  if (amigos.length === 0) {
    alert("No hay amigos para sortear. Por favor, añade nombres.");
    return;
  }

  // Generamos un índice aleatorio basado en la cantidad de amigos
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  // Mostramos el resultado en el elemento con id "resultado"
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

