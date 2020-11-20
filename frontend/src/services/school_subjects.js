import api from './api';

const SchoolSubjectsService = {
  getSchoolSubjectsByTeacher: (teacherId) => api.get(`getSchoolSubjectsByTeacher/${teacherId}`),
};

export default SchoolSubjectsService;
