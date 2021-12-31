const express = require('express');
const cors = require('cors');

require('dotenv').config();

console.log(process.env);

//Crear servidor de expres

const app = express();

//CORS
app.use(cors());

//Lectura y parseo de body

app.use(express.json());
//Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
	console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
