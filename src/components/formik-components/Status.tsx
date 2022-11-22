import React from "react";

import {
  LabelStyled,
  StatusContainer,
  StatusOptions,
  StatusSelect,
} from "./Input-styles";

export const Status = () => {
  return (
    <StatusContainer>
      <LabelStyled>Status</LabelStyled>
      <StatusSelect component="select" name="status">
        <StatusOptions value="si">si</StatusOptions>
        <StatusOptions value="no">no</StatusOptions>
      </StatusSelect>
    </StatusContainer>
  );
};
