const express = require('express');
const app = express();
const puerto = 3000;

// Una lista de ejemplo de estudiantes actualizada
const estudiantes = [
    { id: 1, nombre: "María", carrera: "Ingeniería de Sistemas" },
    { id: 2, nombre: "Jhonatan", carrera: "Ingeniería de Sistemas" },
    { id: 3, nombre: "Emilio", carrera: "Ingeniería de Software" }
];

// Ruta principal de bienvenida con un saludo más lindo
app.get('/', (req, res) => {
    res.send('<h1>¡Bienvenida a la API de Estudiantes! 🚀</h1><p>El servidor se encuentra funcionando correctamente.</p>');
});

// NUEVA RUTA: Para ver la lista de estudiantes
app.get('/estudiantes', (req, res) => {
    res.json(estudiantes);
});

app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);});