document.getElementById("marca").addEventListener("click", () =>{
    window.location.href = "/index.html";
})

document.getElementById("home-pedir_turno").addEventListener("click", () => {
    window.location.href = "filtros_turnos.html";
});

document.getElementById("home-smartcard").addEventListener("click", () => {
    window.location.href = "smartcard.html";
});

document.getElementById("home-examenes_clinicos").addEventListener("click", () => {
    window.location.href = "examenes-clinicos.html";
});

document.getElementById("arrow_down").addEventListener("mouseenter", () => {
    document.getElementById("opciones-mi_perfil").style.display = "flex";
});

document.getElementById("mi-perfil").addEventListener("mouseleave", () => {
    document.getElementById("opciones-mi_perfil").style.display = "none";
});

document.getElementById("opciones-mi_perfil").addEventListener("mouseleave", () => {
    document.getElementById("opciones-mi_perfil").style.display = "none";
});


