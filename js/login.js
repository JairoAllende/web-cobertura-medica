campoDocumento = document.getElementById("documento");
campoContraseña = document.getElementById("contrasena");
logoEmpresa = document.getElementById("marca");
boton = document.getElementById("boton");

logoEmpresa.addEventListener("click" , () =>{
    
    window.open("index.html", "_blank");
})

boton.addEventListener("click" , () => {
    
    if(campoDocumento.value.trim() !== "" && campoContraseña.value.trim() !== ""){

        window.location.href = "html/home.html";
    }
})