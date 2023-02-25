const resultado = document.querySelector(".resultado");
const btn_enviar = document.getElementById("btn-enviar");
const form = document.getElementById("form");
const myalert = document.querySelector(".alert-info");
const myalertBtns = document.querySelector(".alert-btns");
const resultado_respuesta = document.querySelectorAll(".resultado-respuesta");
const enviando_respuestas = document.querySelector("#enviando-respuestas");


form.addEventListener("submit", function (e) {
    e.preventDefault();
});

btn_enviar.addEventListener("click", () => {
    verificarRespuestas();
});

function verificarRespuestas() {
    var total = 10;
    var puntos = 0;

    var myForm = document.forms["quizForm"];
    var respuestas = ["a", "a", "b", "b", "a", "a", "c", "a", "a", "b"];

    for (var i = 1; i <= total; i++) {
        if (
            myForm["r1" && "r2" && "r3" && "r4" && "r5" && "r6" && "r7" && "r8" && "r9" && "r10"].value == null ||
            myForm["r1" && "r2" && "r3" && "r4" && "r5" && "r6" && "r7" && "r8" && "r9" && "r10"].value == ""
        ) {
            alert("Completa la evaluación !");
            location = "#main";
            return false;
        } else {
            if (myForm["r" + i].value === respuestas[i - 1]) {
                puntos++;
                location = "#main";
                console.log(i + " bien");
                resultado_respuesta[i - 1].innerHTML = `
                                            <h6 class="respuesta-correcta d-inline px-5">Respuesta Correcta ! <i class="bi bi-check-square-fill"></i></h6>
                `;
            } else if (myForm["r" + i].value !== respuestas[i - 1]) {
                resultado_respuesta[i - 1].innerHTML = `
                <h6 class="respuesta-incorrecta d-inline px-5">Respuesta Incorrecta ! <i class="bi bi-x-square-fill"></i></h6>
                `;
                console.log(i + " mal");
            }
        }

        resultado.innerHTML = "Respuestas correctas: " + puntos + " / " + total;

        myalert.classList.add("on");
        myalertBtns.classList.add("on-btns");

        location = "#main";
    }

    return false;
}
