import React from 'react';
import { Alphabet, ALPHABET_STYLE_CONSTANTS } from '../Alphabet/Alphabet';
import styled from 'styled-components';
import { SpecialAlphabets } from '../SpecialAlphabets/SpecialAlphabets';

const StyledAlphabets = styled.div`
  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(
    auto-fit,
    ${ALPHABET_STYLE_CONSTANTS.boxSize}px
  );
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const Alphabets: React.FC = () => {
  const generateAlphabets = () => {
    const charCodeForLowerA = 97;
    const charCodeForLowerZ = 122;
    let charCode = charCodeForLowerA;

    const alphabetComponents = [];

    while (charCode <= charCodeForLowerZ) {
      alphabetComponents.push(
        <Alphabet char={String.fromCharCode(charCode)} />
      );
      charCode++;
    }

    return alphabetComponents;
  };

  return (
    <>
      <StyledAlphabets>{generateAlphabets()}</StyledAlphabets>
      <SpecialAlphabets />
    </>
  );
};
