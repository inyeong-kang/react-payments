import { useContext } from 'react';
import styled from 'styled-components';

import { CARD_COMPANY } from '../../constants/cardCompany';
import { CardPreviewInfoContext } from '../../contexts/cardPreviewInfoContext';

export function CardPreview() {
  const { cardNumber, username, expiredDate, company } = useContext(
    CardPreviewInfoContext
  );

  const clickedCompany = company.clicked.value;
  const companyName =
    clickedCompany in CARD_COMPANY ? CARD_COMPANY[clickedCompany].name : '';

  const companyColor =
    clickedCompany in CARD_COMPANY
      ? CARD_COMPANY[clickedCompany].color
      : 'gray';

  return (
    <Container color={companyColor}>
      <_CompanyName>{companyName}</_CompanyName>
      <_Chip />
      <_NumberWrapper>
        <_NumberItem>{cardNumber.first.value}</_NumberItem>
        <_NumberItem>{cardNumber.second.value}</_NumberItem>
        <_NumberItem>{'•'.repeat(cardNumber.third.value.length)}</_NumberItem>
        <_NumberItem>{'•'.repeat(cardNumber.fourth.value.length)}</_NumberItem>
      </_NumberWrapper>
      <_InfoWrapper>
        <_Name>{username.first.value}</_Name>
        <_Date>
          {expiredDate.month.value}/{expiredDate.year.value}
        </_Date>
      </_InfoWrapper>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 21.3rem;
  height: 13.3rem;
  margin-bottom: 3.5rem;
  background-color: ${(props) => props.color || props.theme.color.grey400};
  color: ${(props) =>
    props.color === props.theme.color.yellowKakao
      ? props.theme.color.black
      : props.theme.color.white};
  font-size: 1.3rem;
  font-weight: 500;

  letter-spacing: 0.1rem;
  border-radius: 0.5rem;

  box-shadow: 0.4rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 1rem 1rem 0.7rem rgba(0, 0, 0, 0.25);
  }
`;

const _CompanyName = styled.p`
  margin: 1.1rem 0 2.2rem 1.3rem;

  font-family: 'Roboto';
  line-height: 1.4rem;
`;

const _Chip = styled.div`
  width: 4rem;
  height: 2.6rem;
  margin-left: 1.4rem;
  background-color: ${(props) => props.theme.color.yellow};
  border-radius: 0.4rem;
`;

const _NumberWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin: 1.3rem 1rem 0 2rem;
`;

const _NumberItem = styled.li``;

const _InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 1.5em;
`;

const _Name = styled.div``;

const _Date = styled.div``;
