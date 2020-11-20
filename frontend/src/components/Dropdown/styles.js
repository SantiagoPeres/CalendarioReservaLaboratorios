import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;

    width: 100%;
    height: 55px;
    margin-top: 15px;
`;

export const Label = styled.div`
    height: 30%;
    color: #333333;
    margin-bottom: 2px;
    font-weight: 700;
`;

export const ContainerSelect = styled.div`
    width: 85%;
    height: 100%;
`;

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 15%;
    height: 100%;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
`;

export const ContainerSearch = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 70%;
`;

export const Img = styled.img`
    width: 15px;
    height: 15px;

    transition: 0.4s;
    transform: ${(prop) => (prop.open ? 'rotate(180deg)' : '')};
`;

export const SelectInput = styled.input`
    width: 100%;
    height: 100%;

    background-color: ${(prop) => (prop.color)};;
    border: none;
    padding-left: 5px;

    ${(props) => {
    if (props.open) {
      return css`
                border-radius: 5px 5px 0 0;
                box-shadow: none;
           `;
    }
    return css`
            border-radius: 5px;
            box-shadow: 0px 5px 5px -3px #44444433;
        `;
  }}
`;

export const Options = styled.div`
    position: absolute;
    margin-top: 2px;
    max-height: 155px;
    width: 85%;
    background-color: #fafafa;
    overflow: auto;
    cursor: pointer;

    ${(props) => css`
            display: ${props.open ? 'block' : 'none'};
            border-radius: 0 0 5px 5px;
            box-shadow: 0px 5px 5px 0px #44444433;
        `}
`;

export const Option = styled.option`
     padding: 10px 10px 10px 10px;
    min-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;

    &:last-child {
        border-bottom: 5px;
    }

    ${(props) => {
    if (props.disabledSelected) {
      return css`
            pointer-events: none;
            cursor: not-allowed;
            color: #afafaf;
        `;
    }
    return css`
        &:hover {
            background-color: #ccc; 
        }
        `;
  }}
`;
