import { validar } from "./validadores.js";
const cadena = document.getElementById("cadena");
const form = document.getElementById("formulario");

form.addEventListener("submit", e => {
    e.preventDefault();

    var valid = validar(cadena.value);
    
    if (valid) {
        cadena.classList.remove("is-invalid");
        cadena.classList.add("is-valid");
        cadena.setCustomValidity("");
        console.log(cadena.value, " ACEPTADA");
    } else {
        cadena.classList.remove("is-valid");
        cadena.classList.add("is-invalid");
        cadena.setCustomValidity("invalid");
        console.error(cadena.value, " RECHAZADA");
        }
    form.reset();
});


