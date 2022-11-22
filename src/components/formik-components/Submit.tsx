import { Field } from "formik";
import React from "react";
import { SubmitButton, SubmitContainer } from "./Input-styles";

export const Submit = () => {
  return (
    <SubmitContainer>
      <SubmitButton type="submit">Create Task</SubmitButton>
    </SubmitContainer>
  );
};
