import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 37px;
    margin-top: 15px;
    border-radius: 5px;
    border: 2px solid;
    border-color: transparent;

    ${({ color }) => css`
        background-color: ${color};
        color: white;
    `}

    ${({ bold }) => bold
        && css`
            font-weight: bold;
        `}

    &:hover:enabled {
         ${({ color }) => css`
            background-color: ${shade(0.2, color)};
        `}
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.4;
    }
`;
