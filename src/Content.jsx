import React from 'react';

function Content(props) {

    const pageContent = [{
        heading: "Mind Reader",
        desc: "",
        pgnum: 1
    },
    {
        heading: "Pick a number from 1 - 99",
        desc: "when you have your number click next",
        pgnum: 2
    },

    {
        heading: "Add both digits together to get a new number",
        desc: "Ex: 14 is 1 + 4 = 5 <br> click next to proceed",
        pgnum: 3
    },

    {
        heading: "Subtract your new number from the original number",
        desc: "Ex: 14 - 5 = 9 <br> click to proceed",
        pgnum: 4
    },

    {
        heading: "",
        desc: "Find your new number. <br> Note the letter beside the number",
        pgnum: 5
    },

    {
        heading: "",
        desc: "Is that your letter?",
        pgnum: 6
    }];

    //pair random letters with numbers
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let list = "";

    function rando() {
        return Math.floor(Math.random() * (9 - 0 + 1) + 0);
    }

    var trick = (letters[rando()]);

    function stringlist() {

        for (let i = 0; i <= 99; i++) {
            if (i % 9 === 0) {
                list += i + " - " + trick + "<br>";
            } else if (i % 9 !== 0) {
                list += i + " - " + letters[rando()] + "<br>";
            }
        }
        return list;
    }

    return (
        <div id="container">
            <div id="textbox">
                <h5 className="text-center" id="heading">{pageContent[props.currentState].heading}</h5>
            </div>
            <p className="text-center" id="description">{pageContent[props.currentState].desc}</p>
            <p className="text-center"><span id="current-page"></span><span>{pageContent[props.currentState].pgnum} of 6</span></p>

        </div>
    );
};

export default Content;