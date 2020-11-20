import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100%;
  background-color: #50b1f6;
`;

export const Button = styled.button`
  height: 40px;

  padding: 0 10px 0 10px;
  border: none;
  border-radius: 5px;
  margin-right: 4.5%;
  font-weight: 600;
  background-color: #ffea00;

  &:hover {
    background-color: ${shade(0.2, '#ffea00')};
  }
`;

export const Img = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
