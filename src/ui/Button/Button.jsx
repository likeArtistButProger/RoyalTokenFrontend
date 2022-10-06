import React from "react";
import { ButtonStyled } from "./styled";

const Button = ({ children, onClick, disabled, ...props }) => {

    return (
        <ButtonStyled onClick={onClick} disabled={disabled} {...props}>{children}</ButtonStyled>
    )
}

export default Button;