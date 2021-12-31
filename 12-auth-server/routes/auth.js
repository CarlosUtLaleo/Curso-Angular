const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, token } = require('../controllers/auth');

const router = Router();
//Crear usuario
router.post('/new', crearUsuario);

// Login de usuario
router.post(
	'/',
	[check('email', 'El email es obligatorio').isEmail(), check('password', 'La contraseña es obligatoria')],
	loginUsuario
);

// Validar y revalidar token
router.get('/renew', token);

module.exports = router;
