//Aquí evaluaremos si la persona es mayor o no,
//usando un "OBJETO" de JS, "PPROMPTS" para recolectar los datos, "alert()" y el bucle "IF_ELSE".
//En este ejemplo es usado BOOTSTRAP 3.5.

//Declaracion del OBJETO Javascript
let persona = { 
    "nombre": '',
      "edad": '',
};
    
//Prompts para colectar los datos:
persona.nombre = prompt("Ingresa tu nombre: ");
console.log("Nombre: " + persona.nombre);

persona.edad = prompt("Ingresa tu edad:");
console.log("Edad: " + persona.edad);
//Usamos "parseFloat" para considerar si la edad esta cerca de la mayoria de edad o no,
//si tiene 17.5 años podrá entrar al sitio, ésto estará contemplado en el bloque "ELSE-IF"
//donde evaluaremos 3 casos:
//1) Si es mayor que 18 años;
//2) Si tiene entre 17,5 y 18 años;
//3) Si no es ninguna de las anteriores entonces es menor.

//VARIABLES:
//Variables que usaremos en los bloques "IF_ELSE":
const bienvenida = "<h1 class='text-center mb-3 p-3 fw-bold'>¡Bienvenid@ " + persona.nombre + "!</h1> <br>  <h3 class='mb-4 position-absolute start-50 translate-middle alert alert-success fst-italic'>Puedes ver esta página</h3>";
const rechazada  = "<h1 class='text-center mb-3 p-3 fw-bold'>Lo sentimos " + persona.nombre + "!</h1> <br>  <h3 class='mb-4 position-absolute start-50 translate-middle alert alert-danger fst-italic'>No puedes ver esta página</h3>";
//Variables para Console.log()
const accesoLogrado = "Logrado";
const accesoDenegado = "Denegado";

//Condiciones para evaluar la mayoria o no de edad:
if (persona.edad >= 18){//Es mayor o igual que 18?.
    alert(persona.nombre + ", eres mayor de edad, puedes entrar...");
    document.write(bienvenida);
    console.log("Status: Mayor de edad");
    document.write('<img class="mt-5 mx-auto d-block img-fluid" src="../../assets/ok.jpg" alt="ok">');
    console.log("Acceso: " + accesoLogrado);
}
//Se considera que si tiene 17,5 o más años puede entrar
else if(persona.edad >= 17.5 && edadFloat <18){ 
    alert(persona.nombre + ", estas cerca de la mayoria de edad, puedes entrar...");
    document.write(bienvenida);    
    document.write('<img class="mt-5 mx-auto d-block img-fluid" src="../../assets/ok.jpg" alt="ok">');
    console.log("Acceso: " + accesoLogrado);
}
else{
    alert(persona.nombre + ", eres menor de edad, no puedes entrar...");
    document.write(rechazada); 
    console.log("Status: Menor de edad");
    document.write('<img class="mt-5 mx-auto d-block img-fluid" src="../../assets/error.png" alt="error">');
    console.log("Acceso: " + accesoDenegado);
} 
