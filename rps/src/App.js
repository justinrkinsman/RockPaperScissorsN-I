import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasName, setHasName] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [userSelection, setUserSelection] = useState('')
  const [cpuSelection, setCpuSelection] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const checkForName = () => {
    if (name === "") {
      setErrorMessage("You must enter a name!")
    } else {
      setErrorMessage("")
      setHasName(true)
    }
  };

  const handleUserSelection = (event) => {
    setUserSelection(event.target.textContent)
    handleCpuSelection()
  }

  const handleCpuSelection = () => {
    const options = ["Rock", "Paper", "Scissors"]
    const randomSelection = options[Math.floor(Math.random() * options.length)]
    setCpuSelection(randomSelection)
    compareSelections()
  }

  const compareSelections = () => {
    console.log(`${userSelection} vs. ${cpuSelection}`)
  }

  const increaseUserScore = () => {
    setUserScore(userScore + 1)
  }

  const increaseCpuScore = () => {
    setCpuScore(cpuScore + 1)
  }

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1> {
        hasName ? (
          <div>
            <p>Welcome {name}</p>
            <p>Choose your weapon</p>
            <button onClick={handleUserSelection}>Rock</button>
            <button onClick={handleUserSelection}>Paper</button>
            <button onClick={handleUserSelection}>Scissors</button>
            <div className='scoreboard'>
              <div className="player1">
                <p>{name}</p>
                <p>- {userScore}</p>
              </div>
              <div className='cpu-player'>
                <p>{cpuScore} -</p>
                <p>Computer</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <form className='name-form'>
              <label htmlFor="name">Enter your name </label>
              <input id="name" type="text" value={name} onChange={handleNameChange}/>
            </form>
            <button onClick={checkForName}>Start</button>
          </>
        )
      } 
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default App;
