<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
  </head>
  <body>
    <script>
      //  Primeramente se deben mostrar todos los pacientes con sus datos personales, luego
      // mediante un método de búsqueda, mostrar los datos del paciente que concuerden con el
      // nombre que se envíe al método como argumento. Igualmente se deben proteger los datos y
      // _ 1

      //  Consultorio
      function Consultorio(nombre) {
        this.nombre = nombre;
        this.pacientes = [];
      }

      //  Pacientes
      function Paciente(nombre, edad, rut, diagnostico) {
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
      }

      Consultorio.prototype.getPacientes = function () {
        return this.pacientes;
      };

      Consultorio.prototype.agregarPaciente = function (pacientenuevo) {
        this.pacientes.push(pacientenuevo);
      };

      let consultorio = new Consultorio("Esferas del dragon");

      
      let paciente1 = new Paciente("Pedro", "33", "2545", "hambre");
      let paciente2 = new Paciente("Pablo", "29", "123456", "Daltonico");

      consultorio.agregarPaciente(paciente1);
      consultorio.agregarPaciente(paciente2);

      console.log("Todos los pacientes son: ");
      consultorio.getPacientes().forEach((p) => {
        console.log(Object.values(p).join(" - "));
      });

      Consultorio.prototype.getPaciente = function (nombreBuscado) {
        return this.pacientes.find((p) => p.nombre == nombreBuscado);
      };

      console.log("Busqueda de paciente por el nombre Pedro");
      console.log(Object.values(consultorio.getPaciente("Pedro")).join(" - "));
    </script>
  </body>
</html>
