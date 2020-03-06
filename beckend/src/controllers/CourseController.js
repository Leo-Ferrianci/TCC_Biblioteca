const Course = require('../models/Course');

module.exports = {
    async index(req, res){
        const data = await Course.find();

        return res.json(data);
    },

    async show(req, res) {
        const { _id } = req.params;

        const data = await Course.findById(_id);

        return res.json(data);
    },

    async store(req,res) {
        const {
            name,
            image
        } = req.body;

        const data = await Course.create({
            name,
            image
        });

        return res.json(data);
    },

    async update(req, res) {
        const { _id } = req.params; 
    
        const {
            name,
            image
        } = req.body;
    
        const data = await Course.findByIdAndUpdate(_id, {
            name,
            image
        });
    
        return res.json(data);
      },
    
      async delete(req, res) {
        const { _id } = req.params;
    
        await Course.findByIdAndDelete(_id);
    
        return res.json({message: 'Dados deletados com sucesso'});
      },
}