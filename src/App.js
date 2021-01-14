import React, {useState} from 'react';
import './App.css';
import dummyData from './dummyData.js';
import Characters from './components/Characters';
import styled from 'styled-components';


const App = () => {

  

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledBody>
      <h1>Starwars Characters</h1>
      <Characters />
    </StyledBody>
    
  );
}

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  
  justify-content: center;
`


export default App;
