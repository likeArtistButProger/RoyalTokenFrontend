import React from "react";
import { InputStyled } from "./styled";

const Input = ({ value, onChange, type, ...props }) => {

    return (
        <InputStyled value={value} onChange={(e) => { onChange(e.target.value) }} type={type} {...props} />
    )
}

export default Input;