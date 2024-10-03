import  mostrarEstudiante  from "./mostrarEstudiante";
import { Estudiante } from "./tipos";

// Definir variable del tipo dado
const e1: Estudiante = {
  nombre: "Catalina",
  apellido: "Cardenas",
  edad: 19, // Añadir edad
  addresses: [
    {
      street: "Calle 7",
      numero: 34,
      city: "Bogota",
    },
    {
      street: "Cr 10",
      numero: 104,
      city: "Ibague",
    },
    {
      street: "Av 34",
      numero: 34,
      city: "Cucuta",
    },
  ],
};

const e2: Estudiante = {
  nombre: "Dooshi",
  apellido: "Park",
  edad: 23,
  addresses: [
    {
      street: "Calle 5",
      numero: 34,
      city: "Bogota",
    },
    {
      street: "Cr 45",
      numero: 89,
      city: "Manizales",
    },
    {
      street: "Av 64",
      numero: 23,
      city: "Popayan",
    },
  ],
};

const e3: Estudiante = {
  nombre: "Samantha",
  apellido: "Park",
  edad: 15,
  addresses: [
    {
      street: "Calle 5",
      numero: 34,
      city: "Bogota",
    },
    {
      street: "Cr 25",
      numero: 89,
      city: "Cucuta",
    },
    {
      street: "Av 65",
      numero: 13,
      city: "Casanare",
    },
  ],
};



// Arreglo para definir estudiantes
let arregloEstudiantes: (number | string | Estudiante )[] = [];

// Metodo para agregar un estudiante al final
arregloEstudiantes.push(2);
    arregloEstudiantes.push("Vvian");
    arregloEstudiantes.push("Carlos");
    arregloEstudiantes.push(3);
    
// Método para agregar un estudiante ya definido
const addEstudiante = (e: Estudiante) => {
    arregloEstudiantes.push(e);
}

// Método para agregar al inicio del arreglo
const agregarEstudianteInicio = (e: Estudiante) => {
  arregloEstudiantes.unshift(e);
}



// // Método para encontrar un estudiante por nombre y actualizar su apellido
// function actualizarApellido(nombre: string, apellido: string) {
//   let estudiante = arregloEstudiantes.find((est) => est.nombre === nombre);

//   if (estudiante) {
//     estudiante.apellido = apellido;
//     console.log(`El apellido de ${nombre} ha sido actualizado a ${apellido}.`);
//   } else {
//     console.log(`Estudiante con nombre ${nombre} no encontrado.`);
//   }
// }

// // Método para actualizar edad
// function actualizarEdadBogota(nuevaEdad: number) {
//   arregloEstudiantes.forEach((estudiante) => {
//     // Verificar
//     if (
//       estudiante.addresses &&
//       estudiante.addresses.some((address) => address.city.trim() === "Bogota")
//     ) {
//       estudiante.edad = nuevaEdad;
//     }
//   });
// }

// // Método para eliminar el estudiante
// function eliminarEstudiante(nombre: string, apellido: string) {
//   // Usar trim() para asegurarse de que no haya espacios en blanco
//   const index = arregloEstudiantes.findIndex(
//     (est) =>
//       est.nombre.trim() === nombre.trim() &&
//       est.apellido.trim() === apellido.trim()
//   );

//   if (index !== -1) {
//     // Eliminar el estudiante del arreglo
//     arregloEstudiantes.splice(index, 1);
//     console.log(
//       `El estudiante ${nombre.trim()} ${apellido.trim()} ha sido eliminado.`
//     );
//   } else {
//     console.log(
//       `Estudiante con nombre ${nombre.trim()} y apellido ${apellido.trim()} no encontrado.`
//     );
//   }
// }

// // Método para eliminar estudiantes menores de 18 años que viven en Bogotá
// function eliminarEstudianteMenorDeEdadEnBogota() {
//     const estudiantesEliminados: Estudiante[] = [];
    
//     arregloEstudiantes = arregloEstudiantes.filter((estudiante) => {
//       if (estudiante.edad && estudiante.edad < 18 && estudiante.addresses && estudiante.addresses.some(address => address.city.trim() === "Bogota")) {
//         estudiantesEliminados.push(estudiante);
//         return false; // Eliminar este estudiante
//       }
//       return true; // Mantener este estudiante
//     });
  
//     // Informar sobre los estudiantes eliminados
//     if (estudiantesEliminados.length > 0) {
//       estudiantesEliminados.forEach(estudiante => {
//         console.log(`El estudiante ${estudiante.nombre.trim()} ${estudiante.apellido.trim()} ha sido eliminado.`);
//       });
//     } else {
//       console.log("No hay estudiantes menores de 18 años que vivan en Bogotá.");
//     }
//   }

// Agregar estudiante al arreglo
addEstudiante(e1);
// console.log(arregloEstudiantes);

// Agregar estudiante al inicio
agregarEstudianteInicio(e2);
// console.log(arregloEstudiantes);

agregarEstudianteInicio(e3);
// console.log(arregloEstudiantes);

// // Actualizar el apellido
// actualizarApellido("Dooshi", "Garcia");
// console.log(arregloEstudiantes);

// // Actualizar edad de estudiantes en Bogotá
// actualizarEdadBogota(10);
// console.log(arregloEstudiantes);

// eliminarEstudianteMenorDeEdadEnBogota();
// console.log("Estudiantes después de eliminar menores de edad en Bogotá:")

// Recorrer el arreglo y mostar solo estudiante 
arregloEstudiantes.forEach((elemento) => {
    // verificar si el sistema es un objeto y tiene las propiedades necesarias
    if(typeof elemento === 'object' && elemento !==null){
        if('nombre' in elemento && 'apellido' in elemento) {
            mostrarEstudiante(elemento);
        }
    }
});




