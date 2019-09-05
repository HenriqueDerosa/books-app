import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        user-select: none;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background: whitesmoke;
        color: #fff;
        font-family: 'Nunito', sans-serif;
        font-size: 16px;
        -webkit-font-smoothing: antialiased !important;
    }

    button {
        cursor: pointer;
        background: transparent;
        color: white;
        padding: 12px;
        text-transform: uppercase;
        font-weight: bold;
        border: 2px solid #fff;
        border-radius: 4px;
        transition: background 0.2s;
        &:hover {
            background: rgba(255,255,255,0.2);
        }
    }

    hr {
        border: 1px solid #fff;
    }
`;
