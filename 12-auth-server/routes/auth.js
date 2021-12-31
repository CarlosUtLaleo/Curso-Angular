const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, token } = require('../controllers/auth');

const router = Router();
//Crear usuario
router.post(
	'/new',
	[
		check('email', 'El email es obligatorio').isEmail(),
		check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
		check('name', 'El nombre es obligatorio').not().isEmpty(),
	],
	crearUsuario
);

// Login de usuario
router.post(
	'/',
	[
		check('email', 'El email es obligatorio').isEmail(),
		check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
	],
	loginUsuario
);

// Validar y revalidar token
router.get('/renew', token);

module.exports = router;
