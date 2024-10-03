"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mostrarEstudiante = (estudiante) => {
    var _a, _b;
    // Informacion del estudiante
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Apellido: ${estudiante.apellido}`);
    console.log(`Edad: ${(_a = estudiante.edad) !== null && _a !== void 0 ? _a : 'edad no definida'} `);
    console.log("Direcciones\n");
    (_b = estudiante.addresses) === null || _b === void 0 ? void 0 : _b.forEach((direccion) => {
        console.log(`Calle: ${direccion.street}`);
        console.log(`Numero: ${direccion.numero}`);
        console.log(`Ciudad: ${direccion.city}`);
        console.log("------------------------");
    });
};
exports.default = mostrarEstudiante;
