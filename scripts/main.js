const a_que_es_la_leucemia = document.querySelector('#a-que-es-la-leucemia')
const section_que_es_la_leucemia = document.querySelector('#section-que-es-la-leucemia')
const btn_close_section = document.querySelector('#btn-close-section')

let animado = document.querySelectorAll('.animado');

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        console.log(alturaAnimado)
        if (alturaAnimado - 400 < scrollTop) {
            animado[i].style.opacity = 1;
        }        
    }
}


    window.addEventListener("scroll", mostrarScroll);

a_que_es_la_leucemia.addEventListener('click', function() {
    section_que_es_la_leucemia.style.display = 'block'
})

btn_close_section.addEventListener('click', function() {
    section_que_es_la_leucemia.style.display = 'none'
})

