const Project = require('../models/Project');[]
//importar o que for buscar
//Buscar todos os devs num raio 10km
//Filtrar por tecnolôgias

module.exports = {
    async listProject(req, res) {
      const { course } = req.query;
  
      const data = await Project.find({ 
          course
        });

      return res.json(data);
    },
  }