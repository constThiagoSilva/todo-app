import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;

        box-sizing: border-box;
    }
    body {
        width: 100vw;
        height: 100vh;
    }
    button {
        cursor: pointer;
    }
    input:focus {
        border: 0;
        outline: 0;
        box-shadow: 0;
    }
    a {
        cursor: pointer;
    }
`