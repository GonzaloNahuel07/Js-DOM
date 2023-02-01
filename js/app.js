// Javascript (DOM #01)
// El modelo de objeto de documento (DOM) es una interfaz de programación para los documentos HTML.
// Facilita una representación estructurada del documento y define de qué manera los programas pueden acceder, al fin de modificar, tanto su estructura, estilo y contenido.
// Una página web es un documento. Éste documento puede exhibirse en la ventana de un navegador o también como código fuente HTML.

// document
// document (opens new window)La interfaz Document representa cualquer página web cargada en el navegador y sirve como punto de entrada al contenido de la página (El árbol DOM).
console.log(document);

// Algunas propiedades:
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.domain);

// Algunos métodos:
// Document.getElementsByClassName(String className)
// Document.getElementsByTagName(String tagName)
// Document.getElementById(String id)
// Document.querySelector(String selector)
// Document.querySelectorAll(String selector)
// Document.createDocumentFragment()
// Document.createElement(String name)

// getElementById
// getElementById: Devuelve una referencia al elemento por su ID.

// HTML:
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>

// <body>

//     <h1 id="tituloWeb">Lorem, ipsum dolor.</h1>

//     <script src="app.js"></script>
// </body>

// </html>

// JS:
// console.log(document.getElementById("tituloWeb"));
// console.log(document.getElementById("tituloWeb").textContent);
// console.log(document.getElementById("tituloWeb").innerHTML);


// querySelector
// querySelector (opens new window): Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.

// HTML:
/* <h1 class="text-primary" id="tituloWeb">Lorem, ipsum dolor.</h1> */

//JS:
// console.log(document.querySelector("h1"));
// console.log(document.querySelector(".text-primary"));
// console.log(document.querySelector("#tituloWeb"));

// Otro Ejemplo:
// <div class="container">
//     <p class="text-danger">Lorem, ipsum dolor.</p>
//     <p class="text-danger">Lorem, ipsum dolor.</p>
//     <p class="text-danger">Lorem, ipsum dolor.</p>
// </div>

// <p class="text-danger">parrafo volando</p>
// // El primer elemento que encuentre
// console.log(document.querySelector(".text-danger"));

// // Todos
// console.log(document.querySelectorAll(".text-danger"));

// // Todo lo que esté en "container"
// console.log(document.querySelectorAll(".container .text-danger"));

// element
// element: eventos disponibles para los elementos HTML

// Algunas propiedades:

// const h1 = document.querySelector("#tituloWeb");

// console.log(h1.className);
// console.log(h1.id);
// console.log(h1.style);
// console.log(h1.tagName);
// console.log(h1.textContent);

// h1.textContent = "nuevo texto";
// h1.style.backgroundColor = "red";
// h1.style.color = "white";

// Algunos métodos:(opens new window)

// addEventListener: Registra un controlador de evento para un tipo de evento específico en un elemento.
// appendChild: Inserta un nodo así como el último nodo hijo de este elemento.
// hasAttributes: Verifica si el elemento tiene o no algún atributo

// Eventos
// En JavaScript, la interacción con el usuario se consigue mediante la captura de los eventos que éste produce. Un evento es una acción del usuario ante la cual puede realizarse algún proceso (por ejemplo, el cambio del valor de un formulario, o la pulsación de un enlace)

// addEventListener
// addEventListener (opens new window): Registra un evento a un objeto en específico.
// El Objeto especifico puede ser un simple elemento en un archivo, el mismo documento , una ventana o un XMLHttpRequest

// target.addEventListener(tipo, listener);
// tipo: tipo de evento a escuchar.
// listener: El objeto que recibe una notificación cuando un evento de el tipo especificado ocurre. Debe ser un objeto implementando la interfaz EventListener o solo una function en JavaScript

// click
// <button id="boton">Cambiar texto</button>
// <p id="parrafo">Lorem, ipsum dolor.</p>
// const boton = document.querySelector("#boton");
// const parrafo = document.querySelector("#parrafo");

// boton.addEventListener("click", () => {
//     parrafo.textContent = "Nuevo texto desde evento";
// });


