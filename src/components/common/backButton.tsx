import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

export function BackButton() {
  const navigate = useNavigate();

  function movePrevPage() {
    navigate(-1);
  }

  return (
    <Button
      src='/assets/backButtonIc.svg'
      alt='back-button'
      onClick={movePrevPage}
    />
  );
}

const Button = styled.img`
  position: absolute;

  top: 2rem;
  left: 2.4rem;

  cursor: pot;
`;