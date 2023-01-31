const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
});
var resultado = document.querySelector(".resultado");
function verificarRespuestas() {
    var total = 1;
    var puntos = 0;

    var myForm = document.forms["quizForm"];
    var respuestas = ["a"];

    for (var i = 0; i <= total; i++) {
        if (myForm["r1"].value === null || myForm["r1"].value === "") {
            alert("Responde la pregunta "+  i);
            return false;
        } else {
            if (myForm["r1"].value === respuestas[i - 1]) {
                puntos++;
                resultado.innerHTML = "<h3> Respuesta correcta!</h3>";
            } else {
                resultado.innerHTML = "<h3> Respuesta Incorrecta!</h3>";
            }

        }
    }
    // resultado.innerHTML = puntos + "<h3> Respuestas correctas</h3>";
    
    console.log(puntos);
    return false;
}
