import React from 'react';
import styled from 'styled-components';

const StyledAlphabet = styled.div`
  height: 140px;
  width: 140px;
  font-family: 'Fira Code', 'Papyrus';
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 104px;
    margin: 0;
  }
`;
interface Props {
  char: string;
}

export const Alphabet: React.FC<Props> = ({ char }) => {
  return (
    <StyledAlphabet>
      <p>{char}</p>
    </StyledAlphabet>
  );
};
