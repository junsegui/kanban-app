import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

import {
  Centered,
  CloseButton,
  DarkBG,
  Heading,
  ModalA,
  ModalContent,
  ModalHeader,
} from "./modal-styles";
import useModal from "../../hooks/useModal";
interface ModalType {
  isOpen: boolean;
  toggle: () => void;
}
export const Modal = (props: ModalType) => {
  return (
    <DarkBG>
      <Centered>
        <ModalA>
          <ModalHeader>
            <Heading>Text</Heading>
          </ModalHeader>
          <ModalContent>
            Hola texto Lorem ipsum dolor sit amet consectetur adipisicing elit.
            R
          </ModalContent>
        </ModalA>
        <CloseButton onClick={() => props.toggle}>X</CloseButton>
      </Centered>
    </DarkBG>
  );
};
