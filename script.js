/* ==========================================
   CONTENIDOS DE LOS CURSOS
========================================== */

const cursos = {

    4: {

        nombre: "4.º de Secundaria",

        descripcion:
            "Fundamentos de Sistemas Informáticos y herramientas tecnológicas.",

        temas: [

            {
                titulo: "Introducción a la Informática",

                descripcion:
                    "Conceptos fundamentales de informática, hardware y software.",

                teoria: `
                    <p>
                    La informática es el área que estudia el tratamiento
                    automático de la información mediante computadoras
                    y otros dispositivos tecnológicos.
                    </p>

                    <h3>Hardware</h3>

                    <p>
                    Son los componentes físicos de una computadora.
                    </p>

                    <h3>Software</h3>

                    <p>
                    Son los programas y aplicaciones que permiten
                    utilizar el hardware.
                    </p>
                `,

                actividad:
                    "Identifica 10 componentes de una computadora y clasifícalos como hardware o software."

            },


            {
                titulo: "Tecnología Gráfica y Multimedia",

                descripcion:
                    "Introducción a los elementos visuales, imagen digital y herramientas multimedia.",

                teoria: `
                    <p>
                    La tecnología gráfica permite crear, editar y
                    presentar información mediante elementos visuales.
                    </p>

                    <h3>Elementos visuales</h3>

                    <ul>
                        <li>Línea</li>
                        <li>Forma</li>
                        <li>Color</li>
                        <li>Textura</li>
                        <li>Espacio</li>
                    </ul>
                `,

                actividad:
                    "Realiza un diseño sencillo utilizando texto, imágenes y colores."

            },


            {
                titulo: "Diseño Editorial",

                descripcion:
                    "Formatos, plantillas, bocetaje, diagramación y comunicación visual.",

                teoria: `
                    <p>
                    El diseño editorial organiza textos e imágenes
                    para comunicar información de manera clara.
                    </p>

                    <h3>Principales elementos</h3>

                    <ul>
                        <li>Formato</li>
                        <li>Plantillas</li>
                        <li>Bocetaje</li>
                        <li>Diagramación</li>
                        <li>Comunicación visual</li>
                    </ul>
                `,

                actividad:
                    "Diseña la portada de una revista relacionada con tecnología."

            }

        ]

    },


    5: {

        nombre: "5.º de Secundaria",

        descripcion:
            "Programación, Python y desarrollo de páginas web.",

        temas: [

            {
                titulo: "Introducción a la Programación",

                descripcion:
                    "Conceptos básicos de programación y primeros programas en Python.",

                teoria: `
                    <p>
                    Programar consiste en crear instrucciones que
                    una computadora puede interpretar para resolver
                    un problema.
                    </p>

                    <h3>Python</h3>

                    <p>
                    Python es un lenguaje de programación utilizado
                    para desarrollar diferentes tipos de aplicaciones.
                    </p>

                    <h3>Primer programa</h3>

                    <div class="codigo">
print("Hola mundo")
                    </div>
                `,

                actividad:
                    "Crea un programa en Python que muestre tu nombre, curso y unidad educativa."

            },


            {
                titulo: "Programación Estructurada",

                descripcion:
                    "Uso de variables, operadores, condiciones y ciclos.",

                teoria: `
                    <p>
                    La programación estructurada organiza un programa
                    utilizando estructuras lógicas.
                    </p>

                    <h3>Condicional if</h3>

                    <div class="codigo">
edad = 18

if edad >= 18:
    print("Es mayor de edad")
                    </div>

                    <h3>if, elif y else</h3>

                    <div class="codigo">
nota = 75

if nota >= 90:
    print("Excelente")

elif nota >= 60:
    print("Aprobado")

else:
    print("Reprobado")
                    </div>

                    <h3>Ciclo for</h3>

                    <div class="codigo">
for i in range(1, 6):
    print(i)
                    </div>
                `,

                actividad:
                    "Crea un programa que solicite una nota y determine si el estudiante aprobó o reprobó."

            },


            {
                titulo: "Diseño y Programación Web",

                descripcion:
                    "Creación de páginas web utilizando HTML.",

                teoria: `
                    <p>
                    HTML es un lenguaje utilizado para estructurar
                    el contenido de una página web.
                    </p>

                    <h3>Estructura básica</h3>

                    <div class="codigo">
&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;

&lt;head&gt;

    &lt;meta charset="UTF-8"&gt;

    &lt;title&gt;Mi página&lt;/title&gt;

&lt;/head&gt;

&lt;body&gt;

    &lt;h1&gt;Hola mundo&lt;/h1&gt;

    &lt;p&gt;Mi primera página web&lt;/p&gt;

&lt;/body&gt;

&lt;/html&gt;
                    </div>

                    <h3>Etiquetas importantes</h3>

                    <ul>
                        <li>&lt;h1&gt; → título</li>
                        <li>&lt;p&gt; → párrafo</li>
                        <li>&lt;img&gt; → imagen</li>
                        <li>&lt;a&gt; → enlace</li>
                        <li>&lt;div&gt; → contenedor</li>
                    </ul>
                `,

                actividad:
                    "Crea una página web que presente información personal, una imagen y un enlace."

            },

            {
                titulo: "HTML + CSS",

                descripcion:
                    "Aplicación de estilos para mejorar el diseño de las páginas web.",

                teoria: `
                    <p>
                    CSS permite modificar la apariencia visual
                    de una página web.
                    </p>

                    <h3>Ejemplo</h3>

                    <div class="codigo">
h1 {
    color: blue;
    text-align: center;
}
                    </div>

                    <p>
                    Con CSS podemos modificar colores, tamaños,
                    posiciones, fondos, bordes y mucho más.
                    </p>
                `,

                actividad:
                    "Agrega CSS a tu página personal y modifica el color, tamaño y posición de los elementos."

            }

        ]

    }

};


