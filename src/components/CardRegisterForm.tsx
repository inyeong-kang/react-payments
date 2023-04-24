import styled from 'styled-components';

import { InputBox } from './common';

import { useForm } from '../hooks/useForm';

import { cardList } from '../data/localStorage';

import { joinValues } from '../utils/infoKey';
import { getFormFields } from '../utils/formData';

import { Card } from '../type/card';

export function CardRegisterForm() {
  const inputList = useForm();

  const allInputs = [
    ...inputList.CARD_NUMBER,
    ...inputList.DATE,
    ...inputList.USERNAME,
    ...inputList.CODE,
    ...inputList.CARD_PASSWORD,
  ];

  const requiredInputs = allInputs.filter((input) => input.required);
  const isRequiredInputValid = requiredInputs.every(
    ({ value, error }) => value && !error
  );

  const optionalInputs = allInputs.filter((input) => !input.required);
  const isOptionalInputValid = optionalInputs.every(({ value, error }) =>
    value ? value && !error : true
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fields = getFormFields(e.target as HTMLFormElement);
    const submittedCardInfo = {
      ...joinValues(fields, 'CARD_NUMBER'),
      ...joinValues(fields, 'DATE'),
      ...joinValues(fields, 'USERNAME'),
      ...joinValues(fields, 'CODE'),
      ...joinValues(fields, 'CARD_PASSWORD'),
    };

    console.log(submittedCardInfo);
    cardList.updateData(submittedCardInfo as unknown as Card);
  }

  return (
    <_Form onSubmit={handleSubmit}>
      {Object.entries(inputList).map(([key, inputs]) => (
        <InputBox id={key} inputs={inputs}></InputBox>
      ))}
      {isRequiredInputValid && isOptionalInputValid && (
        <ButtonWrapper>
          <CompleteButton type='submit'>다음</CompleteButton>
        </ButtonWrapper>
      )}
    </_Form>
  );
}

const _Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  gap: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const CompleteButton = styled.button`
  width: 5rem;
  padding: 0.5rem 0.1rem;
  color: black;
  background-color: White;
  font-weight: bold;

  cursor: pointer;
`;