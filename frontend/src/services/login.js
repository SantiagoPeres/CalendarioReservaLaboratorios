import api from './api';

const LoginService = {
  login: (data) => api.post('login', data),
};

export default LoginService;
