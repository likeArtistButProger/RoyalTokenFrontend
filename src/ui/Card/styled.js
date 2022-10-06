import styled, { css } from "styled-components";

const CardStyled = styled.div`
    padding: 10px 20px 20px 20px;
    background-color: #111633;
    box-shadow: 0px 0px 2px #6a7199;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 10px;

    ${props => props.maxWidth && css` max-width: ${props.maxWidth}; `}
`;

export {
    CardStyled
}