import React from 'react';
import { Alphabets } from './components/Alphabets/Alphabets';
import styled from 'styled-components';

const StyledApp = styled.div`
  max-width: 920px;
  margin: 0 auto;
`;

function App() {
  return (
    <StyledApp>
      <Alphabets />
    </StyledApp>
  );
}

export default App;
