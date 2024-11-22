//menu desplegable
document.querySelector('.menu-icon').addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('open');
});

//boton de submit
document.querySelector('.btn').addEventListener('click', (e) => {
    const campos = document.querySelectorAll('.input-box input');
    const email = campos[2].value;
    const nombre = campos[0].value;
    const apellidos = campos[1].value;
    const motivo = campos[3].value;

    if (email && nombre && apellidos && motivo) {
        campos.forEach(input => input.value = '');
        alert('Formulario enviado, espera hasta que nos pongamos en contacto');
    } else {
        e.preventDefault();
        alert('No se ha rellenado correctamente el formulario');
    }
});


