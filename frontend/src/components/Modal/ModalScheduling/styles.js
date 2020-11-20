import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const ContainerModal = styled.div`
  position: fixed;
  display: none;
  width: 50%;
  height: 60%;
  max-width: 50%;
  max-height: 60%;
  top: 28%;
  left: 40%;

  border-radius: 5px;
  background-color: #fafafa;
  box-shadow: 0px 0px 5px 1px #44444433;

  ${(props) =>
    props.open &&
    css`
      display: block;
    `}
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;

  font-weight: 600;
  text-transform: uppercase;
`;

export const Content = styled.div`
  height: 90%;
`;

export const ContentSchedule = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f4433655;

  height: 50%;
  width: 100%;
`;

export const ContentScheduling = styled.div`
  height: 50%;
  width: 100%;

  form {
    width: 100%;
    height: 90%;
  }
`;

export const GroupSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  height: 70%;
`;

export const GroupButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20%;
`;

export const Img = styled.img`
  position: absolute;
  width: 15px;
  height: 15px;
  cursor: pointer;

  right: 10px;
`;
