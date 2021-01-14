import React, {useState, useEffect} from 'react'
import Character from './Character.js'
import axios from 'axios'
import data from '../dummyData.js';
import styled from 'styled-components';



const Characters = props => {
let charList = [];
const [chars, setChars] = useState([])

useEffect(() => {axios.get('https://swapi.py4e.com/api/people')
    .then( result => {
      const {data} = result;
        // let i;
        // for (i=1; i <= data.count ;i++){
        //     axios.get(`https://swapi.py4e.com/api/people/${i}/`)
        //         .then(result => setChars([...chars, result.data]))
        //         .catch(err => console.log(err))
        //     console.log(chars)
            
        // }
        
        
    })
    .catch(err => console.log(err))
},[])

// const list = props.data.results;
// console.log(list.map( obj => obj))

return (
       <StyledDiv>
           {data.results.map( (item, index) => <Character key={index} data={item} />)}
       </StyledDiv>
        // (props.data).map( (item, index) => <Character key={index} data={item} />)
    
    
)

}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


export default Characters;