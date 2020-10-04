import React from 'react';
import { GlobalStyle, Container } from "./globalStyle"


import { 
  Cv,
 } from "./components"


function App() {

  return (
    <Container>
      <GlobalStyle />
      <Cv></Cv>
    </Container>
  );
}

export default App;
