// 1. Variable para almacenar el estado del contador
let contador = 0;

// 2. Seleccionar los elementos del HTML por su ID
const textoNumero = document.getElementById('numero');
const btnIncrementar = document.getElementById('btn-incrementar');
const btnDisminuir = document.getElementById('btn-disminuir');

// 3. Evento para el botón Incrementar
btnIncrementar.addEventListener('click', () => {
  contador++; // Le suma 1 a la variable
  textoNumero.textContent = contador; // Actualiza el número visible en HTML
});

// 4. Evento para el botón Disminuir
btnDisminuir.addEventListener('click', () => {
  contador--; // Le resta 1 a la variable
  textoNumero.textContent = contador; // Actualiza el número visible en HTML
});