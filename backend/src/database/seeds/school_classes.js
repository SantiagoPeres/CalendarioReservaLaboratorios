exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('school_classes')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('school_classes').insert([
        { school_class_id: 1, name: 'ESOFT6S', teacher_id: 1 },
        { school_class_id: 2, name: 'ESOFT2S', teacher_id: 2 },
        { school_class_id: 3, name: 'ESOFT4S', teacher_id: 1 },
        { school_class_id: 4, name: 'ESOFT4A', teacher_id: 3 },
        { school_class_id: 5, name: 'ADS2S', teacher_id: 4 },
        { school_class_id: 6, name: 'ADS4S', teacher_id: 5 },
        { school_class_id: 7, name: 'ADS6S', teacher_id: 6 },
      ])
    );
};
