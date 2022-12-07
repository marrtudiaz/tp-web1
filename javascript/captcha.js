let captchaText = document.querySelector('#captcha');
let TextoUsuario = document.querySelector('#textBox');
let submitButton = document.querySelector('#submitButton');
let output = document.querySelector('#output');
let refreshButton = document.querySelector('#refreshButton');
let AbcNum = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];

for (let i = 1; i <= 7; i++) {
    emptyArr.push(AbcNum[Math.floor(Math.random() * AbcNum.length)]);
}

captchaText.innerHTML = emptyArr.join('');

submitButton.addEventListener('click', agregar)
function agregar(e) {
    e.preventDefault();
    if (TextoUsuario.value === captchaText.innerHTML) {
        output.innerHTML = "Correcto, los datos han sido enviados.";
    } else {
        output.innerHTML = "Incorrecto, intentelo nuevamente.";
    }
}

refreshButton.addEventListener('click', function () {
    TextoUsuario.value = "";
    let refreshArr = [];
    for (let j = 1; j <= 7; j++) {
        refreshArr.push(AbcNum[Math.floor(Math.random() * AbcNum.length)]);
    }
    captchaText.innerHTML = refreshArr.join('');
    output.innerHTML = "";
});