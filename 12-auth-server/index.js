const express = require('express');

//Crear servidor de expres

const app = express();

//Get
app.get('/', (req, res) => {
	res.json({ ok: true, msg: 'Todo salio bien', uid: 1234 });
});

app.listen(4000, () => {
	console.log(`Servidor corriendo en el puerto ${4000}`);
});
