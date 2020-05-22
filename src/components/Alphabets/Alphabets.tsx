import React, { useState, useEffect } from 'react';
import { Alphabet, ALPHABET_STYLE_CONSTANTS } from '../Alphabet/Alphabet';
import styled from 'styled-components';
import { SpecialAlphabets } from '../SpecialAlphabets/SpecialAlphabets';
import { getCharAudio } from '../../helpers/audioHelper';

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
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = (char) => {
    if (isPlaying) {
      return;
    }

    setIsPlaying(true);

    const audio = new Audio(getCharAudio(char));
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });
    audio.play();
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      playAudio(e.key);
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => window.removeEventListener('keypress', handleKeyPress);
  });

  const handleClick = (e) => {
    const char = e.target.dataset.char;
    playAudio(char);
  };

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
      <StyledAlphabets onClick={handleClick}>
        {generateAlphabets()}
      </StyledAlphabets>
      <SpecialAlphabets />
    </>
  );
};
