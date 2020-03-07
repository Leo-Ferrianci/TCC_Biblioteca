const Project = require('../models/Project');[]
//importar o que for buscar
//Buscar todos os devs num raio 10km
//Filtrar por tecnolôgias

module.exports = {
    async listProject(req, res) {
      const { name, student, pdf } = req.query;
  
      const data = await Project.find({ 
          student,
        });

        
  
      return res.json(data);
    },
  }