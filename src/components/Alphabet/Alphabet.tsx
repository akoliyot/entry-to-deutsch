import React from 'react';
import styled from 'styled-components';

export const ALPHABET_STYLE_CONSTANTS = {
  boxSize: 100,
};

const StyledAlphabet = styled.div`
  height: ${ALPHABET_STYLE_CONSTANTS.boxSize}px;
  width: ${ALPHABET_STYLE_CONSTANTS.boxSize}px;
  font-family: 'Fira Code', 'Papyrus';
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #cacaca;
  cursor: pointer;

  > p {
    font-size: 70px;
    margin: 0;
    pointer-events: none;
  }
`;
interface Props {
  char: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const Alphabet: React.FC<Props> = ({ char, onClick }) => {
  return (
    <StyledAlphabet data-char={char}>
      <p>{char}</p>
    </StyledAlphabet>
  );
};
