import React, { useState } from 'react';
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
  }
`;
interface Props {
  char: string;
}

const getCharAudio = (char: string) => {
  switch (char) {
    case 'a':
      return require('../../assets/a.wav');
    case 'b':
      return require('../../assets/b.wav');
    case 'c':
      return require('../../assets/c.wav');
    case 'd':
      return require('../../assets/d.wav');
    case 'e':
      return require('../../assets/e.wav');
    case 'f':
      return require('../../assets/f.wav');
    case 'g':
      return require('../../assets/g.wav');
    case 'h':
      return require('../../assets/h.wav');
    case 'i':
      return require('../../assets/i.wav');
    case 'j':
      return require('../../assets/j.wav');
    case 'k':
      return require('../../assets/k.wav');
    case 'l':
      return require('../../assets/l.wav');
    case 'm':
      return require('../../assets/m.wav');
    case 'n':
      return require('../../assets/n.wav');
    case 'o':
      return require('../../assets/o.wav');
    case 'p':
      return require('../../assets/p.wav');
    case 'q':
      return require('../../assets/q.wav');
    case 'r':
      return require('../../assets/r.wav');
    case 's':
      return require('../../assets/s.wav');
    case 't':
      return require('../../assets/t.wav');
    case 'u':
      return require('../../assets/u.wav');
    case 'v':
      return require('../../assets/v.wav');
    case 'w':
      return require('../../assets/w.wav');
    case 'x':
      return require('../../assets/x.wav');
    case 'y':
      return require('../../assets/y.wav');
    case 'z':
      return require('../../assets/z.wav');
  }
};

export const Alphabet: React.FC<Props> = ({ char }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
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

  return (
    <StyledAlphabet onClick={playAudio}>
      <p>{char}</p>
    </StyledAlphabet>
  );
};
