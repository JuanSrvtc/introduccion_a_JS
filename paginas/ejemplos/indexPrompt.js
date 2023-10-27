//Aquí evaluaremos si la persona es mayor o no,
//usando "PPROMPTS" para recolectar los datos, "alert()" y el bucle "IF_ELSE".
//En este ejemplo es usado BOOTSTRAP 3.5.

//Prompts para colectar los datos:
let nombre = prompt("Ingresa tu nombre:");
console.log("Nombre: " + nombre);

let edad = prompt("Ingresa tu edad:");
console.log("Edad: " + edad);
//Usamos "parseFloat" para considerar si la edad esta cerca de la mayoria de edad o no,
//si tiene 17.5 años podrá entrar al sitio, ésto estará contemplado en el bloque "ELSE-IF"
//donde evaluaremos 3 casos:
//1) Si es mayor que 18 años;
//2) Si tiene entre 17,5 y 18 años;
//3) Si no es ninguna de las anteriores entonces es menor.

//VARIABLES:
//Variables que usaremos en los bloques "IF_ELSE":
const bienvenida = "<h1 class='text-center mb-3 p-3 fw-bold'>¡Bienvenid@ " + nombre + "!</h1> <br>  <h3 class='mb-4 position-absolute start-50 translate-middle alert alert-success fst-italic'>Puedes ver esta página</h3> <br> <img class='mt-5 mx-auto d-block img-fluid' src='../../assets//ok.jpg' alt='ok'> <br> <a href='../alertsYpromps.html' class=' position-absolute top-75 start-50 mt-2 translate-middle text-center fw-bold btn btn-success text-white'>VOLVER</a>";
const rechazada  = "<h1 class='text-center mb-3 p-3 fw-bold'>Lo sentimos " + nombre + "!</h1> <br>  <h3 class='mb-4 position-absolute start-50 translate-middle alert alert-danger fst-italic'>No puedes ver esta página</h3> <br> <img class='mt-5 mx-auto d-block img-fluid' src='../../assets/error.png' alt='error'> <br> <a href='../alertsYpromps.html' class=' position-absolute top-75 start-50 mt-2 translate-middle text-center fw-bold btn btn-danger text-white'>VOLVER</a>";
//Variables que usaremos en Console.log()
const accesoLogrado = "Logrado";
const accesoDenegado = "Denegado";

//Bloque "IF_ELSE" para evaluar la mayoria de edad, si esta cerca de ella o no es mayor:
if (edad >= 18){//Es mayor o igual que 18?.
    alert(nombre + ", eres mayor de edad, puedes entrar...");
    document.write(bienvenida);
    console.log("Status: Mayor de edad");
    console.log("Acceso: " + accesoLogrado);
}
//Se considera que si tiene 17,5 o más años puede entrar.
else if(edad >= 17.5 && edad <18){ 
    alert(nombre + ", estas cerca de la mayoria de edad, puedes entrar...");
    document.write(bienvenida);    
    console.log("Acceso: " + accesoLogrado);
}
else{
    alert(nombre + ", eres menor de edad, no puedes entrar...");
    document.write(rechazada); 
    console.log("Status: Menor de edad");
    console.log("Acceso: " + accesoDenegado);
} 
