import React from 'react';
import styled from 'styled-components';

interface Props {
  char: string;
  isActive: boolean;
}

type StyledProps = Pick<Props, 'isActive'>;

export const ALPHABET_STYLE_CONSTANTS = {
  boxSize: 100,
};

const StyledAlphabet = styled.div<StyledProps>`
  height: ${ALPHABET_STYLE_CONSTANTS.boxSize}px;
  width: ${ALPHABET_STYLE_CONSTANTS.boxSize}px;
  font-family: 'Fira Code', 'Papyrus';
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #cacaca;
  cursor: pointer;
  animation: ${(props) => (props.isActive ? 'highlight 1s' : 'none')};

  > p {
    font-size: 70px;
    margin: 0;
    pointer-events: none;
  }

  @keyframes highlight {
    0% {
      background-color: white;
    }

    50% {
      background-color: #cacaca;
    }

    100% {
      background-color: white;
    }
  }
`;

export const Alphabet: React.FC<Props> = ({ char, isActive }) => {
  return (
    <StyledAlphabet data-char={char} isActive={isActive}>
      <p>{char}</p>
    </StyledAlphabet>
  );
};
