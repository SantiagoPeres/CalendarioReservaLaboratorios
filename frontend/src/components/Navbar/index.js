import React from 'react';
import { useHistory } from 'react-router-dom';

import logout from '../../assets/icons/logout.png';

import { Container, Button, Img } from './styles';

export default function Navbar() {
  const history = useHistory();
  return (
    <Container>
      <div
        style={{
          width: '47.5%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <button
          type="button"
          style={{
            paddingLeft: '4.5%',
            fontSize: 16,
            backgroundColor: 'transparent',
            border: 'none',
            height: '100%',
            fontWeight: '600',
          }}
          onClick={() => {
            history.push('/home');
          }}
        >
          Olá, {localStorage.getItem('username')}
        </button>
      </div>
      <div
        style={{
          width: '47.5%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Button
          onClick={() => {
            history.push('/profile');
          }}
        >
          Minhas Reservas
        </Button>
      </div>
      <div
        style={{
          width: '5%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button
          type="button"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            width: '100%',
            height: '100%',
          }}
          onClick={() => {
            localStorage.clear();
            history.push('/');
          }}
        >
          {' '}
          <Img src={logout} />
        </button>
      </div>
    </Container>
  );
}
