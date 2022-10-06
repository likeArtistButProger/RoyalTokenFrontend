import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *, :before, :after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    * {
        color: rgb(203,204,210);
    }

    html, body {
        min-height: 100%;
    }

    body {
        background-color: #070C27;
    }

    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }

`