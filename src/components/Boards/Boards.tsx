import React from "react";
import { Container, TittleTask } from "./StyledBoard";
import board from "../../assets/icon-board.svg";
import { SVG } from "./SVG";
interface Props {
  selected: React.ReactNode;
}
export const Boards = () => {
  return (
    <Container>
      <SVG />
      <TittleTask>Patform Launch</TittleTask>
    </Container>
  );
};
