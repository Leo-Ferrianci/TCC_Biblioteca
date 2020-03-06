const User = require('../models/User');
const bcrypt = require('bcryptjs');

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
      user, 
      email, 
      password,
      controller,
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
      user,
      email,
      password,
      controller,
    });

    return res.json(register);
  },

  async update (req, res) {
    const { _id } = req.params;

    const {
      user,
      email,
      number,
    } = req.body;

    const data = await User.findByIdAndUpdate( _id, {
      user,
      email,
      number,
    });

    return res.json(data);
  },

  async delete (req, res) {
    const { _id } = req.params;

    await User.findByIdAndDelete( _id );

    return res.json({ success: 'Usuário deletado com sucesso!' });
  }
}