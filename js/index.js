function recogeDatos (){
    var nombre = document.querySelector("#nombre").value;
    var anio = document.querySelector("#year").value;

    var edad = 2024 - anio;

    console.log("Hola tu nombre es: " + nombre +  " tu año de nacimiento: " + anio + " y tu edad: " + edad   )
}


recogeDatos();