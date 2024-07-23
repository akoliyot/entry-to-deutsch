import React, { useState, useEffect } from 'react';
import { Alphabet } from '../Alphabet/Alphabet';
import { useAlphabetAudio } from '../../hooks/useAlphabetAudio';
import styles from './Alphabets.module.scss';
import classNames from 'classnames';

export const Alphabets: React.FC = () => {
  const [activatedChar, setActivatedChar] = useState('');
  const onAudioEnd = () => {
    setActivatedChar('');
  };
  const playAudio = useAlphabetAudio(onAudioEnd);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      let char = e.key;

      // Adding easy keyboard shortcuts for special
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

  const generateRowForAlphabets = (alphabets: string[]) => {
    const alphabetComponents = [];

    for (let char of alphabets) {
      alphabetComponents.push(
        <Alphabet
          key={char}
          isActive={activatedChar === char ? true : false}
          char={char}
        />,
      );
    }

    return alphabetComponents;
  };

  return (
    <div className={styles.root} onClick={handleClick}>
      <div className={styles.alphabets}>
        {generateRowForAlphabets([
          'q',
          'w',
          'e',
          'r',
          't',
          'y',
          'u',
          'i',
          'o',
          'p',
        ])}
      </div>
      <div className={classNames(styles.alphabets, styles.row2)}>
        {generateRowForAlphabets(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'])}
      </div>
      <div className={classNames(styles.alphabets, styles.row3)}>
        {generateRowForAlphabets(['z', 'x', 'c', 'v', 'b', 'n', 'm'])}
      </div>
      <br />
      <br />
      <div className={styles.specialAlphabets}>
        <Alphabet isActive={activatedChar === 'ä' ? true : false} char="ä" />
        <Alphabet isActive={activatedChar === 'ö' ? true : false} char="ö" />
        <Alphabet isActive={activatedChar === 'ü' ? true : false} char="ü" />
        <Alphabet isActive={activatedChar === 'ß' ? true : false} char="ß" />
      </div>
    </div>
  );
};
