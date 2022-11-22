import { Field } from "formik";
import styled from "styled-components";

export const InputStyled = styled(Field)`
  padding: 8px 16px;
  border: 1px solid #828fa3;
  border-radius: 4px;
  line-height: 23px;
`;
export const LabelStyled = styled.label`
  font-size: 1.2rem;
  color: #828fa3;
  margin-bottom: 1%;
`;
export const InputContainer = styled.div`
  width: 90%;
  height: 30%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
`;
export const DescriptionContainer = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
`;
export const TextBox = styled(Field)`
  border: 1px solid #828fa3;
  height: 100px;
  resize: none;
  border-radius: 4px;
  font-family: "Plus Jakarta Sans";
`;
export const StatusContainer = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: column;
`;
export const StatusSelect = styled(Field)`
  padding: 8px 16px;
  border: 1px solid #828fa3;
  border-radius: 4px;
  line-height: 23px;
  position: relative;
  margin: 0;
  cursor: pointer;
  margin-bottom: 5%;
`;

export const StatusOptions = styled.option`
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 0.8rem;
  width: 90%;
  margin: 2.4rem 0 0;
  background-color: #585fc7;
  font-family: "Plus Jakarta Sans";
  color: #ffffff;
  border: none;
  border-radius: 1.5rem;
  font-weight: 700;
  font-size: 1.3rem;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;
export const SubmitContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
