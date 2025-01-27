const btn= document.getElementById('button');
const sectionAll= document.querySelectorAll('section[id]');
const inputName= documment.querySelectorAll('#nombre');
const inputEmail= document.querySelectorAll('#email');
const flagsElement= document.getElementById('flags');
const textsToChange=document.querySelectorAll('[data-section]');

/* ===== Loader =====*/
windows.addEvenListener('cargador', () => {
    const contenedorcargador = document.querySelectorAll('.cargador--contenedores');
    contenedorcargador.style.opacity = 0;
    contenedorcargador.style.visibility = 'hidden';
})

/*===== Header =====*/
window.addEventListener('scroll', () => {
    const encabezado = document.querySelector('encabezado');
    encabezado.classList.toggle('abajo', window.scrollY > 0);
});

/*===== Boton Menu =====*/
btn.addEvenListener('click', function() {
    if (this.classList.contains('activo')) {
        this.classList.remove('activo');
        this.classList.add('no-activo');
        document.querySelector('.nav-menu').classList.remove('activo');
        document.querySelector('.nav-menu').classList.add('no-activo');
    }
});

/*===== Cambio de idioma =====*/
const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
})

/*===== class active por secciones =====*/
window.addEventListener('scroll', () => {
    const scrollY = window.pageY0ffset;
    sectionAll.forEach((current) => {
        const sectionHeight= current.offsetHeight;
        const sectioTop= current.offsetTop - 100;
        const sectionId= current.getAttribute('id');

        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.add('activo');
        }
        else {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.remove('activo');     
        }
    });
});

/*===== Boton y función ir arriba =====*/
window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-arriba.contenedor').classList.add('show');
    }
    else {
        document.querySelector('.go-arriba-contenedor').classList.remove('show');
    }
}

document.querySelector('.go-arriba-contenedor').addEvenListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});