/* ==========================================
   MOSTRAR INICIO
========================================== */

function mostrarInicio() {

    document.getElementById("contenido").innerHTML = `

        <section class="inicio">

            <div class="hero">

                <div>

                    <span class="etiqueta">
                        EDUCACIÓN TÉCNICA
                    </span>

                    <h2>
                        Bienvenidos a Sistemas Informáticos
                    </h2>

                    <p>
                        Aprende informática mediante teoría,
                        práctica y proyectos.
                    </p>

                    <button
                        class="boton-principal"
                        onclick="mostrarCurso(5)">
                        Comenzar 🚀
                    </button>

                </div>

                <div class="hero-icon">
                    💻
                </div>

            </div>

            <h2 class="titulo-seccion">
                Selecciona tu curso
            </h2>

            <div class="cursos">

                <div
                    class="curso-card"
                    onclick="mostrarCurso(4)">

                    <div class="curso-numero">
                        4.º
                    </div>

                    <h3>
                        Cuarto de Secundaria
                    </h3>

                    <p>
                        Fundamentos de informática,
                        tecnología gráfica y diseño.
                    </p>

                </div>


                <div
                    class="curso-card"
                    onclick="mostrarCurso(5)">

                    <div class="curso-numero">
                        5.º
                    </div>

                    <h3>
                        Quinto de Secundaria
                    </h3>

                    <p>
                        Python, programación y desarrollo web.
                    </p>

                </div>

            </div>

        </section>
    `;
}


/* ==========================================
   MOSTRAR CURSO
========================================== */

function mostrarCurso(numero) {

    const curso = cursos[numero];

    let html = `

        <section>

            <div class="encabezado-curso">

                <h2>
                    ${curso.nombre}
                </h2>

                <p>
                    ${curso.descripcion}
                </p>

            </div>

            <h2 class="titulo-seccion">
                📚 Contenidos
            </h2>

            <div class="temas">
    `;


    curso.temas.forEach((tema, indice) => {

        html += `

            <article class="tema">

                <div class="tema-numero">
                    TEMA ${indice + 1}
                </div>

                <h3>
                    ${tema.titulo}
                </h3>

                <p>
                    ${tema.descripcion}
                </p>

                <button
                    onclick="mostrarTema(${numero}, ${indice})">

                    Ver contenido →

                </button>

            </article>

        `;

    });


    html += `

            </div>

        </section>

    `;


    document.getElementById("contenido").innerHTML = html;

}


/* ==========================================
   MOSTRAR TEMA
========================================== */

function mostrarTema(cursoNumero, temaNumero) {

    const curso = cursos[cursoNumero];

    const tema = curso.temas[temaNumero];


    document.getElementById("contenido").innerHTML = `

        <section class="detalle">

            <button
                onclick="mostrarCurso(${cursoNumero})">

                ← Volver al curso

            </button>

            <br><br>

            <h2>
                ${tema.titulo}
            </h2>

            <p>
                ${tema.descripcion}
            </p>

            <hr><br>

            ${tema.teoria}


            <div class="actividad">

                <h3>
                    📝 Actividad práctica
                </h3>

                <p>
                    ${tema.actividad}
                </p>

                <br>

                <button
                    onclick="completarActividad(this)">

                    Marcar como realizada ✓

                </button>

            </div>

        </section>

    `;

}


/* ==========================================
   ACTIVIDAD COMPLETADA
========================================== */

