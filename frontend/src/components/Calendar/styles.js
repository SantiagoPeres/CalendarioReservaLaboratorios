import styled, { css } from 'styled-components';

export const Frame = styled.div`
  min-width: 85%;
  min-height: 85%;
  height: 85%;

  border-radius: 5px;
  background-color: #fafafa;
  box-shadow: 0px 5px 5px -3px #44444433;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  height: 10%;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #fafafa;
`;

export const Button = styled.div`
  cursor: pointer;
`;

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  height: 90%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 14.2%;
  height: 14.2%;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }

  ${(props) =>
    props.isToday &&
    css`
      border: 1px solid #ccc;
    `}

  ${(props) =>
    props.scheduledPartial &&
    css`
      background-color: #ffeb3b77;
    `}

    ${(props) =>
    props.scheduledFull &&
    !props.profile &&
    css`
      background-color: #f4433655;
      cursor: not-allowed;
    `}

    ${(props) =>
    props.scheduledProfile &&
    css`
      background-color: #4caf5055;
    `}
`;
