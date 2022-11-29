import React from "react";
import { TaskColumn } from "../column-task/TaskColumn";
import { Section } from "../section/Section";
import { Container } from "./boards-styles";

export const BoardsDisplay = () => {
  return (
    <Container>
      <Section />
      <Section />

      <TaskColumn />
    </Container>
  );
};
