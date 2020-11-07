import React, { useState, useEffect } from 'react';
import Content from './Content';

// import logo from './logo.svg';
// import './App.css';

function App() {

  //page Content Object
  

//declare initial state
const [currentState, setState] = useState(0);

//component did mount
useEffect(() => {
  console.log('did mount')
  let lsState = window.localStorage.getItem('currentState')
  if(lsState) {
    if(lsState !== currentState) {
      setState(JSON.parse(lsState))
    }
  }
  console.log(currentState)
}, [])

//component did update
const setNewState = (newState) => {
  setState(newState)
  window.localStorage.setItem('currentState', JSON.stringify(newState))
}

//we may not actually need this. stand by
function init() {
  setNewState(0);
  // heading.textContent = pageContent[state].heading;
  // pageNumber.innerHTML = pageContent[state].pgnum;
  // subHead.innerHTML = pageContent[state].desc;
}

function next() {
  if(currentState <= 4) {
    setNewState(currentState + 1)
  }
  console.log("currenc state ", currentState)
}

function back() {
  if (currentState >= 1) {
    setNewState(currentState - 1)
  }
  console.log("current state ", currentState)
}


  return (
    <>
      <h1>Mind Reader</h1>



    <Content
      currentState={currentState}
      next={next}
     />

      <div className="container">
        <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light justify-content-center">
          <ul className="nav">
            <li className="nav-item">
              <button
              id="home" 
              className="btn btn-warning"
              >
                Home
                </button>
            </li>
            <li className="nav-item">
              <button
              onClick={back}
              className="btn btn-warning"
              >
                Back
                </button>
            </li>
            <li className="nav-item">
              <button
              onClick={next}
              className="btn btn-warning"
              >
                Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
