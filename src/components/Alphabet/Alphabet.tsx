import React from 'react';
import styles from './Alphabet.module.scss';
import classNames from 'classnames';

interface Props {
  char: string;
  isActive: boolean;
}

export const Alphabet: React.FC<Props> = ({ char, isActive }) => {
  return (
    <div
      className={classNames(styles.root, { [styles.active]: isActive })}
      data-char={char}
    >
      <p>{char}</p>
    </div>
  );
};
