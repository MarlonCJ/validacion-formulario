
const form = document.getElementById('miFormulario');

form.addEventListener('submit', function(event){
    event.preventDefault() // detiene el envio

    // obtenemos los valores de los inputs
    let nombre = document.getElementById('nombre').value.trim();
    let correo = document.getElementById('correo').value.trim();
    let clave = document.getElementById('clave').value.trim();

    // validaciones
    console.log(nombre);

    if(nombre.length < 3){
        alert('El nombre debe tener al menos 3 caracteres');
        return;
    }

    // validar correo con una RegEx simple

    let regexCorreo =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regexCorreo.test(correo)){
        alert('El correo no es valido');
        return;
    }

    if(clave.length < 6){
        alert('La contraseña debe tener minimo 6 caracteres');
        return;
    }

    // si todo esta bien
    alert('Formulario valido, se puede enviar');    

    form.submit(); //ahora si se envia
})