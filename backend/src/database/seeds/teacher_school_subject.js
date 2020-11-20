exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('teacher_school_subject')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('teacher_school_subject').insert([
        { teacher_school_subjects_id: 1, teacher_id: 1, subject_id: 1 },
        { teacher_school_subjects_id: 2, teacher_id: 1, subject_id: 6 },
        { teacher_school_subjects_id: 3, teacher_id: 2, subject_id: 2 },
        { teacher_school_subjects_id: 4, teacher_id: 3, subject_id: 3 },
        { teacher_school_subjects_id: 5, teacher_id: 4, subject_id: 4 },
        { teacher_school_subjects_id: 6, teacher_id: 5, subject_id: 7 },
        { teacher_school_subjects_id: 7, teacher_id: 6, subject_id: 5 },
      ]);
    });
};
