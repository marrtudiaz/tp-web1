
"use strict";
let vestidos = []

const BASE_API = "https://62bcde7d6b1401736c01d2b6.mockapi.io/api/vestidos";

document.addEventListener("DOMContentLoaded", inicializar)

let id;
async function mostrarTabla() {
  let respuesta = await fetch(BASE_API);
  vestidos = await respuesta.json();
  cuerpoTabla.innerHTML = "";
  for (const vestido of vestidos) {
    id = vestido.id;
    cuerpoTabla.innerHTML += `
    <tr>
      <td>${vestido.talle}</td>
      <td>${vestido.tela}</td>
      <td>${vestido.color}</td>
      <td><button class="btnEdit" data-id="${vestido.id}">Editar</button></td>
      <td><button class="btneliminar" data-id="${vestido.id}">Borrar</button></td>
    </tr>
    `;
  }
  asociarEventos()
}
async function inicializar() {
  mostrarTabla()
}

function asociarEventos() {
  let botonesEditar = document.querySelectorAll(".btnEdit") // []
  for (let botn of botonesEditar) {
    botn.addEventListener("click", initEditForm)

  }
  let botonesEliminar = document.querySelectorAll(".btneliminar") // []
  for (let botn of botonesEliminar) {
    botn.addEventListener("click", Borrar)

  }
}



async function modificar(event) {
  event.preventDefault();


  let formData = new FormData(this)
  let datos = {
    talle: formData.get("talle"),
    tela: formData.get("tela"),
    color: formData.get("color")
  }

  let response = null;
  fieldsetEdit.disabled = true
  try {
    response = await fetch(BASE_API + "/" + formData.get("id"), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
    })
  } catch (ex) {
    console.log(ex)
  }
  if (response == null) {
    // Muestro mensaje de error
    return;
  }

  console.log(response.ok)

  formEdit.classList.add("oculto")
  formEdit.reset();
  fieldsetEdit.disabled = false

  await mostrarTabla();
}
document.addEventListener('DOMContentLoaded', mostrarTabla)

function initEditForm(event) {
  formEdit.classList.remove("oculto")
  const idSeleccionado = this.dataset.id;
  let vestidosSeleccionada = vestidos.find(
    function (vestidos) {
      return vestidos.id == idSeleccionado
    })
  inputEditId.value = vestidosSeleccionada.id
  inputEditTalle.value = vestidosSeleccionada.talle
  inputEditTela.value = vestidosSeleccionada.tela
  inputEditColor.value = vestidosSeleccionada.color

}
async function Borrar(idSeleccionado) {

  try {
    let res = await fetch(`${BASE_API}/${id}`, {
      "method": "DELETE",
    }
    );

    if (res.status === 200) {

      mostrarTabla();
      mensaje.innerHTML = "Ha sido eliminado";

    }
    asociarEventos()
  }

  catch (error) {
    console.log(error);
    mensaje.innerHTML = "Hubo un error";
  }

}

formEdit.addEventListener("submit", modificar)

async function agregarDatosTabla() {
  let mensaje = document.querySelector("#mensaje");
  let color = document.querySelector('#color').value;
  let talle = parseInt(document.querySelector('#talle').value);
  let tela = document.querySelector('#tela').value;
  let vestidos = {
    "talle": talle,
    "tela": tela,
    "color": color,
  }

  try {
    let res = await fetch(BASE_API, {
      "method": "POST",
      "headers": { "Content-type": "application/json" },
      "body": JSON.stringify(vestidos)
    }
    );

    let json = await res.json();

    if (res.status === 201) {

      mostrarTabla();
      mensaje.innerHTML = "Los datos han sido cargados correctamente";

    }
  }

  catch (error) {
    console.log(error);
    mensaje.innerHTML = "Hubo un error";
  }


}

let botonAdd = document.querySelector("#btnAdd");
botonAdd.addEventListener("click", agregarDatosTabla);

let comentarioX3 = document.querySelector("#x3");

comentarioX3.addEventListener("click", agregarTres);
function agregarTres(e) {
  e.preventDefault();
  for (let i = 0; i < 3; i++) {
    agregarDatosTabla()
  }
}
