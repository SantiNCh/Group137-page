'use strict'

var Project = require('../models/project');
var fs = require('fs');

var controller = {
	home: function(req, res){
		return res.status(200).send({
			message: 'Soy la home'
		});
	},

	test: function(req, res){
		return res.status(200).send({
			message: "Soy el metodo o accion test del controlador de project"
		});
	},

	saveProject: function(req, res){
		var project = new Project();

		var params = req.body;
		project.name = params.name;
		project.description = params.description;
		project.year = params.year;
		project.image = null;

		project.save((err, projectStored) => {
			if(err) return res.status(500).send({message:"Error al guardar"});
		
			if (!projectStored) return res.status(404).send({message:"No se ha podido guardar el projecto"}); 
		
			return res.status(200).send({project: projectStored});
		});
	},

	getProject: function(req, res){
		var  projectId = req.params.id;

		if (projectId == null) return res.status(404).send({message:"El proyecto no existe"}); 

		Project.findById(projectId, (err, project) => {
			if(err) return res.status(500).send({message:"Error al devolver los datos"});
		
		
			return res.status(200).send({project});
		});
	},

	getProjects: function(req, res){
		Project.find({}).sort('-year').exec((err, projects) => {
			if(err) return res.status(500).send({message:"Error al devolver los datos"});

			if (!projects) return res.status(404).send({message:"No hay proyectos para mostrar"});

			return res.status(200).send({projects}); 

		});
	},

	updateProject: function(req, res){
		var projectId = req.params.id;
		var update = req.body;

		Project.findByIdAndUpdate(projectId, update, {new: true}, (err, projectUpdated) => {
			if(err) return res.status(500).send({message:"Error al actualizar los datos"});

			if (!projectUpdated) return res.status(404).send({message:"No hay proyectos para actualizar"});

			return res.status(200).send({project: projectUpdated}); 
		});
	},

	deleteProject: function(req, res){
		var projectId = req.params.id;

		Project.findByIdAndDelete(projectId, (err, projectDelete) => {
			if(err) return res.status(500).send({message:"Error al borrar los datos"});

			if (!projectDelete) return res.status(404).send({message:"No hay proyectos para borrar"});

			return res.status(200).send({project: projectDelete}); 
		});
	},

	uploadImage: function(req, res){
		var projectId = req.params.id;
		var fileName = 'Imagen no subida';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif' || fileExt == 'JPG'){
				Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true},(err, projectUpdated) => {
					if(err) return res.status(200).send({message:'La imagen no se ha subido'});

					if(!projectUpdated) return res.status(404).send({message:'El proyecto no existe y no se ha subido la imagen'});



					return res.status(200).send({
						project: projectUpdated
					});
				});
			}else{
				fs.unlin(filePath, (err) => {
					return res.status(200).send({message:"La extensión no es valida"});
				});
			}
			

			
		}else{
			return res.status(200).send({
				message: fileName
			});
		}
	}

};

module.exports = controller;