import React, {useState, useEffect} from 'react'
import Character from './Character.js'
import axios from 'axios'



const Characters = props => {
let charList = [];
const [chars, setChars] = useState([])

useEffect(() => {axios.get('https://swapi.py4e.com/api/people')
    .then( result => {
      const {data} = result;
        console.log(data)

        let i;
        for (i=1; i <= data.count ;i++){
            axios.get(`https://swapi.py4e.com/api/people/${i}/`)
                .then(result => setChars([...chars, result.data]))
                .catch(err => console.log(err))
            //console.log(characterList)
            
        }
        
        
    })
    .catch(err => console.log(err))
},[])


    console.log(charList.length)

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