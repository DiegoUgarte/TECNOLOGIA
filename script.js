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

    const contenido = document.getElementById("contenido");

    contenido.innerHTML = `

        <section class="acceso-docente">

            <div class="login-docente">

                <div class="icono-docente">
                    👨‍🏫
                </div>

                <h2>
                    Acceso docente
                </h2>

                <p>
                    Esta sección está restringida
                    al docente.
                </p>

                <input
                    type="password"
                    id="passwordDocente"
                    placeholder="Ingrese la contraseña"
                    onkeydown="if(event.key === 'Enter') verificarDocente()"
                >

                <button onclick="verificarDocente()">
                    🔐 Entrar
                </button>

                <p id="mensajeAcceso"></p>

            </div>

        </section>

    `;

}
function verificarDocente() {

    const password =
        document.getElementById("passwordDocente").value;

    const mensaje =
        document.getElementById("mensajeAcceso");


    // CAMBIA ESTA CONTRASEÑA
    const passwordCorrecta = "Sistemas2026";


    if (password === passwordCorrecta) {

        mostrarPanelPrivado();

    } else {

        mensaje.innerHTML =
            "❌ Contraseña incorrecta.";

        mensaje.style.color = "red";

    }

}
function mostrarPanelPrivado() {

    document.getElementById("contenido").innerHTML = `

        <section class="panel-docente">

            <h2>👨‍🏫 Panel Docente</h2>

            <p>
                Bienvenido al área de administración
                de la plataforma.
            </p>

            <div class="panel-opciones">

                <div class="opcion-docente">

                    <h3>📚 Contenidos</h3>

                    <p>
                        Gestiona los contenidos de 4.º y 5.º
                        de secundaria.
                    </p>

                    <button onclick="administrarContenidos()">
                        📚 Administrar contenidos
                    </button>

                </div>


                <div class="opcion-docente">

                    <h3>📎 Materiales</h3>

                    <p>
                        Gestiona los materiales disponibles
                        para los estudiantes.
                    </p>

                    <button onclick="administrarMateriales()">
                        📎 Administrar materiales
                    </button>

                </div>


                <div class="opcion-docente">

                    <h3>📝 Actividades</h3>

                    <p>
                        Crea y organiza actividades
                        para los estudiantes.
                    </p>

                    <button onclick="administrarActividades()">
                        📝 Administrar actividades
                    </button>

                </div>

            </div>

        </section>

    `;

}
function administrarContenidos() {

    document.getElementById("contenido").innerHTML = `

        <section class="administracion">

            <button onclick="mostrarPanelPrivado()">
                ← Volver al panel
            </button>

            <h2>📚 Administrar contenidos</h2>

            <div class="formulario-admin">

                <label>Curso:</label>

                <select id="cursoContenido">

                    <option value="4">
                        4.º Secundaria
                    </option>

                    <option value="5">
                        5.º Secundaria
                    </option>

                </select>


                <label>Título:</label>

                <input
                    type="text"
                    id="tituloContenido"
                    placeholder="Ej: Programación Estructurada"
                >


                <label>Descripción:</label>

                <textarea
                    id="descripcionContenido"
                    placeholder="Descripción del contenido..."
                ></textarea>


                <button onclick="guardarContenido()">
                    💾 Guardar contenido
                </button>

            </div>


            <div id="listaContenidos">

            </div>

        </section>

    `;

    mostrarListaContenidos();

}
function guardarContenido() {

    const curso =
        document.getElementById("cursoContenido").value;

    const titulo =
        document.getElementById("tituloContenido").value;

    const descripcion =
        document.getElementById("descripcionContenido").value;


    if (!titulo || !descripcion) {

        alert("Completa todos los campos.");

        return;

    }


    let contenidos =
        JSON.parse(
            localStorage.getItem("contenidos")
        ) || [];


    contenidos.push({

        id: Date.now(),

        curso: curso,

        titulo: titulo,

        descripcion: descripcion

    });


    localStorage.setItem(
        "contenidos",
        JSON.stringify(contenidos)
    );


    alert("Contenido guardado correctamente.");


    document.getElementById(
        "tituloContenido"
    ).value = "";

    document.getElementById(
        "descripcionContenido"
    ).value = "";


    mostrarListaContenidos();

}
function mostrarListaContenidos() {

    const contenedor =
        document.getElementById("listaContenidos");

    if (!contenedor) {
        return;
    }

    let contenidos = JSON.parse(
        localStorage.getItem("contenidos")
    ) || [];

    if (contenidos.length === 0) {

        contenedor.innerHTML = `
            <p>
                No hay contenidos registrados.
            </p>
        `;

        return;
    }

    contenedor.innerHTML = "";

    contenidos.forEach(function(c) {

        const elemento = document.createElement("div");

        elemento.className = "item-admin";

        elemento.innerHTML = `

            <strong>
                ${c.titulo}
            </strong>

            <span>
                ${c.curso}.º Secundaria
            </span>

            <p>
                ${c.descripcion}
            </p>

            <button type="button">
                🗑️ Eliminar
            </button>

        `;

        const boton = elemento.querySelector("button");

        boton.addEventListener("click", function(event) {

            event.preventDefault();
            event.stopPropagation();

            eliminarContenido(c.id);

        });

        contenedor.appendChild(elemento);

    });

}
function eliminarContenido(id) {

    console.log("ID recibido:", id);

    let contenidos = JSON.parse(
        localStorage.getItem("contenidos")
    ) || [];

    console.log("Antes de eliminar:", contenidos);

    contenidos = contenidos.filter(function(contenido) {
        return String(contenido.id) !== String(id);
    });

    localStorage.setItem(
        "contenidos",
        JSON.stringify(contenidos)
    );

    console.log("Después de eliminar:", contenidos);

    mostrarListaContenidos();

}
function administrarMateriales() {

    document.getElementById("contenido").innerHTML = `

        <section class="administracion">

            <button onclick="mostrarPanelPrivado()">
                ← Volver al panel
            </button>

            <h2>📎 Administrar materiales</h2>

            <div class="formulario-admin">

                <label>Curso:</label>

                <select id="cursoMaterial">

                    <option value="4">
                        4.º Secundaria
                    </option>

                    <option value="5">
                        5.º Secundaria
                    </option>

                </select>


                <label>Nombre del material:</label>

                <input
                    type="text"
                    id="nombreMaterial"
                    placeholder="Ej: Ejercicios de Python"
                >


                <label>Ruta del archivo:</label>

                <input
                    type="text"
                    id="archivoMaterial"
                    placeholder="materiales/5to/python/ejercicios.pdf"
                >


                <button onclick="guardarMaterial()">

                    💾 Guardar material

                </button>

            </div>


            <div id="listaMateriales">

            </div>

        </section>

    `;

    mostrarListaMateriales();

}
function guardarMaterial() {

    const curso =
        document.getElementById("cursoMaterial").value;

    const nombre =
        document.getElementById("nombreMaterial").value;

    const archivo =
        document.getElementById("archivoMaterial").value;


    if (!nombre || !archivo) {

        alert("Completa todos los campos.");

        return;

    }


    let materialesGuardados =
        JSON.parse(
            localStorage.getItem("materiales")
        ) || [];


    materialesGuardados.push({

        id: Date.now(),

        curso: curso,

        nombre: nombre,

        archivo: archivo

    });


    localStorage.setItem(
        "materiales",
        JSON.stringify(materialesGuardados)
    );


    alert("Material guardado correctamente.");

    mostrarListaMateriales();

}
function mostrarListaMateriales() {

    const contenedor =
        document.getElementById("listaMateriales");

    if (!contenedor) return;


    let materialesGuardados =
        JSON.parse(
            localStorage.getItem("materiales")
        ) || [];


    if (materialesGuardados.length === 0) {

        contenedor.innerHTML =
            "<p>No hay materiales registrados.</p>";

        return;

    }


    contenedor.innerHTML =
        materialesGuardados.map(m => `

            <div class="item-admin">

                <strong>
                    ${m.nombre}
                </strong>

                <span>
                    ${m.curso}.º Secundaria
                </span>

                <p>
                    ${m.archivo}
                </p>

                <button
                    onclick="eliminarMaterial(${m.id})">

                    🗑️ Eliminar

                </button>

            </div>

        `).join("");

}
function eliminarMaterial(id) {

    let materialesGuardados =
        JSON.parse(
            localStorage.getItem("materiales")
        ) || [];


    materialesGuardados =
        materialesGuardados.filter(
            m => m.id !== id
        );


    localStorage.setItem(
        "materiales",
        JSON.stringify(materialesGuardados)
    );


    mostrarListaMateriales();

}
function administrarActividades() {

    document.getElementById("contenido").innerHTML = `

        <section class="administracion">

            <button onclick="mostrarPanelPrivado()">
                ← Volver al panel
            </button>

            <h2>📝 Administrar actividades</h2>

            <div class="formulario-admin">

                <label>Curso:</label>

                <select id="cursoActividad">

                    <option value="4">
                        4.º Secundaria
                    </option>

                    <option value="5">
                        5.º Secundaria
                    </option>

                </select>


                <label>Título:</label>

                <input
                    type="text"
                    id="tituloActividad"
                    placeholder="Ej: Ejercicio de Python"
                >


                <label>Descripción:</label>

                <textarea
                    id="descripcionActividad"
                    placeholder="Escribe las instrucciones..."
                ></textarea>


                <button onclick="guardarActividad()">

                    💾 Guardar actividad

                </button>

            </div>


            <div id="listaActividades">

            </div>

        </section>

    `;

    mostrarListaActividades();

}
function guardarActividad() {

    const curso =
        document.getElementById("cursoActividad").value;

    const titulo =
        document.getElementById("tituloActividad").value;

    const descripcion =
        document.getElementById("descripcionActividad").value;


    if (!titulo || !descripcion) {

        alert("Completa todos los campos.");

        return;

    }


    let actividades =
        JSON.parse(
            localStorage.getItem("actividades")
        ) || [];


    actividades.push({

        id: Date.now(),

        curso: curso,

        titulo: titulo,

        descripcion: descripcion

    });


    localStorage.setItem(
        "actividades",
        JSON.stringify(actividades)
    );


    alert("Actividad guardada correctamente.");

    mostrarListaActividades();

}
function mostrarListaActividades() {

    const contenedor =
        document.getElementById("listaActividades");

    if (!contenedor) return;


    let actividades =
        JSON.parse(
            localStorage.getItem("actividades")
        ) || [];


    if (actividades.length === 0) {

        contenedor.innerHTML =
            "<p>No hay actividades registradas.</p>";

        return;

    }


    contenedor.innerHTML =
        actividades.map(a => `

            <div class="item-admin">

                <strong>
                    ${a.titulo}
                </strong>

                <span>
                    ${a.curso}.º Secundaria
                </span>

                <p>
                    ${a.descripcion}
                </p>

                <button
                    onclick="eliminarActividad(${a.id})">

                    🗑️ Eliminar

                </button>

            </div>

        `).join("");

}
function eliminarActividad(id) {

    let actividades =
        JSON.parse(
            localStorage.getItem("actividades")
        ) || [];


    actividades =
        actividades.filter(
            a => a.id !== id
        );


    localStorage.setItem(
        "actividades",
        JSON.stringify(actividades)
    );


    mostrarListaActividades();

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
/* ==========================================
   MATERIALES
========================================== */

function mostrarMateriales() {

    let html = `

        <section>

            <div class="encabezado-curso">

                <h2>
                    📎 Materiales de estudio
                </h2>

                <p>
                    Descarga los materiales correspondientes
                    a tu curso.
                </p>

            </div>

            <div class="temas">
    `;


    materiales.forEach(material => {

        html += `

            <article class="tema">

                <div class="tema-numero">

                    ${
                        material.curso == 4
                        ? "4.º SECUNDARIA"
                        : "5.º SECUNDARIA"
                    }

                </div>

                <h3>
                    📄 ${material.nombre}
                </h3>

                <p>
                    ${material.descripcion}
                </p>

                <p>
                    <strong>
                        Categoría:
                    </strong>

                    ${material.categoria}
                </p>

                <a
                    href="${material.archivo}"
                    download
                    class="boton-descarga">

                    ⬇ Descargar material

                </a>

            </article>

        `;

    });


    html += `

            </div>

        </section>

    `;


    document.getElementById(
        "contenido"
    ).innerHTML = html;

}