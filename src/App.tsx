import React from 'react';
import './App.css';

import style from 'styled-components';
import tw from 'twin.macro';

// components
import Homepage from './app/containers/HomePage';

const AppContainer = style.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`

function App() {
  return (
    <AppContainer>
      <Homepage/>
    </AppContainer>
  );
}

export default App;
