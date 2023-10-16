let opcion = prompt("Elija una opción: a, b, c");

switch (opcion){
    case("a"):
    document.write("<h1 class='alert alert-success text-center fw-bold'>¡Bienvenid@!</h1> <br> <img class='mx-auto d-block img-fluid' src='./img/ok.svg' alt='ok'> <br> <h3 class='text-success mt-5 text-center position-absolute alert alert-info position-absolute start-50 text-center translate-middle'>Usted seleccionó la opción: " + opcion +  "</h3> <br> <button type='button' onclick='window.location.reload()' class='mx-auto d-block btn btn-success fw-bold text-white'>Recargar</button>");
    break;
    
    case("b"):
    document.write("<h1 class='alert alert-success text-center fw-bold'>¡Bienvenid@!</h1> <br> <img class='mx-auto d-block img-fluid' src='./img/ok.svg' alt='ok'> <br> <h3 class='text-success mt-5 text-center position-absolute alert alert-info position-absolute start-50 text-center translate-middle'>Usted seleccionó la opción: " + opcion +  "</h3> <br> <button type='button' onclick='window.location.reload()' class='mx-auto d-block btn btn-success fw-bold text-white'>Recargar</button>");
    break;
    
    case("c"):
    document.write("<h1 class='alert alert-success text-center fw-bold'>¡Bienvenid@!</h1> <br> <img class='mx-auto d-block img-fluid' src='./img/ok.svg' alt='ok'> <br> <h3 class='text-success mt-5 text-center position-absolute alert alert-info start-50 text-center translate-middle'>Usted seleccionó la opción: " + opcion +  "</h3> <br> <button type='button' onclick='window.location.reload()' class='mx-auto d-block btn btn-success fw-bold text-white'>Recargar</button>");
    break;
    
    default:
        document.write("<h1 class='alert alert-danger text-center fw-bold'>¡Error!</h1> <br> <img class='mx-auto d-block img-fluid' src='./img/error.svg' alt='error'> <br> <h4 class='p-3 mt-5 position-absolute start-50 text-center translate-middle alert alert-warning text-danger'>Recargue esta página y elija entre las opciones: <br> a, b, c</h4> <br> <button type='button' onclick='window.location.reload()' class='mx-auto d-block btn btn-warning fw-bold text-danger'>Recargar</button>");
    break;
}