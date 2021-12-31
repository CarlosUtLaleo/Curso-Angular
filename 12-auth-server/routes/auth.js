const { Router } = require('express');
const { crearUsuario, loginUsuario, token } = require('../controllers/auth');

const router = Router();
//Crear usuario
router.post('/new', crearUsuario);

// Login de usuario
router.post('/', loginUsuario);

// Validar y revalidar token
router.get('/renew', token);

module.exports = router;
