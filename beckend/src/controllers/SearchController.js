const Dev = require('../models/User');
const ParseStringAsArray = require("./utils/parseStringAsArray");
//importar o que for buscar
//Buscar todos os devs num raio 10km
//Filtrar por tecnolôgias

module.exports = {
    async index(request,response) {
        const { latitude, longitude, techs  } = request.query;

        const techsArray = ParseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({ devs })
    }
}