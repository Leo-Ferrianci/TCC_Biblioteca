const Project = require('../models/Project');

module.exports = {
    async index(req, res){
        const data = await Project.find();

        return res.json(data);
    },

    async show(req, res) {
        const { _id } = req.params;

        const data = await Project.findById(_id);

        return res.json(data);
    },

    async store(req,res) {
        const {
            name,
            student,
            pdf
        } = req.body;

        const studentArray = student.split(',').map(student => student.trim())

        const data = await Project.create({
            name,
            student: studentArray,
            pdf
        });

        return res.json(data);
    },

    async update(req, res) {
        const { _id } = req.params; 
    
        const {
            name,
            student,
            pdf
        } = req.body;
    
        const data = await Project.findByIdAndUpdate(_id, {
            name,
            student: studentArray,
            pdf
        });
    
        return res.json(data);
      },
    
      async delete(req, res) {
        const { _id } = req.params;
    
        await Project.findByIdAndDelete(_id);
    
        return res.json({message: 'Dados deletados com sucesso'});
      },
}