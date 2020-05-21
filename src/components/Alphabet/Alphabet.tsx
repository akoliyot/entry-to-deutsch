import React, { useState } from 'react';
import styled from 'styled-components';
import sound from '../../assets/a.wav';

const StyledAlphabet = styled.div`
  height: 140px;
  width: 140px;
  font-family: 'Fira Code', 'Papyrus';
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #cacaca;
  margin-left: 100px;
  cursor: pointer;

  > p {
    font-size: 104px;
    margin: 0;
  }
`;
interface Props {
  char: string;
}

export const Alphabet: React.FC<Props> = ({ char }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    if (isPlaying) {
      return;
    }

    setIsPlaying(true);

    const audio = new Audio(sound);
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });
    audio.play();
  };

  return (
    <StyledAlphabet onClick={playAudio}>
      <p>{char}</p>
    </StyledAlphabet>
  );
};
