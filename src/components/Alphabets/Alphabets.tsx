import React, { useState, useEffect } from 'react';
import { Alphabet, ALPHABET_STYLE_CONSTANTS } from '../Alphabet/Alphabet';
import styled from 'styled-components';
import { useAlphabetAudio } from '../../hooks/useAlphabetAudio';

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

const StyledSpecialAlphabets = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    ${ALPHABET_STYLE_CONSTANTS.boxSize}px
  );
  grid-gap: 35px;
  justify-content: space-between;
`;

export const Alphabets: React.FC = () => {
  const [activatedChar, setActivatedChar] = useState('');
  const playAudio = useAlphabetAudio();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      let char = e.key;

      // Adding easy keyboard shortucts for special
      // chars.
      switch (e.keyCode) {
        case 65:
          char = 'ä';
          break;

        case 79:
          char = 'ö';
          break;

        case 85:
          char = 'ü';
          break;

        case 83:
          char = 'ß';
          break;
      }

      setActivatedChar(char);
      playAudio(char);
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  });

  const handleClick = (e: React.MouseEvent) => {
    if (!e.target) return;

    const el = e.target as HTMLDivElement;
    const char = el?.dataset.char;

    if (!char) return;

    setActivatedChar(char);
    playAudio(char);
  };

  const generateAlphabets = () => {
    const charCodeForLowerA = 97;
    const charCodeForLowerZ = 122;
    let charCode = charCodeForLowerA;

    const alphabetComponents = [];

    while (charCode <= charCodeForLowerZ) {
      const char = String.fromCharCode(charCode);
      alphabetComponents.push(
        <Alphabet
          key={char}
          isActive={activatedChar === char ? true : false}
          char={char}
        />
      );
      charCode++;
    }

    return alphabetComponents;
  };

  return (
    <div onClick={handleClick}>
      <StyledAlphabets>{generateAlphabets()}</StyledAlphabets>
      <StyledSpecialAlphabets>
        <Alphabet isActive={activatedChar === 'ä' ? true : false} char="ä" />
        <Alphabet isActive={activatedChar === 'ö' ? true : false} char="ö" />
        <Alphabet isActive={activatedChar === 'ü' ? true : false} char="ü" />
        <Alphabet isActive={activatedChar === 'ß' ? true : false} char="ß" />
      </StyledSpecialAlphabets>
    </div>
  );
};
