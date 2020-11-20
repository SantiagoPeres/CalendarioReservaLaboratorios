const connection = require('../database/connection');

module.exports = {
  async getSchoolSubjectsByTeacher(req, res) {
    const schoolSubjects = await connection('school_subjects').whereIn(
      'school_subject_id',
      connection('teacher_school_subject')
        .select('teacher_school_subjects_id')
        .where('teacher_id', req.params.teacher_id)
    );

    if (!schoolSubjects.length) {
      return res.status(400).json({
        error: true,
        message: 'Nenhuma disciplina encontrado!',
      });
    }

    return res.status(200).json({ error: false, resp: schoolSubjects });
  },
};
