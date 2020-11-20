import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;
    width: 100vw;
`;

export const Header = styled.div`
    height: 10%;
    width: 100vw;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100vw;
    background: #E5E5E5;
    overflow-y: auto;

    ${(props) => props.navbar
       && css`
            height: 90%;
        `}
`;

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
    background: #E5E5E5;
`;
