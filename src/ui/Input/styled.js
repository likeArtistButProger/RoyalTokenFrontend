import styled from "styled-components";

const InputStyled = styled.input`
    width: 100%;
    padding: 8px 10px;
    outline: none;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 10px;
    background: #1e2759;
    color: #FFFFFF;
    font-size: 18px;
    line-height: 24px;

    &:placeholder {
        color: rgb(203,204,210);
    }
`;

export {
    InputStyled
}