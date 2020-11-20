import api from './api';

const LabsService = {
  list: (blockId) => api.get(`listLabs/${blockId}`),
  listScheduled: (blockId, teacherId) => api.get(`listLabsScheduled/${blockId}/${teacherId}`),
};

export default LabsService;
