const bienvenida = "<h1 class='alert alert-success text-center fw-bold'>¡Bienvenid@!</h1> <br> <img class='mx-auto d-block img-fluid' src='../../assets/ok.svg' alt='ok'> <br> <h3 class='text-success mt-5 text-center position-absolute alert alert-info start-50 text-center translate-middle'>Usted puede ver esta página</h3> <br> <button type='button' class='mx-auto d-block btn btn-primary'> <a class='fw-bold text-white' href='./paginaEjemplo/index.html'>ENTRAR</a> </button>";
const permiso = "<h1 class='mb-5 alert alert-warning text-center fw-bold'>Aún no puedes ver esta página</h1> <img class='mx-auto d-block img-fluid' src='../../assets/stop.png' alt='ok'> <br> <h3 class='mt-5 position-absolute start-50 translate-middle alert alert-warning text-center fs-bold'>Debes pedir permiso al administrador</h3>";
const rechazada  = "<h1 class='mb-3 alert alert-danger text-center fw-bold'>No puedes ver esta página</h1> <br> <img class='mx-auto d-block img-fluid' src='../../assets/stop2.png' alt='ok'> <br> <h3 class='mt-5 position-absolute start-50 translate-middle alert alert-danger text-center fs-bold'>Acceso denegado</h3>";

let edad = parseInt(prompt("Ingresa tu edad:"));

edad >= 18 ? document.write(bienvenida) : 
edad == 17 ? document.write(permiso) :
edad < 18 ? document.write(rechazada) :
document.write(rechazada);

