const campoDocumento = document.getElementById("documento");
const campoContraseña = document.getElementById("contrasena");
const logoEmpresa = document.getElementById("marca");
const boton = document.getElementById("boton");

logoEmpresa.addEventListener("click", () => {
    window.open("../index.html", "_blank");
});

boton.addEventListener("click", () => {
    if (campoDocumento.value.trim() !== "" && campoContraseña.value.trim() !== "") {
        window.location.href = "home.html";
    }
});