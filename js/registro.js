document.getElementById('container-datos-registros').addEventListener('submit', function(event) {
  event.preventDefault(); 

  let valid = true;

  // fecha de nacimiento
  const fecha = document.getElementById('fecha');
  if (!fecha.value) {
    fecha.classList.add('is-invalid');
    valid = false;
  } else {
    fecha.classList.remove('is-invalid');
  }

  // Doc
  const documento = document.getElementById('documento');
  if (documento.value.trim() === '') {
    documento.classList.add('is-invalid');
    valid = false;
  } else {
    documento.classList.remove('is-invalid');
  }

  // Email
  const email = document.getElementById('email');
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  if (!emailValido) {
    email.classList.add('is-invalid');
    valid = false;
  } else {
    email.classList.remove('is-invalid');
  }

  // cantidad de miembros familia
  const familia = document.getElementById('familia');
  if (familia.value <= 0 || isNaN(familia.value)) {
    familia.classList.add('is-invalid');
    valid = false;
  } else {
    familia.classList.remove('is-invalid');
  }

  // usuario
  const usuario = document.getElementById('usuario');
  if (usuario.value.trim() === '') {
    usuario.classList.add('is-invalid');
    valid = false;
  } else {
    usuario.classList.remove('is-invalid');
  }

  // contraseña
  const password = document.getElementById('password');
  const passwordValida = /^[A-Za-z0-9]{8,20}$/.test(password.value);
  if (!passwordValida) {
    password.classList.add('is-invalid');
    valid = false;
  } else {
    password.classList.remove('is-invalid');
  }

  // Repetir contraseña
  const repeatPassword = document.getElementById('repeat-password');
  if (repeatPassword.value !== password.value || repeatPassword.value === '') {
    repeatPassword.classList.add('is-invalid');
    valid = false;
  } else {
    repeatPassword.classList.remove('is-invalid');
  }

  if (valid) {
    Swal.fire({
  icon: 'success',
  title: '¡Registro exitoso!',
  text: 'Tu cuenta ha sido creada correctamente',
  confirmButtonText: 'Continuar' ,

});
   
  } else {
   Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Revisá los campos marcados en rojo',
});
  }
});

document.getElementById("marca").addEventListener("click", () =>{
  window.open("/index.html");
})