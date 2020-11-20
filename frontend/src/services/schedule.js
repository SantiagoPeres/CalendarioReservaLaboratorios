import api from './api';

const ScheduleService = {
  getSchedule: (laboratoryId) => api.get(`getSchedule/${laboratoryId}`),
  getScheduleByTeacher: (laboratoryId, teacherId) => api.get(`getScheduleByTeacher/${laboratoryId}/${teacherId}`),
  createSchedule: (data) => api.post('/createSchedule', data),
};

export default ScheduleService;
