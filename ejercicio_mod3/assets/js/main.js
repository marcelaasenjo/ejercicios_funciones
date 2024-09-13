//Pregunta 1
const REGEX_FRASES = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/

function limpiarFrase(frase) {
    frase = frase.toLowerCase();
    frase = frase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    frase = frase.replace(/[^a-z0-9]/g, "");
    return frase;
}
function invertirFrase(frase) {
    var nuevaFrase = "";
    for (var i = frase.length - 1; i >= 0; i--) {
        nuevaFrase += frase[i];
    }
    return nuevaFrase;
}

function isPalindrome(frase) {
    var fraseLimpia = limpiarFrase(frase);
    var fraseInvertida = invertirFrase(fraseLimpia);

    if (fraseLimpia === fraseInvertida) {
        console.log(`True, ${frase} is Palindrome`)
    } else {
        console.log(`False, ${frase} not is Palindrome`)
    }

    return fraseLimpia === fraseInvertida;
}

const validarFrases = (frase, regex) => {
    if (frase === null || frase === undefined || frase.trim() === "") return 'No otorgado'
    if (!regex.test(frase)) throw new Error("Debes ingresar una cadena de texto");
    return frase;
}

document.getElementById('enviar').addEventListener('click', function () {
    var frase = document.getElementById('frase').value;
    var vof = document.getElementById('vof');

    try {
        var fraseValida = validarFrases(frase, REGEX_FRASES);

        if (fraseValida === 'No otorgado') {
            vof.textContent = "Debes ingresar una cadena de texto";
        } else if (isPalindrome(frase)) {
            vof.textContent = `True "${frase}" es un palíndromo`;
        } else {
            vof.textContent = `False "${frase}" no es un palíndromo`
        }
    } catch (error) {
        vof.textContent = error.message;
    }

})
//Pregunta 2

//Pregunta 3
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.getDetails = function () {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
};

const persona1 = new Persona("Benjamin", 20);
const persona2 = new Persona("Patricia", 25);
const persona3 = new Persona("David", 28);
const persona4 = new Persona("Marcela", 30);

function mostrarDetalles() {
    document.getElementById("detalles").innerHTML = `
        ${persona1.getDetails()}<br>
        ${persona2.getDetails()}<br>
        ${persona3.getDetails()}<br>
        ${persona4.getDetails()}
    `;
}
//Pregunta 4