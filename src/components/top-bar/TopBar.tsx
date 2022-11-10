import React from "react";
import {
  StyledButton,
  StyledElipsis,
  StyledTittle,
  StyledTopBar,
} from "./StyledTopBar";
import elipsis from "../../assets/icon-vertical-ellipsis.svg";
import useModal from "../../hooks/useModal";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/modal/actionModal";

export const TopBar = () => {
  const dispatch = useDispatch();
  return (
    <StyledTopBar>
      <StyledTittle>Platform Launch</StyledTittle>
      <StyledButton onClick={(e) => dispatch(toggleModal())}>
        + Add New Task
      </StyledButton>
      <StyledElipsis src={elipsis} />
    </StyledTopBar>
  );
};
