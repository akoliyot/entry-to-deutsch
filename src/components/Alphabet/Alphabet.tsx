import React from 'react';
import styled from 'styled-components';

const StyledAlphabet = styled.div`
  height: 140px;
  width: 140px;
  background-color: crimson;
  font-family: 'Fira Code', 'Papyrus';
`;

interface Props {
  char: string;
}

export const Alphabet: React.FC<Props> = ({ char }) => {
  return (
    <StyledAlphabet>
      <p>StyledAlphabet</p>
    </StyledAlphabet>
  );
};
