import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
        box-shadow: none;
    }

    body {
        background-color: #E7E8EA;
        -webkit-font-smoothing: antialiased;
    }

    html, body, #app {
        height: 100%
    }

    body, input, button {
        font: 14px 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
