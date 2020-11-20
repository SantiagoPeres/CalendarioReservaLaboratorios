import React from 'react';

import { Container } from './styles';

export default function Message({ content }) {
  return (
    <Container
      success={content.type === 'success'}
      warning={content.type === 'warning'}
      error={content.type === 'error'}
    >
      <b>{content.message}</b>
    </Container>
  );
}
