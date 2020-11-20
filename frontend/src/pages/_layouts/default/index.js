import React from 'react';

import Navbar from '../../../components/Navbar';

import {
  Wrapper, Content, Body, Header,
} from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header>
        <Navbar />
      </Header>
      <Content>
        <Body>{children}</Body>
      </Content>
    </Wrapper>
  );
}
