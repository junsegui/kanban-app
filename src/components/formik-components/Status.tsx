import React from "react";
import {
  LabelStyled,
  Option,
  StatusContainer,
  StatusSelect,
} from "./Input-styles";

export const Status = () => {
  return (
    <StatusContainer>
      <LabelStyled>Status</LabelStyled>
      <StatusSelect></StatusSelect>
    </StatusContainer>
  );
};
