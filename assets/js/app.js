function Consultorio(nombre) {
  this.nombre = nombre;
  this.pacientes = [];
}

function Paciente(rut, nombre, edad, diagnostico) {
  this.rut = rut;
  this.nombre = nombre;
  this.edad = edad;
  this.diagnostico = diagnostico;
}

Consultorio.prototype.getNombreConsultorio = function () {
  return this.nombre;
};

Consultorio.prototype.getPacientes = function () {
  return this.pacientes;
};

Consultorio.prototype.agregarPaciente = function (nuevo_paciente) {
  this.pacientes.push(nuevo_paciente);
};

Consultorio.prototype.eliminarPaciente = function (paciente_eliminado) {
  this.pacientes.splice(paciente_eliminado, 1);
};

Paciente.prototype.setPaciente = function (
  nuevoNombre,
  nuevaEdad,
  nuevoDiagnostico
) {
  this.nombre = nuevoNombre;
  this.edad = nuevaEdad;
  this.diagnostico = nuevoDiagnostico;
};

function limpiarFormulario() {
  let rut = document.getElementById("rut");
  rut.value = "";
  let nombre = document.getElementById("nombre");
  nombre.value = "";
  let edad = document.getElementById("edad");
  edad.value = "";
  let diagnostico = document.getElementById("diagnostico");
  diagnostico.value = "";
}

function capturarDatosPaciente() {
  let rut = document.getElementById("rut").value;
  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  let diagnostico = document.getElementById("diagnostico").value;

  let paciente = new Paciente(rut, nombre, edad, diagnostico);
  console.log(paciente);
  centroSalud.agregarPaciente(paciente);
  limpiarFormulario();
}

function listarDatosHtml() {
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  centroSalud.getPacientes().forEach((paciente, i) => {
    tbody.innerHTML += `
                    <tr>                    
                         <td>${paciente.rut}</td>
                         <td>${paciente.nombre}</td>
                         <td>${paciente.edad}</td>
                         <td>${paciente.diagnostico}</td>
                         <td><button class="btn btn-danger" onclick="eliminarPacienteConsultorio(${i})">Eliminar</button></td>
                    </tr>`;
  });
  console.log(centroSalud.getPacientes());
}

function eliminarPacienteConsultorio(paciente_eliminado) {
  centroSalud.eliminarPaciente(paciente_eliminado);
  listarDatosHtml();
}

function buscarDatosPaciente(e) {
  let pacienteBuscado = e.target.value;

  // Buscar paciente por nombre
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  console.log(pacienteBuscado);

  Consultorio.prototype.getPaciente = function (pacienteBuscado) {
    return this.pacientes.find(
      (paciente) => paciente.nombre === pacienteBuscado
    );
  };

  if (centroSalud.getPaciente(pacienteBuscado) != undefined) {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    tbody.innerHTML += `
                    <tr>                    
                         <td>${
                           centroSalud.getPaciente(pacienteBuscado).rut
                         }</td>
                         <td>${
                           centroSalud.getPaciente(pacienteBuscado).nombre
                         }</td>
                         <td>${
                           centroSalud.getPaciente(pacienteBuscado).edad
                         }</td>
                         <td>${
                           centroSalud.getPaciente(pacienteBuscado).diagnostico
                         }</td>
                      </tr>`;
  } else {
    tbody.innerHTML = `Paciente ${pacienteBuscado} No Encontrado`;
  }
  input = document.getElementById("input");
  input.value = "";
}

// Instanciar objeto Consultorio
let centroSalud = new Consultorio("M&S Salud");
let centro = document.getElementById("centro");
centro.innerHTML = `Consultorio ${centroSalud.getNombreConsultorio()} `;

let btnagregar = document.getElementById("btnagregar");
btnagregar.addEventListener("click", function (e) {
  e.preventDefault();
  capturarDatosPaciente();
  listarDatosHtml();
});

let input = document.getElementById("input");
input.addEventListener("change", function (e) {
  e.preventDefault();
  buscarDatosPaciente(e);
});
