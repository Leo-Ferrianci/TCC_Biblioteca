const bcrypt = require('bcryptjs');

const User = require('../models/User');

module.exports = {
  async create(req, res) {
   try {
    const { email, password } = req.body;

    const user = await User.findOne({$or: [
      { email },
      { user: email }
    ]});

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }
    

    if (bcrypt.compareSync(password, user.password)) {
      res.json({
        user,
        token: user.generateToken()
      });
    } else {
      res.status(400).json({ error: "Credenciais incorretas!"});
    }

   } catch (err) {
    console.log(err)
    return res.json(400).json({ error: "Falha na autenticação" });
   }

  }
}

