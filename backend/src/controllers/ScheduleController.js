const { format } = require('date-fns');
const connection = require('../database/connection');

module.exports = {
  async getSchedule(req, res) {
    const schedules = await connection('schedule').where(
      'laboratory_id',
      req.params.laboratory_id
    );
    const obj = [];
    schedules.forEach((item) => {
      obj.push({
        schedule_id: item.schedule_id,
        school_class: item.school_class,
        subject: item.subject,
        date: format(new Date(item.date), 'dd/MM/yyyy'),
        start_time: item.start_time,
        teacher_id: item.teacher_id,
        laboratory_id: item.laboratory_id,
      });
    });

    // if (!schedules.length) {
    //   return res.status(400).json({
    //     error: true,
    //     message: 'Nenhum agendamento encontrado!',
    //   });
    // }

    return res.status(200).json({
      error: false,
      resp: obj,
    });
  },

  async getScheduleByTeacher(req, res) {
    const { laboratory_id, teacher_id } = req.params;

    const schedules = await connection('schedule')
      .where('laboratory_id', laboratory_id)
      .andWhere('teacher_id', teacher_id);

    const obj = [];
    schedules.forEach((item) => {
      obj.push({
        schedule_id: item.schedule_id,
        school_class: item.school_class,
        subject: item.subject,
        date: format(new Date(item.date), 'dd/MM/yyyy'),
        start_time: item.start_time,
        teacher_id: item.teacher_id,
        laboratory_id: item.laboratory_id,
      });
    });

    if (!schedules.length) {
      return res.status(400).json({
        error: true,
        message: 'Nenhum agendamento encontrado!',
      });
    }

    return res.status(200).json({ error: false, resp: obj });
  },

  async createSchedule(req, res) {
    const dateSplited = req.body.date.split('/');
    const formattedDate = `${dateSplited[2]}-${dateSplited[1]}-${dateSplited[0]}`;

    const schedule = await connection('schedule').insert({
      school_class: req.body.school_class,
      subject: req.body.subject,
      start_time: req.body.start_time,
      date: formattedDate,
      teacher_id: req.body.teacher_id,
      laboratory_id: req.body.laboratory_id,
    });

    return res.status(200).json({ error: false, resp: schedule });
  },
};
