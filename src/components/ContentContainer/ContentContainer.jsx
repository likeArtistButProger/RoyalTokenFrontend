import React from "react";
import { ContentContainerStyled } from "./styled";

const ContentContainer = ({ children }) => {

    return (
        <ContentContainerStyled>
            {children}
        </ContentContainerStyled>
    )
}

export default ContentContainer;