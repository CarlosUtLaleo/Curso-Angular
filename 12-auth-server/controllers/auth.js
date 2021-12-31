const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = response) => {
	const { email, name, password } = req.body;
	console.log(name, email, password);
	return res.json({
		ok: true,
		msg: 'Crear usuario /new',
	});
};

const loginUsuario = (req, res = response) => {
	const error = validationResult(req);

	if (!error.isEmpty()) {
		return res.status(400).json({
			ok: false,
			errors: error.mapped(),
		});
	}

	const { email, password } = req.body;
	console.log(email, password);
	return res.json({
		ok: true,
		msg: 'Login de usuario /',
	});
};

const token = (req, res) => {
	return res.json({
		ok: true,
		msg: 'Renew',
	});
};

module.exports = {
	crearUsuario,
	loginUsuario,
	token,
};
