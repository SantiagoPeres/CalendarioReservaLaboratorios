import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    height: 55px;
    margin-top: 15px;
`;

export const Label = styled.div`
    height: 30%;
    color: #333333;
    margin-bottom: 2px;
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 70%;
    background-color: #E5E5E6;
    border-radius: 5px;
    box-shadow: inset 0px 0px 10px 1px #44444433;
    border: none;
    padding-left: 5px;
`;

export const ErrorSpan = styled.span`
    display: block;
    color: #e53e3e;
    margin-top: 5px;
    margin-left: 31px;
    font-size: 12px;
    font-weight: 300;
    text-align: start;
`;
