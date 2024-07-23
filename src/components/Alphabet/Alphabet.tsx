import React from 'react';
import styles from './Alphabet.module.scss';
import classNames from 'classnames';

interface Props {
  char: string;
  shortcutKey: string;
  isActive: boolean;
}

export const Alphabet: React.FC<Props> = ({ char, isActive, shortcutKey }) => {
  return (
    <div
      className={classNames(styles.root, { [styles.active]: isActive })}
      data-char={char}
      title={`Press "${shortcutKey}" to play`}
    >
      <p>{char}</p>
    </div>
  );
};
