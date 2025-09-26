
const form = document.getElementById('formLive');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const clave  = document.getElementById('clave');

const errorNombre = document.getElementById('errorNombre');
const errorCorreo = document.getElementById('errorCorreo');
const errorClave  = document.getElementById('errorClave');

const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Más flexible para símbolos: [^\w\s] = cualquier carácter que NO sea letra/número/underscore/espacio
const regexClave = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,}$/;

// Si quieres aceptar mayúsculas Unicode (Á, É, Ñ, etc.) en navegadores modernos:
// const regexClaveUnicode = /^(?=.*\p{Lu})(?=.*\d)(?=.*[^\w\s]).{6,}$/u;

clave.addEventListener('input', () => {
  const val = clave.value; // NO trim para password
  const hasUpper  = /[A-Z]/.test(val);        // cambia a \p{Lu} si usas Unicode property
  const hasNumber = /\d/.test(val);
  const hasSymbol = /[^\w\s]/.test(val);
  const longEnough = val.length >= 6;

  // Mensaje detallado
  const faltan = [];
  if(!hasUpper) faltan.push("1 mayúscula");
  if(!hasNumber) faltan.push("1 número");
  if(!hasSymbol) faltan.push("1 símbolo (ej. @ # $ % !)");
  if(!longEnough) faltan.push("mín. 6 caracteres");

  if(faltan.length === 0){
    clave.classList.add("valido");
    clave.classList.remove("invalido");
    errorClave.textContent = "";
  } else {
    clave.classList.add("invalido");
    clave.classList.remove("valido");
    errorClave.textContent = "Falta: " + faltan.join(", ");
  }

  // DEBUG en consola para ver exactamente qué falla
  console.log({ val, hasUpper, hasNumber, hasSymbol, longEnough, fullTest: regexClave.test(val) });
});

form.addEventListener('submit', (e) => {
  // valida también en submit
  if(!regexNombre.test(nombre.value.trim()) || !regexCorreo.test(correo.value.trim()) || !regexClave.test(clave.value)){
    e.preventDefault();
    alert("❌ Corrige los errores antes de enviar");
  } else {
    alert("✅ Formulario enviado correctamente");
  }
});
