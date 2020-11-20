import React from 'react';

import { Container } from './styles';

export default function Button({
  bold = false,
  disabled = false,
  color,
  children,
}) {
  return (
    <Container
      color={color}
      disabled={disabled}
      bold={bold}
    >
      {children}
    </Container>
  );
}
