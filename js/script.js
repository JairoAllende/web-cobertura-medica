document.addEventListener('DOMContentLoaded', function() {
    console.log("El archivo script.js se ha cargado correctamente.");

    const paso2 = document.getElementById('paso2');
    const paso3 = document.getElementById('paso3');
    const form = document.getElementById('turno-form');

    const btnSiguiente1 = document.getElementById('btn-siguiente-1');
    const btnSiguiente2 = document.getElementById('btn-siguiente-2');

    const timeline2 = document.getElementById('timeline-2');
    const timeline3 = document.getElementById('timeline-3');

    const selectConsulta = document.getElementById('tipo-consulta');
    const errorConsulta = document.getElementById('error-consulta');
    
    const selectMunicipio = document.getElementById('municipio');
    const errorMunicipio = document.getElementById('error-municipio');
    
    const selectLocalidad = document.getElementById('localidad');
    const errorLocalidad = document.getElementById('error-localidad');

    btnSiguiente1.addEventListener('click', function() {
        if (selectConsulta.value === "") {
            errorConsulta.classList.remove('hidden');
            selectConsulta.classList.add('error-border');
        } else {
            errorConsulta.classList.add('hidden');
            selectConsulta.classList.remove('error-border');
            
            paso2.classList.remove('hidden');
            timeline2.classList.add('active');
            this.disabled = true;
        }
    });

    btnSiguiente2.addEventListener('click', function() {
        if (selectMunicipio.value === "") {
            errorMunicipio.classList.remove('hidden');
            selectMunicipio.classList.add('error-border');
        } else {
            errorMunicipio.classList.add('hidden');
            selectMunicipio.classList.remove('error-border');

            paso3.classList.remove('hidden');
            timeline3.classList.add('active');
            this.disabled = true;
        }
    });
    
    selectConsulta.addEventListener('change', function() {
        if (this.value !== "") {
            errorConsulta.classList.add('hidden');
            selectConsulta.classList.remove('error-border');
        }
    });

    selectMunicipio.addEventListener('change', function() {
        if (this.value !== "") {
            errorMunicipio.classList.add('hidden');
            selectMunicipio.classList.remove('error-border');
        }
    });

    selectLocalidad.addEventListener('change', function() {
         if (this.value !== "") {
            errorLocalidad.classList.add('hidden');
            selectLocalidad.classList.remove('error-border');
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (selectLocalidad.value === "") {
            errorLocalidad.classList.remove('hidden');
            selectLocalidad.classList.add('error-border');
            return;
        }
        
        window.open('turnos.html', '_self');
    });

    // Establecer fecha actual (sin cambios)
    const hoy = new Date();
    const anio = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); 
    const dia = String(hoy.getDate()).padStart(2, '0');
    document.getElementById('fecha').value = `${anio}-${mes}-${dia}`;
});
