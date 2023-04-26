import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { InputBox } from './common';

import { useCardRegisterForm } from '../hooks/useCardRegisterForm';

import { cardList } from '../data/localStorage';

import { Card, CardInfoOption } from '../type/card';
import { InputInfo } from '../type/input';

export function CardRegisterForm() {
  const naviagte = useNavigate();

  const { cardRegisterForm, isRequiredInputValid, isOptionalInputValid } =
    useCardRegisterForm();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const submittedCardInfo = {} as unknown as Card;

    for (const [key, inputs] of Object.entries(cardRegisterForm)) {
      submittedCardInfo[key as CardInfoOption] = Object.values(inputs)
        .map((input) => input.value)
        .join('');
    }

    cardList.updateData(submittedCardInfo);

    moveCardListPage();
  }

  function moveCardListPage() {
    naviagte('/');
  }

  return (
    <_Form onSubmit={handleSubmit}>
      {Object.entries(cardRegisterForm).map(([key, inputs]) => (
        <InputBox
          key={key}
          id={key}
          inputs={Object.values(inputs) as unknown as InputInfo[]}
        ></InputBox>
      ))}
      {isRequiredInputValid && isOptionalInputValid && (
        <_ButtonWrapper>
          <_CompleteButton type='submit'>다음</_CompleteButton>
        </_ButtonWrapper>
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

const _ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const _CompleteButton = styled.button`
  width: 5rem;
  padding: 0.5rem 0.1rem;
  color: black;
  background-color: White;
  font-weight: bold;

  cursor: pointer;
`;
