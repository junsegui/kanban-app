import {
  Centered,
  CloseButton,
  DarkBG,
  FormikContainer,
  FormikForm,
  Heading,
  ModalA,
  ModalB,
  ModalContent,
  ModalHeader,
} from "./modal-styles";
import useModal from "../../hooks/useModal";
import { toggleColumnModal, toggleModal } from "../../redux/modal/actionModal";
import { useDispatch } from "react-redux";
import { addTaskInitialValues } from "../../formik/initialValues";
import { addTaskValidationSchema } from "../../formik/validationSchema";
import { Input } from "../formik-components/Input";
import { Description } from "../formik-components/Description";
import { Status } from "../formik-components/Status";
import { Submit } from "../formik-components/Submit";

export const ColumnModal = () => {
  const dispatch = useDispatch();
  return (
    <DarkBG>
      <Centered>
        <ModalB>
          <ModalHeader>
            <Heading>Add New Task</Heading>
          </ModalHeader>
          <FormikContainer
            initialValues={addTaskInitialValues}
            validationSchema={addTaskValidationSchema}
            onSubmit={async (e) => {
              const { description, status, task } = e;

              console.log(status);
            }}
          >
            <FormikForm>
              <Input />
              <Description />
              <Status />
              <Submit />
            </FormikForm>
          </FormikContainer>
        </ModalB>
        <CloseButton onClick={(e) => dispatch(toggleColumnModal())}>
          X
        </CloseButton>
      </Centered>
    </DarkBG>
  );
};
