# mind-reader

Objects:
-page
-context box
    -heading
    -back button
    -next button
    -desc paragraph
    -home button
Scroll nav at bottom
    -home button
    -pagination? scroll back and forth

    Use Case: As a user I need to move back and forth through different pages. Each page will display different text. Buttons will change depending on what page I am on. I can hit next to go to the end, press restart, or use the bottom nav to scroll back and fourth.

    funciton Init() {
        set default - Set up the home screen (page 1)
                    - heading
                    - go button
                    - bottom nav
    }

clicklisteners
        -go button (changes to reset)
        -next button
    navarea
        -home button
        -left
        -right

function goHome () {
    on click restore settings for page 1
}

function next() {
    chage h1 ++
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

<div class="container pt-5" id="box">
        <h1 id="heading"></h1>

        <p id="description"></p>

        <div id="navigation">
            <button id="home">home</button>
            <button id="back">back</button>
            <span id="current-page"></span><span> of 6</span>
            <button id="next">next</button>
        </div>

    </div>