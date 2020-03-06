const Course = require('../models/Course');[]
//importar o que for buscar
//Buscar todos os devs num raio 10km
//Filtrar por tecnolôgias

module.exports = {
    async listCourse(req, res) {
      const { name } = req.query;
  
      const data = await Course.find({ 
          name 
        });
  
      return res.json(data);
    },
  }