import React from "react";
import { InputContainer, InputStyled, LabelStyled } from "./Input-styles";

export const Input = () => {
  return (
    <InputContainer>
      <LabelStyled>Name</LabelStyled>
      <InputStyled name="name" />
    </InputContainer>
  );
};
