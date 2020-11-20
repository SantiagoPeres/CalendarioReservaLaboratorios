const connection = require('../database/connection');

module.exports = {
  async getClass(req, res) {
    const schoolClass = await connection('school_classes').where(
      'teacher_id',
      req.params.teacher_id
    );

    if (!schoolClass.length) {
      return res.status(400).json({
        error: true,
        message: 'Nenhuma turma encontrado!',
      });
    }

    return res.status(200).json({ error: false, resp: schoolClass });
  },
};
