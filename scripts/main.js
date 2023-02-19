// const a_que_es_la_leucemia_nav = document.getElementById(
//     "a-que-es-la-leucemia-nav"
// );

// ------------------------------------------------------------------------------------------------------------
// const a_que_es_la_leucemia_main = document.getElementById(
//     "a-que-es-la-leucemia-main"
// );
// const section_que_es_la_leucemia = document.querySelector(
//     "#section-que-es-la-leucemia"
// );
// const btn_close_section = document.getElementsByClassName("btn-close-section");
// ------------------------------------------------------------------------------------------------------------

// a_que_es_la_leucemia_nav.addEventListener("click", function () {
//     section_que_es_la_leucemia.style.display = "block";
// });

// ------------------------------------------------------------------------------------------------------------
// a_que_es_la_leucemia_main.addEventListener("click", function () {
//     section_que_es_la_leucemia.style.display = "block";
// });

// btn_close_section.addEventListener("click", function () {
//     section_que_es_la_leucemia.style.display = "none";
//     // location = "#main";
// });
// ------------------------------------------------------------------------------------------------------------

const contendor_lista_a_main = document.getElementById(
    "contenedor-lista-a-main"
);

const btn_close = document.querySelectorAll(".btn-close-section");
const section = document.querySelectorAll(".section");

contendor_lista_a_main.addEventListener("click", (e) => {
    if (e.target && e.target.tagName === "A") {
        // e.target.href.classList.add("activo");
        // console.log(e);
        let section = e.target.hash;
        document.querySelector(section).style.display = "block";
        // document.querySelector(section).classList.add('aparecer')
        // const sect = document.querySelector(section)
        // console.log(sect)
        // sect.classList.add('aparecer')
    }
});

btn_close.forEach((element) => {
    element.addEventListener("click", () => {
        section.forEach((element) => {
            element.style.display = "none";
        });
    });
});

const ocultarSection = (entradas, observador) => {
    // console.log('ejecutando..')
    // console.log(entradas)
    // console.log(observador)
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            // console.log("La imagen salió del viewport");
            console.log(entrada.target);
            entrada.target.classList.add("aparecer");
        } else {
            // console.log("Saliendo..");
            entrada.target.classList.remove("aparecer");
            entrada.target.style.display = "none";
            entrada.target.classList.add("desaparecer");
        }
    });
};

const observador = new IntersectionObserver(ocultarSection, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.7,
});

section.forEach((element) => {
    observador.observe(element);
});

// const clasificacion_lma = [
//     { nombre: "LAM0" },
//     { nombre: "LAM1" },
//     { nombre: "LAM2" },
//     { nombre: "LAM3" },
//     { nombre: "LAM4" },
//     { nombre: "LAM5" },
//     { nombre: "LAM6" },
//     { nombre: "LAM7" },
// ];

const clasificacion_lma = ["LAM0", "LAM1", "LAM2", "LAM3", "LAM4", "LAM5", "LAM6", "LAM7"];

const search = document.querySelector(".form-control");
const btnSubmit = document.querySelector(".btn-outline-info");
const form = document.getElementById("form");
const buscador = document.querySelector(".buscador");
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

const filtrar = () => {
    // buscador.innerHTML = "";
    // console.log(search.value);
    const buscarTexto = search.value.toUpperCase();
    // console.log(buscarTexto)
    // for (let lma of clasificacion_lma) {
    //     const nombre = lma.nombre
    //     console.log(nombre);
    //     if (buscarTexto == nombre) {
    //         buscador.innerHTML += `<li class="list-group-item buscando">${nombre}</li>`;
    //     }
    // }
    for (let i = 0; i < clasificacion_lma.length; i++) {
        const lma = clasificacion_lma[i];
        if (buscarTexto == lma) {
            console.log(buscarTexto)
            console.log(lma)
            buscador.innerHTML += `<li class="list-group-item buscando">${lma}</li>`;
        }
    }

    if ((buscador.innerHTML = "")) {
        buscador.innerHTML += `<li class="list-group-item buscando">No se ha encontrado resultado</li>`;
    }
};

btnSubmit.addEventListener("click", filtrar);