function completarActividad(boton) {

    boton.innerHTML =
        "✓ Actividad realizada";

    boton.parentElement.classList.add(
        "completada"
    );

    localStorage.setItem(
        "actividadRealizada",
        "true"
    );

}


/* ==========================================
   RECURSOS
========================================== */

function mostrarRecursos() {

    document.getElementById("contenido").innerHTML = `

        <section>

            <div class="encabezado-curso">

                <h2>
                    📚 Recursos
                </h2>

                <p>
                    Herramientas y sitios útiles para
                    aprender Sistemas Informáticos.
                </p>

            </div>


            <div class="recursos">

                <div class="recurso">

                    <h3>🐍 Python</h3>

                    <p>
                        Sitio oficial del lenguaje Python.
                    </p>

                    <a
                        href="https://www.python.org/"
                        target="_blank">

                        Visitar →

                    </a>

                </div>


                <div class="recurso">

                    <h3>🌐 HTML</h3>

                    <p>
                        Aprende los fundamentos del
                        desarrollo web.
                    </p>

                    <a
                        href="https://developer.mozilla.org/es/docs/Web/HTML"
                        target="_blank">

                        Ver recurso →

                    </a>

                </div>


                <div class="recurso">

                    <h3>🎨 CSS</h3>

                    <p>
                        Aprende a diseñar páginas web.
                    </p>

                    <a
                        href="https://developer.mozilla.org/es/docs/Web/CSS"
                        target="_blank">

                        Ver recurso →

                    </a>

                </div>


                <div class="recurso">

                    <h3>💻 Programación</h3>

                    <p>
                        Practica conceptos de programación
                        mediante diferentes ejercicios.
                    </p>

                </div>

            </div>

        </section>

    `;

}


/* ==========================================
   MODO OSCURO
========================================== */

const botonModo =
    document.getElementById("modoOscuro");


botonModo.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "oscuro"
        );


        if (
            document.body.classList.contains(
                "oscuro"
            )
        ) {

            botonModo.innerHTML = "☀️";

            localStorage.setItem(
                "modo",
                "oscuro"
            );

        } else {

            botonModo.innerHTML = "🌙";

            localStorage.setItem(
                "modo",
                "claro"
            );

        }

    }
);


/* ==========================================
   CARGAR MODO GUARDADO
========================================== */

if (
    localStorage.getItem("modo")
    === "oscuro"
) {

    document.body.classList.add(
        "oscuro"
    );

    botonModo.innerHTML = "☀️";

}
/* ==========================================
   PANEL DOCENTE
========================================== */


/*
    Obtener contenidos creados por el docente
*/

function obtenerContenidosDocente() {

    const contenidos =
        localStorage.getItem("contenidosDocente");

    if (contenidos) {

        return JSON.parse(contenidos);

    }

    return [];

}


/*
    Guardar contenidos
*/

function guardarContenidosDocente(contenidos) {

    localStorage.setItem(
        "contenidosDocente",
        JSON.stringify(contenidos)
    );

}


/* ==========================================
   MOSTRAR PANEL DOCENTE
========================================== */

