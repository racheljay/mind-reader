# mind-reader

A project created as a part of the Awesome Inc Web developer boot camp curriculum during week one of front end development. The original version of this project was written in vanilla HTML, CSS, and JavaScript, and later refactored, restyled and converted into React. The original core purpose of this project was to understand the importance of state and learning how to create a single page application without the aid of a framework.

# Original Pseudo Code:

## Objects:
- context box
    - heading
    - back button
    - next button
    - desc paragraph
    - home button
- Scroll nav at bottom
    - home button
    - pagination? scroll back and forth

 Use Case: As a user I need to move back and forth through different pages. Each page will display different text. Buttons will change depending on what page I am on. I can hit next to go to the end, press restart, or use the bottom nav to navigate back and fourth.

    function Init(){
        set default state
        - set up the home screen (with page one)
        - start button
        - heading
        - bottom nav
    }

    click listeners
        - start button (change to reset) TODO
        - next button
        - nav area
            - home
            - left
            - right
    
    function home() {
        on click restores state for page 1
    }

    function next() {
        change h1 ++
        change paragraph ++
        change page number ++
        if page === 6 stop
    }

    function back() {
        change h1 --
        change paragraph --
        change page number --
        if page is === 0 stop
    }


