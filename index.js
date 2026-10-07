const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>¡Hola Mundo desde mi Contenedor Docker!</h1>');
});

app.listen(PORT, () => {
  console.log(`Aplicación corriendo en el puerto ${PORT}`);
});
