//Initialise variables for DOM
const homeBtn = document.getElementById("home"),
    backBtn = document.getElementById("back"),
    nextBtn = document.getElementById("next"),
    heading = document.getElementById("heading"),
    pageNumber = document.getElementById("current-page"),
    subHead = document.getElementById("description");



//click listeners

homeBtn.addEventListener("click", init);
backBtn.addEventListener("click", back);
nextBtn.addEventListener("click", next);



//Page Content Object
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
//functions to run buttons

let state = 0;

function init() {
    state = 0;
    heading.textContent = pageContent[state].heading;
    pageNumber.innerHTML = pageContent[state].pgnum;
    subHead.innerHTML = pageContent[state].desc;
}


function next() {
    if (state < 6) {
        state++;
    }
    heading.innerHTML = pageContent[state].heading;
    subHead.innerHTML = pageContent[state].desc;
    pageNumber.innerHTML = pageContent[state].pgnum;
    if (state === 4) {
        let stringresult = stringlist();
        heading.innerHTML = stringresult;
    }
    if (state === 5) {
        heading.innerHTML = trick;
    }
}

function back() {
    if (state >= 0) {
        state--;
    }
    heading.innerHTML = pageContent[state].heading;
    subHead.innerHTML = pageContent[state].desc;
    pageNumber.innerHTML = pageContent[state].pgnum;
    if (state === 4) {
        let stringresult = stringlist();
        heading.innerHTML = stringresult;
    }
    if (state === 5) {
        heading.innerHTML = trick;
    }
}

init();
