document.getElementById("proximos-turnos").addEventListener("click", ()=> {
    window.open("/html/index.html");
})

document.getElementById("historial-turnos").addEventListener("click", ()=> {
    window.open("/html/index.html");
})

const inputFecha = document.getElementById('fecha');
const hoy = new Date().toISOString().split('T')[0]; // formato "YYYY-MM-DD"
inputFecha.value = hoy;

const TIPOS_DE_CONSULTA = document.getElementById("tipos-consultas");
let tipoDeConsultaVacio = true;
const MUNICIPIO = document.getElementById("municipio");
let municipioVacio = true;

const BOTON_SIGUIENTE = Array.from(document.getElementsByClassName("boton-siguiente"));

TIPOS_DE_CONSULTA.addEventListener("change" , () => {

  if(TIPOS_DE_CONSULTA.value === "vacio"){
    tipoDeConsultaVacio = true;
    console.log(tipoDeConsultaVacio);
  }else{
    tipoDeConsultaVacio = false;
    console.log(tipoDeConsultaVacio);
  }
})

BOTON_SIGUIENTE[0].addEventListener("click" , () =>{
  let primerCirculo = Array.from(document.getElementsByClassName("circulo"))[0];
  let primeraLinea = Array.from(document.getElementsByClassName("linea"))[0];
  let segundoCirculo = Array.from(document.getElementsByClassName("circulo"))[1];
  if(tipoDeConsultaVacio == false){
    document.getElementById("bloque2").classList.remove("bloque2-oculto");
    primerCirculo.classList.add("circulo1-completo");
    primeraLinea.classList.remove("linea1-oculta");
    segundoCirculo.classList.remove("circulo2-oculto");
  }
})

MUNICIPIO.addEventListener("change" , () => {

  if(MUNICIPIO.value === "vacio"){
    municipioVacio = true;
    console.log(municipioVacio);
  }else{
    municipioVacio = false;
    console.log(municipioVacio);
  }
})

BOTON_SIGUIENTE[1].addEventListener("click" , () =>{
  let segundoCirculo = Array.from(document.getElementsByClassName("circulo"))[1];
  let segundaLinea = Array.from(document.getElementsByClassName("linea"))[1];
  let tercerCirculo = Array.from(document.getElementsByClassName("circulo"))[2];
  if(municipioVacio == false){
    document.getElementById("bloque3").classList.remove("bloque3-oculto");
    segundoCirculo.classList.remove("circulo2-oculto");
    segundoCirculo.classList.add("circulo2-completo");
    segundaLinea.classList.remove("linea2-oculta");
    tercerCirculo.classList.remove("circulo3-oculto");
  }
})