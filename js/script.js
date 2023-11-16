
// Oculta la seccion de seleccion y muestra el formulario con el campo domicilio
function seleccionarDomicilio(){
    document.getElementById('contenedor-seleccion').style.display = 'none';
    document.getElementById('contenedor-formulario').style.display = 'block';
    document.getElementsByClassName('domicilio')[0].style.display = 'block';
}

// Oculta la seccion de seleccion y muestra el formulario sin el campo domicilio
function seleccionarClinica(){
    document.getElementById('contenedor-seleccion').style.display = 'none';
    document.getElementById('contenedor-formulario').style.display = 'block';
    document.getElementsByClassName('domicilio')[0].style.display = 'none';
}

// Obtiene la fecha actual en formato dd/mm/aaaa
function obtenerFechaActual(){
    const fecha = new Date();
    
    const dia = fecha.getDate();
    const mes = (fecha.getMonth() + 1);
    const anio = fecha.getFullYear();
    
    const fechaActual = `${anio}-${mes}-${dia}`;

    // Establece el valor predeterminado del campo de fecha
    document.getElementById('fecha').value = fechaActual;
}