function mostrarPanelDocente() {

    const contenidos =
        obtenerContenidosDocente();


    document.getElementById("contenido").innerHTML = `

        <section class="panel-docente">

            <div class="panel-titulo">

                <h2>
                    👨‍🏫 Panel Docente
                </h2>

                <p>
                    Administra los contenidos y actividades
                    de tus estudiantes.
                </p>

            </div>


            <!-- ESTADÍSTICAS -->

            <div class="estadisticas">

                <div class="estadistica">

                    <div class="numero">
                        ${contenidos.length}
                    </div>

                    <p>
                        Contenidos creados
                    </p>

                </div>


                <div class="estadistica">

                    <div class="numero">
                        ${cursos[4].temas.length}
                    </div>

                    <p>
                        Temas de 4.º
                    </p>

                </div>


                <div class="estadistica">

                    <div class="numero">
                        ${cursos[5].temas.length}
                    </div>

                    <p>
                        Temas de 5.º
                    </p>

                </div>

            </div>


            <!-- FORMULARIO -->

            <div class="formulario-docente">

                <h3>
                    ➕ Agregar nuevo contenido
                </h3>


                <div class="campo">

                    <label>
                        Curso
                    </label>

                    <select id="cursoNuevo">

                        <option value="4">
                            4.º de Secundaria
                        </option>

                        <option value="5">
                            5.º de Secundaria
                        </option>

                    </select>

                </div>


                <div class="campo">

                    <label>
                        Título del contenido
                    </label>

                    <input
                        type="text"
                        id="tituloNuevo"
                        placeholder="Ej.: Introducción a JavaScript">

                </div>


                <div class="campo">

                    <label>
                        Descripción
                    </label>

                    <input
                        type="text"
                        id="descripcionNuevo"
                        placeholder="Descripción breve del tema">

                </div>


                <div class="campo">

                    <label>
                        Contenido / teoría
                    </label>

                    <textarea
                        id="teoriaNueva"
                        placeholder="Escribe aquí la teoría del tema..."></textarea>

                </div>


                <div class="campo">

                    <label>
                        Actividad práctica
                    </label>

                    <textarea
                        id="actividadNueva"
                        placeholder="Escribe aquí la actividad para los estudiantes..."></textarea>

                </div>


                <button
                    class="boton-guardar"
                    onclick="agregarContenido()">

                    💾 Guardar contenido

                </button>

            </div>


            <!-- CONTENIDOS CREADOS -->

            <h3>
                📚 Mis contenidos
            </h3>

            <br>

            <div class="lista-contenidos">

                ${
                    contenidos.length === 0

                    ?

                    `
                    <div class="contenido-docente">

                        <p>
                            Todavía no has creado contenidos
                            desde el panel docente.
                        </p>

                    </div>
                    `

                    :

                    contenidos.map(
                        (contenido, indice) => `

                        <div class="contenido-docente">

                            <span class="curso">

                                ${
                                    contenido.curso == 4
                                    ? "4.º SECUNDARIA"
                                    : "5.º SECUNDARIA"

                                }

                            </span>

                            <h4>
                                ${contenido.titulo}
                            </h4>

                            <p>
                                ${contenido.descripcion}
                            </p>


                            <div class="acciones-contenido">

                                <button
                                    class="boton-ver"
                                    onclick="verContenidoDocente(${indice})">

                                    👁 Ver

                                </button>


                                <button
                                    class="boton-eliminar"
                                    onclick="eliminarContenido(${indice})">

                                    🗑 Eliminar

                                </button>

                            </div>

                        </div>

                    `
                    ).join("")

                }

            </div>

        </section>

    `;

}


/* ==========================================
   AGREGAR CONTENIDO
========================================== */

function agregarContenido() {

    const curso =
        document.getElementById(
            "cursoNuevo"
        ).value;


    const titulo =
        document.getElementById(
            "tituloNuevo"
        ).value.trim();


    const descripcion =
        document.getElementById(
            "descripcionNuevo"
        ).value.trim();


    const teoria =
        document.getElementById(
            "teoriaNueva"
        ).value.trim();


    const actividad =
        document.getElementById(
            "actividadNueva"
        ).value.trim();


    /* VALIDAR */

    if (
        titulo === "" ||
        descripcion === "" ||
        teoria === "" ||
        actividad === ""
    ) {

        alert(
            "Por favor completa todos los campos."
        );

        return;

    }


    /* CREAR OBJETO */

    const nuevoContenido = {

        id: Date.now(),

        curso: curso,

        titulo: titulo,

        descripcion: descripcion,

        teoria: teoria,

        actividad: actividad

    };


    /* OBTENER CONTENIDOS */

    const contenidos =
        obtenerContenidosDocente();


    /* AGREGAR */

    contenidos.push(
        nuevoContenido
    );


    /* GUARDAR */

    guardarContenidosDocente(
        contenidos
    );


    alert(
        "Contenido guardado correctamente."
    );


    /* ACTUALIZAR PANEL */

    mostrarPanelDocente();

}


/* ==========================================
   VER CONTENIDO
========================================== */

function verContenidoDocente(indice) {

    const contenidos =
        obtenerContenidosDocente();


    const contenido =
        contenidos[indice];


    document.getElementById(
        "contenido"
    ).innerHTML = `

        <section class="detalle">

            <button
                onclick="mostrarPanelDocente()">

                ← Volver al panel

            </button>

            <br><br>


            <h2>
                ${contenido.titulo}
            </h2>


            <p>
                ${contenido.descripcion}
            </p>


            <hr>

            <br>


            <h3>
                📖 Contenido
            </h3>


            <p>
                ${contenido.teoria.replace(
                    /\n/g,
                    "<br>"
                )}
            </p>


            <div class="actividad">

                <h3>
                    📝 Actividad
                </h3>

                <p>
                    ${contenido.actividad.replace(
                        /\n/g,
                        "<br>"
                    )}
                </p>

            </div>

        </section>

    `;

}


/* ==========================================
   ELIMINAR CONTENIDO
========================================== */

function eliminarContenido(indice) {

    const confirmar =
        confirm(
            "¿Seguro que deseas eliminar este contenido?"
        );


    if (!confirmar) {

        return;

    }


    const contenidos =
        obtenerContenidosDocente();


    contenidos.splice(
        indice,
        1
    );


    guardarContenidosDocente(
        contenidos
    );


    mostrarPanelDocente();

}