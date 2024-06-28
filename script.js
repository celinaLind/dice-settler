function rollDice() {
    // Generate a random number between 1 and 6
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Add class invisibility to all dots
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => {
        dot.classList.add("invisible");
    });
    // Remove class rollSix from dot--1 if it exists
    const dot1 = document.querySelectorAll(".dot--1");
    dot1.forEach((dot) => { 
        dot.classList.remove("rollSix");
    });

    winnerDisplay(randomNumber1, randomNumber2);
    // Display the result of the dice roll
   displayResult(randomNumber1, "dice--1");
   displayResult(randomNumber2, "dice--2"); 
   
}

function winnerDisplay(dice1, dice2) {
    const winner = document.querySelector(".winner");
    if(dice1 > dice2) {
        winner.textContent = "Player 1 wins!";
    } else if(dice1 < dice2) {
        winner.textContent = "Player 2 wins!";
    } else {
        winner.textContent = "It's a tie!";
    }

    document.querySelector(".winner").classList.remove("invisible");
}

function displayResult(diceResult, dice)  {
     //Based on random number, run the corresponding method 
    //to display appropriate dots
    switch(diceResult){   
        case 1:
            displayOne(dice);
            break;
        case 2:
            displayTwo(dice);
            break;
        case 3:
            displayThree(dice);
            break;
        case 4:
            displayFour(dice);
            break;
        case 5:
            displayFive(dice);
            break;
        case 6:
            displaySix(dice);
            break;
    }
}



function displayOne(diceNumber) {
    // Remove invisibility from the first dot
    document.querySelector(`.${diceNumber} .dot--1`).classList.remove("invisible");
}

function displayTwo(diceNumber) {
    // Remove invisibility from the second and third dot
    document.querySelector(`.${diceNumber} .dot--2`).classList.remove("invisible");
    document.querySelector(`.${diceNumber} .dot--3`).classList.remove("invisible");
}

function displayThree(diceNumber) {
    // Remove invisibility from the first, second and third dot
    for (let i = 1; i <= 3; i++) {
        document.querySelector(`.${diceNumber} .dot--${i}`).classList.remove("invisible");
    }
}

function displayFour(diceNumber) {
    // Remove invisibility from the second, third, fourth, and fifth dot
    for(let i = 2; i <= 5; i++){  
        document.querySelector(`.${diceNumber} .dot--${i}`).classList.remove("invisible");
    }
}

function displayFive(diceNumber) {
    // Remove invisibility from the first, second, third, fourth, and fifth dot
    for (let i = 1; i <= 5; i++) {
        document.querySelector(`.${diceNumber} .dot--${i}`).classList.remove("invisible");
    }
}

function displaySix(diceNumber) {
    // Add class rollSix to dot--1
    document.querySelector(`.${diceNumber} .dot--1`).classList.add("rollSix");

    // Remove invisibility from all dots
    const dots = document.querySelectorAll(`.${diceNumber} .dot`);
    dots.forEach((dot) => {
        dot.classList.remove("invisible");
    });
}   