import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

import {
  Centered,
  CloseButton,
  DarkBG,
  FormikContainer,
  FormikForm,
  Heading,
  ModalA,
  ModalContent,
  ModalHeader,
} from "./modal-styles";
import useModal from "../../hooks/useModal";
import { toggleModal } from "../../redux/modal/actionModal";
import { useDispatch } from "react-redux";
import { addTaskInitialValues } from "../../formik/initialValues";
import { addTaskValidationSchema } from "../../formik/validationSchema";
import { Input } from "../formik-components/Input";
import { Description } from "../formik-components/Description";
import { Status } from "../formik-components/Status";

export const Modal = () => {
  const dispatch = useDispatch();
  return (
    <DarkBG>
      <Centered>
        <ModalA>
          <ModalHeader>
            <Heading>Add New Task</Heading>
          </ModalHeader>
          <FormikContainer
            initialValues={addTaskInitialValues}
            validationSchema={addTaskValidationSchema}
            onSubmit={(e) => {}}
          >
            <FormikForm>
              <Input />
              <Description />
              <Status />
            </FormikForm>
          </FormikContainer>
        </ModalA>
        <CloseButton onClick={(e) => dispatch(toggleModal())}>X</CloseButton>
      </Centered>
    </DarkBG>
  );
};
