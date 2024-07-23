import { Alphabet } from './Alphabet';
import React from 'react';
import { render } from '@testing-library/react';

describe('Alphabet', () => {
  it('should match snapshot', () => {
    expect(
      <Alphabet isActive={false} char="a" shortcutKey="a" />,
    ).toMatchSnapshot();
  });

  it('should render the correct character', () => {
    const chosenChar = 'a';
    const { container, debug } = render(
      <Alphabet isActive={false} char={chosenChar} shortcutKey={chosenChar} />,
    );
    debug();
    const char = container.querySelector('p')!.innerHTML;
    expect(char).toBe(chosenChar);
  });
});
