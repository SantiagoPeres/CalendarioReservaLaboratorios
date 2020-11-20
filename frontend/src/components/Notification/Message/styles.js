import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 70px;
    width: 200px;
    height: 40px;

    border-radius: 5px;
    box-shadow: 0px 5px 5px -3px #44444433;

    ${(props) => props.success
        && css`
            background-color: #8bc34a;
        `}
    
    ${(props) => props.warning
        && css`
            background-color: #ffeb3b;
        `}

    ${(props) => props.error
        && css`
            background-color: #f44336;
        `}
`;

export const Img = styled.img`
    position: absolute;
    width: 15px;
    height: 15px;
    cursor: pointer;

    right: 10px;
`;
