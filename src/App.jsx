import { useState } from 'react'
// import './App.css'

function App() {
  const [text, setText]=useState('Ready?')
  console.log(text);
  const [isClicked, setIsClicked]=useState(false)
  const [inputText, setInputText]=useState('')
  const [userName, setUserName]=useState('')

function changeTitle(event){
  setText('Hello');
  setUserName(inputText);
  event.preventDefault();
}

function changeColor(){
  setIsClicked(true);
}

function changeColorBack(){
  setIsClicked(false);
}


function handleInputChange(event){
  console.log( event.target.value);
  setInputText(event.target.value);
}
  return (
    <form onSubmit={changeTitle}>
        <h1 >{text} {userName}</h1>
        <p>To be updated: {inputText}</p>
        <input type="text" placeholder="Enter your Name: "
          onChange={handleInputChange} value={inputText}
          ></input>
         <br /><br />
        <button type="submit" style={{backgroundColor: isClicked? "lightgreen":"gray"} } 
                // onClick={changeTitle} 
                onMouseOver={changeColor} 
                onMouseOut={changeColorBack}>
                submit</button>
    </form>
  )
}

export default App
