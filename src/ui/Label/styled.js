import styled, { css } from "styled-components";

const LabelStyled = styled.div`
    display: flex;
    text-align: left;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;

    ${props => props.s && css`
        font-size: 14px;
        line-height: 18px;
    `}

    ${props => props.b && css`
        font-size: 18px;
        line-height: 24px;
    `}

    ${props => props.alignCenter && css`
        justify-content: center;
        margin: 0
    `}
`

export {
    LabelStyled
}