import React from 'react';
import { Alphabet } from '../Alphabet/Alphabet';
import styled from 'styled-components';
import { ALPHABET_STYLE_CONSTANTS } from '../Alphabet/Alphabet';

const StyledSpecialAlphabets = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    ${ALPHABET_STYLE_CONSTANTS.boxSize}px
  );
  grid-gap: 35px;
  justify-content: space-between;
`;

export const SpecialAlphabets: React.FC = () => {
  return (
    <StyledSpecialAlphabets>
      <Alphabet char="ä" />
      <Alphabet char="ö" />
      <Alphabet char="ü" />
      <Alphabet char="ß" />
    </StyledSpecialAlphabets>
  );
};
