const encrypt = document.getElementById("encrypt");
const decrypt = document.getElementById("decrypt");
const input = document.getElementById("input");
const output = document.getElementById("output");
const title2 = document.getElementById("title2");

function encriptar(texto) {
let textoEncriptado = "";
for (let i = 0; i < texto.length; i++) {
  if (texto[i] === "e") {
    textoEncriptado += "enter";
  } else if (texto[i] === "i") {
    textoEncriptado += "imes";
  } else if (texto[i] === "a") {
    textoEncriptado += "ai";
  } else if (texto[i] === "o") {
    textoEncriptado += "ober";
  } else if (texto[i] === "u") {
    textoEncriptado += "ufat";
  } else {
    textoEncriptado += texto[i];
  }
}

return textoEncriptado;
}

function desencriptar(texto) {
let textoDesencriptado = "";
for (let i = 0; i < texto.length; i++) {
  if (texto[i] === "e" && texto[i + 1] === "n" && texto[i + 2] === "t" && texto[i + 3] === "e" && texto[i + 4] === "r") {
    textoDesencriptado += "e";
    i += 4;
  } else if (texto[i] === "i" && texto[i + 1] === "m" && texto[i + 2] === "e" && texto[i + 3] === "s") {
    textoDesencriptado += "i";
    i += 3;
  } else if (texto[i] === "a" && texto[i + 1] === "i") {
    textoDesencriptado += "a";
    i += 1;
  } else if (texto[i] === "o" && texto[i + 1] === "b" && texto[i + 2] === "e" && texto[i + 3] === "r") {
    textoDesencriptado += "o";
    i += 3;
  } else if (texto[i] === "u" && texto[i + 1] === "f" && texto[i + 2] === "a" && texto[i + 3] === "t") {
    textoDesencriptado += "u";
    i += 3;
  } else {
    textoDesencriptado += texto[i];
  }
}

return textoDesencriptado;


}



encrypt.addEventListener("click", () => {
  title2.innerHTML = "Texto Encriptado:";
  output.innerHTML = encriptar(input.value);
});

decrypt.addEventListener("click", () => {
  output.innerHTML = desencriptar(input.value);
  title2.innerHTML = "Texto Desencriptado:";

});



