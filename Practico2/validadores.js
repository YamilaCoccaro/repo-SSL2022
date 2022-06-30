var ascii, posicion, flag;

export function validar(cadena) {
    var i = 0;
    var resultado = true;

    if (!(controlPuntoYComa(cadena))) {
        console.error(" -->Faltó \";\" al final de la cadena");
        resultado = false;
    }
    while (resultado && i < cadena.length) {
        if (!(controlDigito(cadena.charAt(i)))) {
            console.error(" --> No cumple con \"Dígito-Operador-Dígito\"(1)");
            resultado = false;
        }
        i += 2;
    }
    i = 1;
    while (resultado && i < cadena.length - 1) {
        if (!(controlOperador(cadena.charAt(i)))) {
            console.error(" --> No cumple con \"Dígito-Operador-Dígito\"(2)");
            resultado = false;
        }
        i += 2;
    }
    if (resultado) {
        if (!(controlDivCero(cadena))) {
            console.error(" --> División por cero");
            resultado = false;
        }
    }
    return resultado;
}

function controlDigito(caracter) {
    ascii = caracter.charCodeAt(0)
    if ((ascii > 47) && (ascii < 58)) {//Si es un número entre 0 y 9
        return true;
    }
    else {
        return false;
    }
}

function controlOperador(caracter) {
    if ((caracter == '+') || (caracter == '-') || (caracter == '*') || (caracter == '/')) {
        return true;
    }
    else {
        return false;
    }
}
function controlPuntoYComa(cadena) {
    if ((cadena.charAt(cadena.length - 1)) == ';') {
        return true;
    }
    else {
        return false;
    }
}

function controlDivCero(cad) {
    posicion = cad.indexOf('/');
    if (posicion != -1) {//hay un /
        if ((cad.charAt(posicion + 1)) != 0) { //no hay un cero despues de /
            controlDivCero(cad.substring(posicion + 1, cad.length));
        }
        else {//Hay un cero despues de /
            console.error("hay cero en ", posicion + 1);
            flag = false;
        }
    }
    else {//no hay division
        flag = true;
    }
    return flag;
}