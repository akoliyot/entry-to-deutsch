import React from 'react';
import { Alphabet } from './Alphabet';
import { useValue } from 'react-cosmos/fixture';

export default () => {
  const [char] = useValue('char', { defaultValue: 'a' });
  return <Alphabet char={char} />;
};
