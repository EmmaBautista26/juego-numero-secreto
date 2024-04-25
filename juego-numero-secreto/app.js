/*
HTML	Lenguaje de marcado para estructurar contenido.	    Título, Párrafo
CSS	Lenguaje de estilos para presentación y estilización.	p { color: blue; } div { background: #f2f2f2; }
JavaScript	Lenguaje de programación para interactividad.	function inicarJogo() { ... }
*/
/*Llamar un "objeto, elemento" desde HTML hacia JS y que lo interprete. Guardar en una variable para
poder agregar el texto.
let tituloPrincipal=document.querySelector(`h1`);
Ahora a la variable le asiganamos un texto que se va a mostrar en la página, a través de .innerHTML
tituloPrincipal.innerHTML="¡JUEGO DEL NÚMERO SECRETO!";
let parrafoInstrucciones=document.querySelector(`p`);
parrafoInstrucciones.innerHTML="Escoge un número entre el 1 y 10:";
*/

//En vez de repetir código con cada elemento , título, parrafo, se puede optimizar con una función de la siguiente manera:
let numeroSecreto=0; //La variable adquirirá el valor que le arroje la función
let intentos=0; //contador de intentos
let numerosSorteados=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento,texto) { //Declarar función, y entre paren poner parametros para que asigne, y 
    //funcione como una variable.
    let elementoEnHTML=document.querySelector(elemento);//llamar un elemento desde HTML
    elementoEnHTML.innerHTML=texto;
    return;
}

function verificarIntento()  {
    //parse.Int para convertir el input en number; document.getElementById() para tomar el input con ese id; value para que te arroje el valor.
    //typeof() para saber si es string o number
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    if ( numeroSecreto===numeroDeUsuario) {
        //Dentro del parametro texto se pueden usar comillas invertidas
        //para agregar el valor de una variable o para usar el operador ternario.
        asignarTextoElemento('p',`¡Bien! Lo lograste en ${intentos} ${ (intentos==1) ? 'intento':'intentos'}.`); 
        //La siguiente línea funciona para habilitar el botón de Reiniciar Juego. 
        //tomamos el elemento por id, y removemos el atributo disabled
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (numeroSecreto>numeroDeUsuario){
            asignarTextoElemento('p','¡Cerca! El número es mayor.');
        }else{
        asignarTextoElemento('p','¡Cerca! El número es menor.');
        }
        intentos++; //suma 1 cada que se ejecuta el código (cada que se hace un intento) 
        limpiarCampo();
    }
    return;
}

//Función para limpiar el campo
function limpiarCampo(){
    /*
    let valorCampo=document.querySelector('#valorUsuario');
    valorCampo.value=''; //agregar el .value para que tome ese valor
    O: */
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(numerosSorteados);
    //Si ya sorteamos todos los números
    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
} //no es necesario declarar la variable para no generar confusión
   

//Hacer una función (Proceso que realiza una tarea), agregar el nombre de la función
//HTML llama la función y JS es dónde se declara.


function condicionesIniciales(){
    //Mostrar textos inciales
    asignarTextoElemento("h1", "¡Juego del Número Secreto!");
    asignarTextoElemento("p", "Escoge un número entre 1 y 10");
    //Generar nuevo número secreto
    numeroSecreto=generarNumeroSecreto();
    //Reiniciar contador
    intentos=1;
} 

function reiniciarJuego(){
    //Limpiar campo
    limpiarCampo();
    //Condiciones iniciales reiniciadas
    condicionesIniciales();
    //Desactivar botón de Iniciar juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}
condicionesIniciales();




/*
Sin retorno y sin parámetros.	function saludo() { ... }	                Ejecución de un bloque de código simple.
Sin devolución y con parámetros	function saludar(nombre) { ... }	        Ejecutar un bloque de código con argumentos.
Con retorno y sin parámetros	function generarNumeroAleatorio() { ... }	Cálculo y devolución de un valor específico.
Con retorno y con parámetros.	function sumar(a, b) { ... }	            Cálculo y retorno basado en argumentos.
función anónima	                let saludo = function() { ... };	        Definir una función sin nombre localmente.
Función de flecha	            let cuadrado = x => x * x;	                Definición concisa de funciones cortas.
*/