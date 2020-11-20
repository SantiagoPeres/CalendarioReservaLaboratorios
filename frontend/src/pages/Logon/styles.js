import styled from 'styled-components';

export const ContainerPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
    background: #00dbf2;
    background: linear-gradient(180deg, #00dbf2 25%, #20659f 100%);
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 35%;

    img {
        width: 130px;
        height: 130px;
    }
`;

export const Container = styled.div`
    width: 25%;
    height: 65%;
    background-color: #ffffff88;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 2px #44444455;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;

        > div + div {
        width: 85%;
        height: 45%;
        }

        > div + div + div {
            width: 85%;
            height: 20%;
        }
    }
`;
