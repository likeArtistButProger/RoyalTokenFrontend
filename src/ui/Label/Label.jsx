import React from "react";
import { LabelStyled } from "./styled";

const Label = ({ children, ...props }) => {

    return (
        <LabelStyled {...props}>
            {children}
        </LabelStyled>
    )
}

export default Label;