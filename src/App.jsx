import React, { useState, useEffect } from 'react';
// import Content from './Content';


function App() {

  const [pageNum, setPageNum] = useState(0)

  const pages = ["<Page0/>", "<Page1/>"]
  const clickNext = () => {
    if(pageNum < 6) {
      setPageNum(pageNum + 1)
    }
  }

  const clickBack = () => {
    if(pageNum > 0) {
      setPageNum(pageNum - 1)
    }
  }
  const clickHome = () => {
    setPageNum(0)
  }

  const content = () => {
    return (
      JSON.parse(pages[pageNum])
    )
  }

  return (
    <div className="container">
      <h1>Current Page {pageNum}</h1>

      {content}

      <button className="btn btn-danger" onClick={clickHome}>Home</button>
      <button className="btn btn-danger" onClick={clickBack}>Back</button>
      <button className="btn btn-danger" onClick={clickNext}>Next</button>

    </div>
  )
}

export default App;

const Page0 = () => {
  return (
    <h1>I can read your mind</h1>
  )
}

const Page1 = () => {
  return (
    <h1>page2</h1>
  )
}

const Page2 = () => {
  return (
    <h1>page3</h1>
  )
}

const Page3 = () => {
  return (
    <h1>page4</h1>
  )
}

const Page4 = () => {
  return (
    <h1>page5</h1>
  )
}

const Page5 = () => {
  return (
    <h1>page6</h1>
  )
}