const connection = require('../database/connection');

module.exports = {
  async login(req, res) {
    const user = await connection('users')
      .where({ username: req.body.username, password: req.body.password })
      .select('*');

    if (!user.length) {
      return res.json({
        error: true,
        message: 'Usuário ou senha incorretos!',
      });
    }

    return res.status(200).json({ error: false, resp: user[0] });
  },
};
