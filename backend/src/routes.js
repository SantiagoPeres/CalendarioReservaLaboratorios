const express = require('express');

const LoginController = require('./controllers/LoginController');
const BlocksController = require('./controllers/BlockController');
const LabsController = require('./controllers/LabsContoller');
const ScheduleController = require('./controllers/ScheduleController');
const ClassController = require('./controllers/ClassController');
const SchoolSubjectController = require('./controllers/SchoolSubjectController');

const routes = express.Router();

routes.post('/login', LoginController.login);
routes.get('/listBlocks', BlocksController.list);
routes.get('/listScheduled/:teacher_id', BlocksController.listScheduled);
routes.get('/listLabs/:block_id', LabsController.list);
routes.get(
  '/listLabsScheduled/:block_id/:teacher_id',
  LabsController.listScheduled
);
routes.get('/getSchedule/:laboratory_id', ScheduleController.getSchedule);
routes.get(
  '/getScheduleByTeacher/:laboratory_id/:teacher_id',
  ScheduleController.getScheduleByTeacher
);
routes.post('/createSchedule', ScheduleController.createSchedule);
routes.get('/getClass/:teacher_id', ClassController.getClass);
routes.get(
  '/getSchoolSubjectsByTeacher/:teacher_id',
  SchoolSubjectController.getSchoolSubjectsByTeacher
);

module.exports = routes;
