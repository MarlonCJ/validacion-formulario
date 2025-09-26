 const form = document.getElementById('formRegex');

    form.addEventListener('submit', function(e){
      e.preventDefault();

      let nombre   = document.getElementById('nombre').value.trim();
      let correo   = document.getElementById('correo').value.trim();
      let clave    = document.getElementById('clave').value.trim();
      let telefono = document.getElementById('telefono').value.trim();

      // ✅ Nombre: solo letras y espacios
      let regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;
      if(!regexNombre.test(nombre)){
        alert("❌ El nombre solo puede contener letras y mínimo 3 caracteres");
        return;
      }

      // ✅ Correo
      let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!regexCorreo.test(correo)){
        alert("❌ El correo no es válido");
        return;
      }

      // ✅ Contraseña segura: mínimo 6 caracteres, al menos una mayúscula, un número y un símbolo
      let regexClave = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
      if(!regexClave.test(clave)){
        alert("❌ La contraseña debe tener: una mayúscula, un número, un símbolo y mínimo 6 caracteres");
        return;
      }

      // ✅ Teléfono: 10 dígitos
      let regexTelefono = /^[0-9]{10}$/;
      if(!regexTelefono.test(telefono)){
        alert("❌ El teléfono debe tener 10 dígitos");
        return;
      }

      alert("✅ Todo válido, formulario listo para enviar");
      form.submit();
    });