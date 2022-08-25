    //_____Manipulacion del DOM basica_____ 
const h1 = document.querySelector(`h1`);
// const parrafito = document.getElementsByClassName(`.parrafito`);
// const p = document.querySelector(`p`);
// const pid = document.getElementById(`pid`);
const form = document.querySelector(`#formulario`);
const input1 = document.querySelector(`#calculo1`);
const input2 = document.querySelector(`#calculo2`);
const btn = document.querySelector(`#btnCalcular`);
const pResult = document.querySelector(`#result`);

/*function btnOnClick() {
    console.log(input1.value + input2.value);
}*/

//las funciones de Number() y parseInt() nos ayudan a las suma de numeros y no concatenarlos como strings. siempre van dentro de otro parentesis que encierre todo...Ejemplo:
/*function btnOnClick() {
    const sumaInputs = (Number(input1.value) - Number(input2.value));
    pResult.innerHTML = "Resultado: " + sumaInputs;
}*/

// btn.addEventListener(`click`, btnOnClick);

//en caso dado de tener un formulario encerrando todo un grupo de inputs y botones se tienen que ejecutar un grupo de metodos dentro del obejeto al que mandamos llamar
// form.addEventListener(`submit`, sumarInputsValues);

// function sumarInputsValues(event) {
//     event.preventDefault();//este metodo sirve para qe no ejecute lo que por defecto hace el formulario en html.esto aparece en el la consola del navegador.
//     const sumaInputs = input1.value + input2.value;
//     pResult.innerHTML = "Resultado: " + sumaInputs;

// Para que estas funcocion se pueda ejecutar tenemos que agregarle un `type` con el valor `button`.
//     btn.addEventListener(`click`, sumarInputsValues);
//     function sumarInputsValues() {
//     const sumaInputs = input1.value + input2.value;
//     pResult.innerHTML = "Resultado: " + sumaInputs;
// }

//tipos de Events para el metodo addEventListener
/*Los tipos de evento a escuchar, son los eventos ya conocidos de javascript, http://www.w3schools.com/jsref/dom_obj_event.asp:

-blur Cuando el elemento pierde el foco.
-click El usuario hace clic sobre el elemento.
-dblclick El usuario hace doble clic sobre el elemento.
-focus El elemento gana el foco.
-keydown El usuario presiona una tecla.
-keypress El usuario presiona una tecla y la mantiene pulsada.
-keyup El usuario libera la tecla.
-load El documento termina su carga.
-mousedown El usuario presiona el botón del ratón en un elemento.
-mousemove El usuario mueve el puntero del ratón sobre un elemento.
-mouseout El usuario mueve el puntero fuera de un elemento.
-mouseover El usuario mantiene el puntero sobre un elemento.
-mouseup El usuario libera el botón pulsado del ratón sobre un elemento.
-unload El documento se descarga, bien porque se cierra la ventana, bien porque se navega a otra página.
Función que se ejecuta cuando se escucha el evento.

El booleano, es opcional, es un valor que define el orden del flujo de los eventos, cuando hay varios eventos posibles.

si tenemos un botón dentro de un div y dentro del body.

true: El flujo de eventos es como el representado, y la fase de captura ocurre al lanzarse el evento. El orden de propagación para el ejemplo siguiría el orden del árbol del documento en el DOM (http://www.w3.org/TR/DOM-Level-3-Events/#event-flow)y sería, por tanto, el indicado, body-div-button
false: Permite saltar la fase de captura, y la propagación seguiría sólo la burbuja. Así, el orden sería button-div-body.*/

// const parrafoExample = document.querySelector(`#TextExample`);

// parrafoExample.addEventListener(`keydown`, liberarTecla);

// function liberarTecla(){
//     document.innerHTML
// } 


