import api from './api';

const ClassService = {
  getClass: (teacherId) => api.get(`getClass/${teacherId}`),
};

export default ClassService;
