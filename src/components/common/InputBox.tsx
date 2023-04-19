import React, { ReactElement } from "react";
import styled from "styled-components";
import { LabelOption, LABEL, PLACEHOLDER } from "../../constants/inputInfo";
import { Input } from "./Input";
export interface InputBoxProps {
  type: LabelOption;
  render?: () => JSX.Element;
  children: React.ReactNode;
  error?: string;
}

export function InputBox(props: InputBoxProps) {
  const { type, render, children, error } = props;
  return (
    <InputContainer>
      {render && render()}
      <Label>{LABEL[type]}</Label>
      <InputWrapper>{children}</InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
}

const InputContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font: var(--text-caption);
  color: var(--grey-300);
  margin: 0.7rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 51.8rem; */
  height: 4.5rem;

  font-size: 1.5rem;

  background: #ecebf1;
  border-radius: 7px;
`;

const ErrorMessage = styled.strong`
  margin-top: 1rem;

  color: red;
`;
