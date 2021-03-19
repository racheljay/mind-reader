import React, { useState, useEffect } from 'react';


function App() {

  const [pageNum, setPageNum] = useState(0)
  const [listData, setListData] = useState([])
  const [solution, setSolution] = useState("")

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
      heading: "I can read your mind...",
      desc: []
    },
    {
      heading: "Pick a number from 1 - 99",
      desc: ["when you have your number click next",],
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
      desc: ["Find your new number.", "Note the symbol beside the number"],
    },

    {
      heading: "",
      desc: ["Are you blown away?"],
    }];

  //pair random letters with numbers
  // const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const letters = [
    "bi bi-stars",
    "bi bi-umbrella",
    "bi bi-wind",
    "bi bi-water",
    "bi bi-sun",
    "bi bi-flower2",
    "bi bi-bug-fill",
    "bi bi-eye-fill",
    "bi bi-eyeglasses",
    "bi bi-gem"
  ]
  let list = [];

  function rando() {
    return Math.floor(Math.random() * (9 - 0 + 1) + 0);
  }

  var trick = (letters[rando()]);

  function stringlist() {

    for (let i = 0; i <= 99; i++) {
      if (i % 9 === 0) {
        // list += i + " - " + trick;
        list.push({ num: i, letter: trick })
      } else if (i % 9 !== 0) {
        // list += i + " - " + letters[rando()];
        list.push({ num: i, letter: letters[rando()] })
      }
    }
    setSolution(trick)
    return list;
  }

  useEffect(() => {
    console.log("use effect")
    setListData(stringlist())
  }, [])

  return (
    <div className="container text-center">
      <h1 className="">Mystical Mind Reader</h1>

      <div className="container" id="box">


        <h1 className="display4">{pageContent[(pageNum)].heading}</h1>

        {listData.map((item, index) => {
          if (pageNum === 4) {
            return (
              <h1 data-spy="scroll" key={index}>{item.num} <i className="bi bi-arrow-right"></i> <i className={item.letter}></i></h1>
            )
          }
        })}

        {pageNum === 5 && <h1><i className={solution}></i></h1>}

      </div>

      <div id="desc">
        {pageNum < 6 && pageContent[pageNum].desc.map((item, index) => {
          return (
            <p>{item}</p>
          )
        })}
      </div>

      <button className="btn btn-danger" onClick={clickHome}><i class="bi bi-house"></i></button>
      <button className="btn btn-danger" onClick={clickBack}><i class="bi bi-chevron-double-left"></i></button>
      <button className="btn btn-danger" onClick={clickNext}><i class="bi bi-chevron-double-right"></i></button>
      <p>Page {(pageNum + 1)} of 6 </p>

    </div>
  )
}

export default App;
