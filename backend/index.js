'use strict'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/web')
		.then(() => {
			console.log("Conexión a la base de datos establecida con exito");
		})
		.catch(err => console.log(err));