// createElement
// createElement: El método document.createElement() crea un elemento HTML especificado por su tagName.
// Crear un <li>

// const li = document.createElement("li");
// li.textContent = "item desde javascript";
// console.log(li)


// appendChild
// appendChild (opens new window): Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.

//HTML:
// <ul id="listaDinamica">
//     <li>Elemento estático</li>
// </ul>


//JS:
// // elemento donde vamos a incorporar los <li>
// const listaDinamica = document.querySelector("#listaDinamica");

// // Creamos el <li>
// const li = document.createElement("li");

// // // Agregamos texto al <li>
// li.textContent = "item desde javascript";

// // // Finalmente incorporamos al <ul>
// listaDinamica.appendChild(li);
// listaDinamica.appendChild(li); // ¿qué pasó aquí? ***

// WARNING ***

// Si el child hace una referencia a un nodo existente en el documento, el método appendChild se mueve de su posición actual a su nueva posición.
// Ésto significa que el nodo no puede estar en dos puntos del documento de manera simultánea.

//Fragment
// La interfaz DocumentFragment representa un objeto de documento mínimo que no tiene padre.
// Se utiliza como una versión ligera de Document que almacena un segmento de una estructura de documento compuesta de nodos como un documento estándar.
// La gran diferencia se debe al hecho de que el fragmento de documento no forma parte de la estructura de árbol del documento activo.
// Los cambios realizados en el fragmento no afectan el documento (incluso en reflow) ni inciden en el rendimiento cuando se realizan cambios.

// const listaDinamica = document.querySelector("#listaDinamica");

// const arrayElementos = ["Perú", "Bolivia", "Colombia"];

// const fragment = document.createDocumentFragment(); // new DocumentFragment()

// arrayElementos.forEach((pais) => {
//     const li = document.createElement("li");
//     li.textContent = pais;
//     fragment.appendChild(li);
// });

// listaDinamica.appendChild(fragment);


//insertBefore
// fitstChild --> nos devuelve el primer elemento
// MOZILLA --> https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild
// insertBefore --> inserta al final
// MOZILLA --> https://developer.mozilla.org/es/docs/Web/API/Node/insertBefore

// parentNode.insertBefore(newNode, referenceNode);
// arrayElementos.forEach((pais) => {
//     const newNode = document.createElement("li");
//     newNode.textContent = pais;

//     // Nos devuelve el primer elemento
//     const referenceNode = fragment.firstChild;

//     // En caso de que no exista un nodo hijo tirará null
//     console.log("primer newNode", referenceNode);

//     // fragment.insertBefore(newNode, referenceNode);
//     // Si "referenceNode" es null, el newNode se insertará al final de la lista.
//     fragment.insertBefore(newNode, referenceNode);
// });


// template
// template: es un mecanismo para mantener el contenido HTML del lado del cliente que no se renderiza cuando se carga una página, pero que posteriormente puede ser instanciado durante el tiempo de ejecución empleando JavaScript.
// Piensa en la plantilla como un fragmento de contenido que está siendo almacenado para un uso posterior en el documento.

// HTML:
/* <ul id="listaDinamica"></ul>

<template id="liTemplate">
    <li class="list">
        <b>País: </b> <span class="text-primary"></span>
    </li>
</template>

<script src="app.js"></script> */

// JS:
// const listaDinamica = document.querySelector("#listaDinamica");

// const liTemplate = document.querySelector("#liTemplate");
// // es aconsejable clonar
// const clone = liTemplate.content.cloneNode(true);

// clone.querySelector("span").textContent = "Perú";

// listaDinamica.appendChild(clone);

// Fragment + Template

// const listaDinamica = document.querySelector("#listaDinamica");

// const arrayElementos = ["Perú", "Bolivia", "Colombia"];

// const fragment = document.createDocumentFragment();
// const liTemplate = document.querySelector("#liTemplate");

// arrayElementos.forEach((pais) => {
//     const clone = liTemplate.content.cloneNode(true);
//     clone.querySelector("span").textContent = pais;
//     fragment.appendChild(clone);
// });

// listaDinamica.appendChild(fragment);