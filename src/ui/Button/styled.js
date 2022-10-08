import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
    display: inline-flex;
    align-items: center;
    min-width: 64px;
    justify-content: center;
    padding: 4px 20px;
    background-color: rgba(255, 255, 255, 0.1);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 20px;
    user-select: none;

    &:disabled {
        opacity: 0.6;
    }

    ${props => {
        switch(props.styleType) {
            case "bigBoy":
                return css`
                    font-size: 18px;
                    line-height: 24px;
                    padding: 10px 50px;
                    background-color: rgba(140,124,240,0.95);
                `
            case "medium":
                return css`
                    font-size: 16px;
                    line-height: 22px;
                    padding: 6px 30px;
                    background-color: rgba(140,124,240,0.95);
                `;
        }
    }}
`;

export {
    ButtonStyled
}