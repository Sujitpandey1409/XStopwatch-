import React, { useState } from 'react';
const XDictionaryApp = () => {
    const[definition, setDefinition] = useState()
    const[inputText, setInputText] = useState()
    const dictionaryData = 
    [
    
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
    
        { word: "Component", meaning: "A reusable building block in React." },
    
        { word: "State", meaning: "An object that stores data for a component." }
    
    ]
    
    const handleClick = ()=>{
        console.log(inputText);
        if(inputText){
            const meaning = dictionaryData.filter((el)=> el.word.toLowerCase()===inputText.toLowerCase())
            console.log('meaning', meaning);
            if(meaning.length){setDefinition(meaning[0].meaning)}
            else{setDefinition('Word not found in the dictionary.')}
        }
        else{setDefinition()} 
    }

    return ( 
        <div className="dictionar-continer">
            <h1>Dictionary App</h1>
            <div className="inputButtonContainer">
                <input type="text" placeholder='Search for a word' onChange={(e)=>setInputText(e.target.value)}/>
                <button onClick={handleClick}>Search</button>
            </div>
            <h4>Definition:</h4>
            {definition&&<p>{definition}</p>}
        </div>
     );
}
 
export default XDictionaryApp;