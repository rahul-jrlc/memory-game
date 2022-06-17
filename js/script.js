// DOM_CONTENT_LOADED GETS EXECUTED ONCE THE BASIC HTML DOC IS LOADED AND ITS PARSING HAS TAKEN PLACE.
// THIS EVENT DOES NOT WAIT FOR COMPLETION OF LOADING OF ADD-ONS(STYLESHEETS, IMAGES ETC)
document.addEventListener("DOMContentLoaded", function(){  
    // CARD OPTIONS
})



// ARRAY FOR THE CARDS DISPLAYED ON GRID
const cardArray = [
    {
        name: "fries",
        img: "../img/fries.png" 
    },
    {
        name: "cheeseburger",
        img: "../img/cheeseburger.png" 
    },
    {
        name: "hotdog",
        img: "../img/hotdog.png" 
    },
    {
        name: "ice-cream",
        img: "../img/ice-cream.png" 
    },
    {
        name: "pizza",
        img: "../img/pizza.png" 
    },
    {
        name: "milkshake",
        img: "../img/milkshake.png" 
    },
    {
        name: "white",
        img: "../img/white.png" 
    },
    {
        name: "blank",
        img: "../img/blank.png" 
    }

]  

const gameboard = document.querySelector("#grid") // GAMEBOARD GRID

// CREATE GAMEBOARD
function gameBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement("img") // CREATE IMAGE ELEMENT FOR EACH CARD
        card.setAttribute("src", "../img/blank.png")
    }
}