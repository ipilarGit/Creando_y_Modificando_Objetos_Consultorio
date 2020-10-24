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

Consultorio.prototype.setPaciente = function (
  nuevoNombre,
  nuevaEdad,
  nuevoDiagnostico
) {
  this.nombre = nuevoNombre;
  this.edad = nuevaEdad;
  this.diagnostico = nuevoDiagnostico;
};

function agregarPacientesConsultorio() {
  // Agregar paciente a la instancia centroSalud
  centroSalud.agregarPaciente(paciente1);
  centroSalud.agregarPaciente(paciente2);
  centroSalud.agregarPaciente(paciente3);
}

// Instanciar nuevo objeto Consultorio
let centroSalud = new Consultorio("Mas Salud");

// Instanciar pacientes
let paciente1 = new Paciente("21.140.148-6", "Diego", "18", "Gripe");

let paciente2 = new Paciente("11.111.111-1", "Jonathan", "35", "Lumbago");

let paciente3 = new Paciente("22.222.222-2", "Maria", "40", "Gripe");

agregarPacientesConsultorio();

console.log(`Consultorio ${centroSalud.getNombreConsultorio()} `);
console.log(`===============================`);
// Mostrar todos los Pacientes
console.log("Listado Total de Pacientes");
console.log(`===============================`);
centroSalud.getPacientes().forEach((paciente, i) => {
  console.log(`Paciente N°: ${i + 1}`);
  console.log(`Rut        : ${paciente.rut}`);
  console.log(`Nombre     : ${paciente.nombre}`);
  console.log(`Edad       : ${paciente.edad}`);
  console.log(`Diagnostico: ${paciente.diagnostico}`);
  console.log(`===============================`);
});

// Buscar paciente por nombre

let pacienteBuscado = "Jonathan";
Consultorio.prototype.getPaciente = function (pacienteBuscado) {
  return this.pacientes.find((paciente) => paciente.nombre === pacienteBuscado);
};

if (centroSalud.getPaciente(pacienteBuscado) != undefined) {
  console.log(`Paciente Encontrado`);
  console.log(`===============================`);
  console.log(`Rut        : ${centroSalud.getPaciente(pacienteBuscado).rut}`);
  console.log(
    `Nombre     : ${centroSalud.getPaciente(pacienteBuscado).nombre}`
  );
  console.log(`Edad       : ${centroSalud.getPaciente(pacienteBuscado).edad}`);
  console.log(
    `Diagnostico: ${centroSalud.getPaciente(pacienteBuscado).diagnostico}`
  );
} else {
  console.log(`Paciente ${pacienteBuscado} No Encontrado`);
}
