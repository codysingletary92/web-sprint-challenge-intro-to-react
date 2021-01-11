import React, {useState} from 'react'
import Character from './Character.js'
import axios from 'axios'



const Characters = props => {

const [chars, setChars] = useState([])


axios.get('https://swapi.py4e.com/api/people')
    .then( result => {
      const {data} = result;
      let charList = [];
        let i;

        function get(resultData) {
            // console.log(resultData)
            charList.push(resultData)
           setChars(['hello'])
        }

        for (i=1; i <= data.count ;i++){
            axios.get(`https://swapi.py4e.com/api/people/${i}/`)
                .then(result => get(result.data))
                .catch(err => console.log(err))
            //console.log(characterList)
            
        }
        
        
    })
    .catch(err => console.log(err)) ;

// const list = props.data.results;
// console.log(list.map( obj => obj))

return (
       <div>
           {/* {list.map( (item, index) => <Character key={index} data={item} />)} */}
       </div>
        // (props.data).map( (item, index) => <Character key={index} data={item} />)
    
    
)

}

export default Characters;