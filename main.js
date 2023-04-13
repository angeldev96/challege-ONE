

//encriptar texto con md5 desde el formulario de index.html

function encriptar() {
    var texto = document.getElementById("textEncript").value;
    var encriptado = md5(texto);
    document.getElementById("encriptado").value = encriptado;
}

//desencriptar texto con md5 desde el formulario de index.html

function desencriptar() {
    var texto = document.getElementById("texto").value;
    var desencriptado = md5(texto);
    document.getElementById("desencriptado").value = desencriptado;
}

