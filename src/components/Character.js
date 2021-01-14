import React, {useState} from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'
import styled from 'styled-components';

const Character = props => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    console.log(props.data)
    const character = props.data
    

  return (
    <StyledDiv>
      <Button color="dark" onClick={toggle} style={{ marginBottom: '1rem' }}>{character.name}</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody style={{
              color: 'white', 
              backgroundColor: '#333',
              borderColor: '#333',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
                  }}>
            <h2>Birth Year: {character.birth_year}</h2>
            <h2>Eye Color: {character.eye_color}</h2>
            <h2>Gender: {character.gender}</h2>
            <h2>Hair Color: {character.hair_color}</h2>
            <h2>Height: {character.height}</h2>
            <h2>Mass: {character.mass}</h2>
            <h2>Hair Color: {character.hair_color}</h2>
            <h2>Skin Color: {character.skin_color}</h2>
          </CardBody>
        </Card>
      </Collapse>
    </StyledDiv>
  );

}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
`
const StyledButton = styled.div`
  background-color: black;
  cursor: pointer;
`

export default Character;