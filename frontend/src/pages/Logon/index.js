import React, { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { Snackbar } from '@material-ui/core';

import { ContainerPage, Container, Logo } from './styles';

import Input from '../../components/Inputs';
import Button from '../../components/Buttons';

import logo from '../../assets/icons/logo.png';

import LoginService from '../../services/login';

export default function Logon() {
  const formRef = useRef(null);
  const [message, setMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const history = useHistory();

  const user = localStorage.getItem('username');
  if (user) {
    history.push('/home');
  }

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});

      const { username, password } = data;

      if (!username || !password) {
        setMessage('Por favor, preencha os campos!');
        setSnackbarOpen(true);
        return;
      }

      const response = await LoginService.login(data);
      if (response.status === 200 && !response.data.error) {
        localStorage.setItem('username', response.data.resp.username);
        localStorage.setItem('teacher', response.data.resp.teacher_id);
        setMessage('Login efetuado com sucesso!');
        history.push('/home');
      } else {
        setMessage(response.data.message);
        setSnackbarOpen(true);
      }
    } catch (err) {
      setMessage('Ocorreu um erro ao tentar logar.');
    }
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <ContainerPage>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        message={message}
        color="#04C35C"
        onClose={handleClose}
      />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Logo>
            <img src={logo} alt="Logo" />
          </Logo>
          <div>
            <Input name="username" label="Login" />
            <Input name="password" type="password" label="Senha" />
          </div>
          <div>
            <Button type="submit" color="#04C35C" bold>
              Entrar
            </Button>
          </div>
        </Form>
      </Container>
    </ContainerPage>
  );
}
