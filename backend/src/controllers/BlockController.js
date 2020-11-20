const connection = require('../database/connection');

module.exports = {
  async list(req, res) {
    const blocks = await connection('blocks').distinct('*');

    if (!blocks.length) {
      return res.status(400).json({
        error: true,
        message: 'Nenhum bloco cadastrado!',
      });
    }

    return res.status(200).json({ error: false, resp: blocks });
  },

  async listScheduled(req, res) {
    const blocks = await connection('blocks as b')
      .join('laboratory as l', 'l.block_id', 'b.block_id')
      .join('schedule as s', 's.laboratory_id', 'l.laboratory_id')
      .distinct('b.*')
      .where('s.teacher_id', req.params.teacher_id);

    if (!blocks.length) {
      return res.status(400).json({
        error: true,
        message: 'Nenhum bloco cadastrado!',
      });
    }

    return res.status(200).json({ error: false, resp: blocks });
  },
};
