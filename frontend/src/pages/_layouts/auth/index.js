import React from 'react';

import { Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Content>
      {children}
    </Content>
  );
}
