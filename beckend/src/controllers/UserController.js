const User = require('../models/User');
const bcrypt = require('bcryptjs');

//index: quando quero mostrar uma lista
//show: Mostrar um único
//store: criar
//update: alterar
//destroy: deletar

module.exports = {

    async index (req, res) {
      const data = await User.find();
  
      return res.json(data);
    },
  
    async show(req, res) {
      const { _id } = req.params;
  
      const data = await User.findById( _id );
  
      return res.json(data);
    },
    
    async store (req, res) {
      let { 
        name,  
        user, 
        email, 
        password,
      } = req.body;
  
      const verifyUser = await User.findOne({ user });
      const verifyEmail = await User.findOne({ email });
  
      if (verifyUser || verifyEmail) {
        return res.status(400).json({ error: "Usuário já cadastrado" });
      }
  
      bcrypt.hash(password, 5, (err, hash) => {
        password = hash;
      });
  
      const register = await User.create({
        name,
        user,
        email,
        password,
      });
  
      return res.json(register);
    },

    async update() {

    },

    async destroy() {

    },
};