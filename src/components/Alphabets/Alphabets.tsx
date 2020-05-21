import React from 'react';
import { Alphabet } from '../Alphabet/Alphabet';

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

  return <>{generateAlphabets()}</>;
};
