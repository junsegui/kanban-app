import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleColumnModal, toggleModal } from "../../redux/modal/actionModal";
import { ColumnModal } from "../modal/ColumnModal";
import { AddColumn, ColumnContainer } from "./taskColumnStyles";

export const TaskColumn = () => {
  const dispatch = useDispatch();
  return (
    <ColumnContainer onClick={(e) => dispatch(toggleColumnModal())}>
      <AddColumn>+ New Column</AddColumn>
    </ColumnContainer>
  );
};
