import { Alphabet } from "./Alphabet"
import React from 'react';

describe('Alphabet', () => {
  it('should render correctly', () => {
    expect(<Alphabet isActive={false} char="a" />).toMatchSnapshot();
  })
})