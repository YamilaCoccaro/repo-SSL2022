let formulario = document.getElementById('form');
let minombre = document.getElementById('minombre');
let miapellido = document.getElementById('miapellido');
let miedad = document.getElementById('miedad');
let mifechaNac = document.getElementById('mifechaNac');
let misexo = document.getElementById('misexo');
let midni = document.getElementById('midni');
let micuit = document.getElementById('micuit');
let micbu = document.getElementById('cbu');
let mitel = document.getElementById('mitel');
let mimail = document.getElementById('mimail');
console.log("hola");
let expresiones = {
	nombre: /^[a-zA-ZñÑáéíóúü\s]{1,40}$/, // Letras
	apellido: /^[a-zA-ZñÑáéíóúü\s]{1,40}$/, // Letras
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\(\d{2,4}\)\d{4,8}$/,
	edad: /^(\d|[1-9]\d|1[0-1]\d|120)$/,
	fechaNac: /^\d{2}\/\d{2}\/\d{4}$/,
	dni: /^\d{1,8}$/,
	cuit: /^\d{2}\-\d{8}\-\d$/,
	sexo: /^[F,M,I]{1}$/,
	cbu: /^\d{22}$/,

}
console.log("hola");

if(formulario){
	console.log("hola");
formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("holi");
	if (expresiones.nombre.test(minombre.value)) {
		minombre.classList.remove("is-invalid");
		minombre.classList.add("is-valid");
		minombre.setCustomValidity("");
		console.log("holi");
	} else {
		minombre.classList.remove("is-valid");
		minombre.classList.add("is-invalid");
		minombre.setCustomValidity("invalid");
	}
	if (expresiones.apellido.test(miapellido.value)) {
		miapellido.classList.remove("is-invalid");
		miapellido.classList.add("is-valid");
		miapellido.setCustomValidity("");
	} else {
		miapellido.classList.remove("is-valid");
		miapellido.classList.add("is-invalid");
		miapellido.setCustomValidity("invalid");
	}
	if (expresiones.edad.test(miedad.value)) {
		miedad.classList.remove("is-invalid");
		miedad.classList.add("is-valid");
		miedad.setCustomValidity("");
	} else {
		miedad.classList.remove("is-valid");
		miedad.classList.add("is-invalid");
		miedad.setCustomValidity("invalid");
	}
	if (expresiones.fechaNac.test(mifechaNac.value)) {
		mifechaNac.classList.remove("is-invalid");
		mifechaNac.classList.add("is-valid");
		mifechaNac.setCustomValidity("");
	} else {
		mifechaNac.classList.remove("is-valid");
		mifechaNac.classList.add("is-invalid");
		mifechaNac.setCustomValidity("invalid");
	}
	if (expresiones.sexo.test(misexo.value)) {
		misexo.classList.remove("is-invalid");
		misexo.classList.add("is-valid");
		misexo.setCustomValidity("");
	} else {
		misexo.classList.remove("is-valid");
		misexo.classList.add("is-invalid");
		misexo.setCustomValidity("invalid");
	}
	if (expresiones.dni.test(midni.value)) {
		midni.classList.remove("is-invalid");
		midni.classList.add("is-valid");
		midni.setCustomValidity("");
	} else {
		midni.classList.remove("is-valid");
		midni.classList.add("is-invalid");
		midni.setCustomValidity("invalid");
	}
	if (expresiones.cuit.test(micuit.value)) {
		micuit.classList.remove("is-invalid");
		micuit.classList.add("is-valid");
		micuit.setCustomValidity("");
	} else {
		micuit.classList.remove("is-valid");
		micuit.classList.add("is-invalid");
		micuit.setCustomValidity("invalid");
	}
	if (expresiones.cbu.test(micbu.value)) {
		micbu.classList.remove("is-invalid");
		micbu.classList.add("is-valid");
		micbu.setCustomValidity("");
	} else {
		micbu.classList.remove("is-valid");
		micbu.classList.add("is-invalid");
		micbu.setCustomValidity("invalid");
	}
	if (expresiones.telefono.test(mitel.value)) {
		mitel.classList.remove("is-invalid");
		mitel.classList.add("is-valid");
		mitel.setCustomValidity("");
	} else {
		mitel.classList.remove("is-valid");
		mitel.classList.add("is-invalid");
		mitel.setCustomValidity("invalid");
	}
	if (expresiones.mail.test(mimail.value)) {
		mimail.classList.remove("is-invalid");
		mimail.classList.add("is-valid");
		mimail.setCustomValidity("");
	} else {
		mimail.classList.remove("is-valid");
		mimail.classList.add("is-invalid");
		mimail.setCustomValidity("invalid");
	}})}
