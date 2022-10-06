import styled, { css } from "styled-components";

const Text = styled.span`
    color: rgb(203, 204, 210);

    ${props => {
        switch(props.size) {
            case "sm":
                return css`
                    font-size: 14px;
                    line-height: 18px;
                `
            case "m":
                return css`
                    font-size: 16px;
                    line-height: 22px;
                `
            case "b":
                return css`
                    font-size: 18px;
                    line-height: 24px;
                `
        }
    }};

    ${props => props.bold && "font-weight: 600;"}

    ${props => props.color && `color: ${props.color};`}

    ${props => props.opacity && ` opacity: ${props.opacity}; `}
`

export {
    Text
}