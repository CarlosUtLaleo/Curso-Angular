const express = require('express');

//Crear servidor de expres

const app = express();

//Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(4000, () => {
	console.log(`Servidor corriendo en el puerto ${4000}`);
});
