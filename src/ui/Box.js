import styled, { css } from "styled-components";

const Box = styled.div`
    ${props => props.m && `margin: ${props.m};`}
    ${props => props.p && `padding: ${props.p};`}
    ${props => {
        switch(props.type) {
            case "flex":
                return css`
                    display: flex;
                `
            case "flex-spreaded":
                return css`
                    display: flex;
                    justify-content: space-between;
                `;
            case "grid":
                return css`
                    display: grid;
                `
            default:
                return css``;
        }
    }}

    ${props => props.column && css` flex-direction: column; `}

    ${props => {
        switch(props.align) {
            case "start":
                return css` align-items: flex-start; `;
            case "center":
                return css` align-items: center; `
            case "end":
                return css` align-items: flex-end; `
        }
    }}

    ${props => {
        switch(props.justifyContent) {
            case "start":
                return css` justify-content: start; `
            case "center":
                return css` justify-content: center; `
            case "space-between":
                return css` justify-content: space-between; `
            case "space-around":
                return css` justify-content: space-around; `
            case "space-evenly":
                return css` justify-content: space-evenly; `
        }
    }}

    ${props => props.columns && props.columnMinSize && `grid-template-columns: repeat(${props.columns}, minmax(${props.columnMinSize}, 1fr));`}

    ${props => props.gap && css`gap: ${props.gap};`}

    ${props => props.maxWidth && css` max-width: ${props.maxWidth}px; `}

    ${props => props.width && css` width: ${props.width}; `}
`;

export {
    Box
}