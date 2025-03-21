// Crear el punto del cursor
const cursor = document.createElement('div');
cursor.id = 'custom-cursor'; // Asignar el ID para el estilo
document.body.appendChild(cursor); // Añadir el punto al cuerpo de la página

// Variables para controlar la posición y el retraso
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
const delay = 0.1; // Controla el retardo del movimiento (más bajo = más rápido)

// Función para actualizar la posición del punto con retardo y teniendo en cuenta el scroll
function updateCursorPosition() {
    const distX = mouseX - cursorX;
    const distY = mouseY - cursorY;

    // Aplicar el retardo de forma gradual
    cursorX += distX * delay;
    cursorY += distY * delay;

    // Actualizar la posición del cursor considerando el scroll
    cursor.style.left = `${cursorX + window.scrollX}px`;
    cursor.style.top = `${cursorY + window.scrollY}px`;

    // Llamar nuevamente a la función para un movimiento continuo y suave
    requestAnimationFrame(updateCursorPosition);
}

// Función para capturar la posición del ratón
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Iniciar la animación
updateCursorPosition();
