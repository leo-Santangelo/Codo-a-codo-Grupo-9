
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const { nombre, email, mensaje } = datos;
    const archivoInput = document.querySelector('#archivo');
    const archivo = archivoInput.files[0];

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');
        return;
    }

    if (!archivo) {
        mostrarError('Debe subir un archivo');
        return;
    }

    const validExtensions = ['image/jpeg', 'image/jpg'];
    if (!validExtensions.includes(archivo.type)) {
        mostrarError('El archivo debe ser una imagen en formato JPG o JPEG');
        return;
    }

    mostrarMensaje('Mensaje enviado correctamente');
});

function mostrarError(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('error');
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function mostrarMensaje(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}
