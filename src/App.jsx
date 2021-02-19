import React, { useState, useEffect } from 'react';
// import Content from './Content';


function App() {

  const [pageNum, setPageNum] = useState(0)

  const pages = ["<Page0/>", "<Page1/>"]
  const clickNext = () => {
    if (pageNum < 5) {
      setPageNum(pageNum + 1)
    }
  }

  const clickBack = () => {
    if (pageNum > 0) {
      setPageNum(pageNum - 1)
    }
  }
  const clickHome = () => {
    setPageNum(0)
  }

  const pageContent = [
    {
      heading: "Pick a number from 1 - 99",
      desc: ["when you have your number click next"],
    },

    {
      heading: "Add both digits together to get a new number",
      desc: ["Ex: 14 is 1 + 4 = 5", "click next to proceed"],
    },

    {
      heading: "Subtract your new number from the original number",
      desc: ["Ex: 14 - 5 = 9", "click to proceed"],
    },

    {
      heading: "",
      desc: ["Find your new number.", "Note the letter beside the number"],
    },

    {
      heading: "",
      desc: ["Is that your letter?"],
    }];

  return (
    <div className="container">
      <h1>Current Page {pageNum}</h1>

      {pageNum === 0 && <h1 className="display1">I can read your mind...</h1>}

      {pageNum > 0 && pageNum < 4 && <h1>{pageContent[(pageNum - 1)].heading}</h1>}

      <button className="btn btn-danger" onClick={clickHome}>Home</button>
      <button className="btn btn-danger" onClick={clickBack}>Back</button>
      <button className="btn btn-danger" onClick={clickNext}>Next</button>
      <p>Page {(pageNum + 1)} of 6</p>

    </div>
  )
}

export default App;

// const Page0 = () => {
//   return (
//     <h1>I can read your mind</h1>
//   )
// }

// const Page1 = () => {
//   return (
//     <h1>page2</h1>
//   )
// }

// const Page2 = () => {
//   return (
//     <h1>page3</h1>
//   )
// }

// const Page3 = () => {
//   return (
//     <h1>page4</h1>
//   )
// }

// const Page4 = () => {
//   return (
//     <h1>page5</h1>
//   )
// }

// const Page5 = () => {
//   return (
//     <h1>page6</h1>
//   )
// }