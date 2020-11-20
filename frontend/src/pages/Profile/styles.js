import styled, { css } from 'styled-components';

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100%;
  background-color: transparent;

  form {
    width: 30%;
  }
`;

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const ContainerCalendar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
`;

export const RowGrid = styled.div`
  padding: 10px 10px 10px 10px;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &:nth-child(odd) {
    background-color: #ccc;
  }

  ${(props) =>
    props.active &&
    css`
      box-shadow: inset 0 0 5px 0 #444444;
    `}
`;

export const Calendar = styled.div`
  width: 85%;
  height: 85%;

  border-radius: 5px;
  background-color: #fafafa;
`;
