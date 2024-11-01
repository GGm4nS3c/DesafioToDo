const tareas = [
  { id: "1", nombreTarea: "Cocinar", terminada: true },
  { id: "2", nombreTarea: "Limpiar", terminada: false },
];

const btnAdd = document.querySelector("#agregarTarea");
const nuevaTareaInput = document.querySelector("#nuevaTareaInput");
let idtareas = tareas.length;

function agregarTarea() {
  idtareas++;
  const nuevaTarea = {
    id: idtareas,
    nombreTarea: nuevaTareaInput.value,
    terminada: false,
  };
  tareas.push(nuevaTarea);
  renderTareas();
  nuevaTareaInput.value = "";
}

function removerTarea(id) {
  const tarearemovida = tareas.findIndex((tarea) => tarea.id == id);
  console.log("Removiendo tarea:" + tarearemovida);
  tareas.splice(tarearemovida, 1);
  renderTareas();
}

function renderTareas() {
  let html = "";
  document.querySelector("#total").innerHTML = tareas.length;
  let totalRealizadas = 0;
  for (tarea of tareas) {
    let check = "";
    if (tarea.terminada) {
      check = "checked";
      totalRealizadas++;
    }
    html += `
<tr>
<td>${tarea.id}</td>
<td>${tarea.nombreTarea}</td>
<td><input type="checkbox" ${check} onclick="checkTareaTerminada(${tarea.id});"</td>
<td><button class="delbtn" onclick=removerTarea(${tarea.id})>X</button></td>
</tr>

        `;
  }
  document.querySelector("#lista").innerHTML = html;
  document.querySelector("#realizadas").innerHTML = totalRealizadas;
}

function checkTareaTerminada(id) {
  const posicionTarea = tareas.findIndex((tarea) => tarea.id == id);
  tareas[posicionTarea].terminada = !tareas[posicionTarea].terminada;
  console.log("Cambiado estado tarea a:" + tareas[posicionTarea].terminada);
  renderTareas();
}
renderTareas();
