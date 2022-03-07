import React from 'react';
import styles from './Alphabet.module.scss';

interface Props {
  char: string;
  isActive: boolean;
}

export const Alphabet: React.FC<Props> = ({ char, isActive }) => {
  return (
    <div className={styles.root} data-char={char}>
      <p>{char}</p>
    </div>
  );
};
