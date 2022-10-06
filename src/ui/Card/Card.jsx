import React from "react";
import { CardStyled } from "./styled";

const Card = ({ children, ...props }) => {

    return (
        <CardStyled {...props}>
            {children}
        </CardStyled>
    )
}

export default Card;