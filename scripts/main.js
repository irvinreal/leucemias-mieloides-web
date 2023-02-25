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
        if ((document.querySelector(section).style.display = "block")) {
            document.querySelector(section).style.display = "block";
        }
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
            // console.log(entrada.target);
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
    threshold: 0.1,
});

section.forEach((element) => {
    observador.observe(element);
});

// const tipos_tipo_a = document.getElementsByClassName("tipos-tipo-a");

// tipos_tipo_a.addEventListener("click", (e) => {
//     console.log(e);
//     console.log("click");
// });

const tipos_tipo_parr = document.querySelectorAll(".tipos-tipo-parr");
const details = document.querySelectorAll(".details");
const list_tipo = document.querySelector(".list-tipo");

list_tipo.addEventListener("click", (e) => {
    if (e.target && e.target.tagName === "A") {
        e.preventDefault()
        let section = document.querySelector(e.target.hash);
        // console.log(tipos_tipo_parr);
        tipos_tipo_parr.forEach((element) => {
            // console.log(element);
            element.classList.remove("on");
        });
        section.classList.toggle("on");
    }
});
