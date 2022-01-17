const { response } = require('express');
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs")
const {generateJWT} = require("../helpers/jwt")

const crearUsuario = async (req, res = response) => {
	const { email, name, password } = req.body;

	try {
		// Verificar el email
		const usuario = await Usuario.findOne({ email });

		if (usuario) {
			return res.status(400).json({
				ok: false,
				msg:"Usuario ya existe con ese email"
			})
		}
		// crear usuario con el modelo
		const dbUser = new Usuario(req.body);

		// Hashear la contraseña
		const salt = bcrypt.genSaltSync();
		dbUser.password = bcrypt.hashSync(password, salt)
		// Generar el JWT
		const token = await generateJWT(dbUser.id, name)

		// Crear usario de BD
		await dbUser.save();
		
		// Generar respuesta exitosa
		return res.status(201).json({
				ok: true,
				uid: dbUser.id,
				name,
				token
			})
	} catch (error) {
		console.log(error)
		return res.status(500).json({
			ok: false,
			msg: 'Por favor hable con el administrador',
		});
	}
};

const  loginUsuario = async (req, res = response) => {
	const { email, password } = req.body;

	try {
		const dbUser = await Usuario.findOne({ email })
		
		if (!dbUser) {
			return res.status(400).json({
				ok: false,
				msg: "El correo no existe"
			})
		}

		///Confirmar si password hace match
		const validPassword = bcrypt.compareSync(password, dbUser.password)

		if (!validPassword) {
			return res.status(400).json({
				ok: false,
				msg: "Password no valido"
			})
		}

		// Generar JWT
		const token = await generateJWT(dbUser.id, dbUser.name);

		//Respuesta
		return res.json({
			ok: true,
			uid: dbUser.id,
			name: dbUser.name,
			token
		})

	} catch (error) {
		console.log(error)
		return res.status(500).json({
			ok: false,
			msg: 'Por favor hable con el administrador',
		});
	}

	console.log(email, password);
	return res.json({
		ok: true,
		msg: 'Login de usuario /',
	});
};

const revalidarToken = async (req, res) => {

	const { uid, name } = req;

	const token = await generateJWT(uid, name);
	return res.json({
		ok: true,
		uid, name,
		token
	});
};

module.exports = {
	crearUsuario,
	loginUsuario,
	revalidarToken,
};
