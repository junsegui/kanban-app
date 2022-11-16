import styled from "styled-components";

export const InputStyled = styled.input`
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
export const TextBox = styled.textarea`
  border: 1px solid #828fa3;
  height: 100px;
  resize: none;
  border-radius: 4px;
  font-family: "Plus Jakarta Sans";
`;
export const StatusContainer = styled.div`
  width: 90%;
  height: 40vh;
  display: flex;
  flex-direction: column;
`;
export const StatusSelect = styled.div`
  padding: 8px 16px;
  border: 1px solid #828fa3;
  border-radius: 4px;
  line-height: 23px;
  position: relative;
  margin: 0;
`;

export const Option = styled.option`
  font-size: 2rem;
`;
