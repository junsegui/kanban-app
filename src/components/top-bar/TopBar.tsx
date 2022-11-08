import React from "react";
import {
  StyledButton,
  StyledElipsis,
  StyledTittle,
  StyledTopBar,
} from "./StyledTopBar";
import elipsis from "../../assets/icon-vertical-ellipsis.svg";
import useModal from "../../hooks/useModal";

export const TopBar = () => {
  const { isOpen, toggle } = useModal();
  return (
    <StyledTopBar>
      <StyledTittle>Platform Launch</StyledTittle>
      <StyledButton onClick={toggle}>+ Add New Task</StyledButton>
      <StyledElipsis src={elipsis} />
    </StyledTopBar>
  );
};
