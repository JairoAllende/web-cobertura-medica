botonIniciarSesion = document.getElementById('opciones-iniciar_sesion');
cardPlan = document.getElementsByClassName('card-plan');

botonIniciarSesion.addEventListener("click", () =>{
    window.location.href = "../html/login.html";
});

Array.from(cardPlan).forEach(element => {
  element.addEventListener("click", () => {
    window.open("/html/plan_silver.html", "_blank")
  });
});

document.getElementById("container-socios").addEventListener("click", () => {
  window.location.href="../html/login.html";
})
