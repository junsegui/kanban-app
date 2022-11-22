import React from "react";
import { DescriptionContainer, LabelStyled, TextBox } from "./Input-styles";

export const Description = () => {
  return (
    <DescriptionContainer>
      <LabelStyled>Description</LabelStyled>
      <TextBox
        component="textarea"
        name="description"
        placeholder="e.g: review all the tasks from next week"
      />
    </DescriptionContainer>
  );
};
