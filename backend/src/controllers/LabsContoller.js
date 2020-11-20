const connection = require('../database/connection');

module.exports = {
  async list(req, res) {
    const labs = await connection('laboratory').where(
      'block_id',
      req.params.block_id
    );

    if (!labs.length) {
      return res.status(400).json({
        error: true,
        message: 'Nenhum bloco cadastrado!',
      });
    }

    return res.status(200).json({ error: false, resp: labs });
  },

  async listScheduled(req, res) {
    const { block_id, teacher_id } = req.params;

    const labs = await connection('laboratory as l')
      .join('schedule as s', 's.laboratory_id', 'l.laboratory_id')
      .distinct('l.*')
      .where('s.teacher_id', teacher_id)
      .andWhere('l.block_id', block_id);

    if (!labs.length) {
      return res.status(400).json({
        error: true,
        message: 'Nenhum bloco cadastrado!',
      });
    }

    return res.status(200).json({ error: false, resp: labs });
  },
};
