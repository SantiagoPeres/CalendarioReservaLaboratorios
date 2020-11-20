import api from './api';

const BlocksService = {
  list: () => api.get('listBlocks'),
  listScheduled: (teacherId) => api.get(`listScheduled/${teacherId}`),
};

export default BlocksService;
